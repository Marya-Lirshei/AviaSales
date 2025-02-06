import { CheckboxId, TSegment, TabsTicket, TTypeTicket } from "../types";

export const isTicketMatchesFilters = (tickets: TTypeTicket, filters: Record<CheckboxId, boolean>) => {
    if (filters[CheckboxId.ALL]) {
      return true;
    }

    return tickets.segments.every((segment: TSegment) => {
      const stopsCount = segment.stops.length;

      switch (stopsCount) {
        case 0:
          return filters[CheckboxId.NONE_TRANSFER];
        case 1:
          return filters[CheckboxId.ONE_TRANSFER];
        case 2:
          return filters[CheckboxId.TWO_TRANSFER];
        case 3:
          return filters[CheckboxId.THREE_TRANSFER];
        default:
          return false;
      }
    });
  };

  export const sortTickets = (tickets: TTypeTicket[], tabName: TabsTicket) => {
    switch (tabName) {
      case TabsTicket.CHEAPEST:
        return [...tickets].sort((a, b) => a.price - b.price);
  
      case TabsTicket.FASTEST:
        return [...tickets].sort(
          (a, b) => a.segments[0].duration - b.segments[0].duration
        );
  
      default:
        return tickets;
    }
  };