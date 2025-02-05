import { CheckboxId, Segment, TabsTicket, TypeTicket } from "../types";

export const isTicketMatchesFilters = (tickets: TypeTicket, filters: Record<CheckboxId, boolean>) => {
    if (filters[CheckboxId.ALL]) {
      return true;
    }

    return tickets.segments.every((segment: Segment) => {
      const stopsCount = segment.stops.length;

      return (
        (filters[CheckboxId.NONE_TRANSFER] && stopsCount === 0) ||
        (filters[CheckboxId.ONE_TRANSFER] && stopsCount === 1) ||
        (filters[CheckboxId.TWO_TRANSFER] && stopsCount === 2) ||
        (filters[CheckboxId.THREE_TRANSFER] && stopsCount === 3)
      );
    });
  };

  export const sortTickets = (tickets: TypeTicket[], tabName: TabsTicket) => {
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