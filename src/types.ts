export const enum CheckboxId {
  ALL = "ALL",
  ONE_TRANSFER = "ONE_TRANSFER",
  TWO_TRANSFER = "TWO_TRANSFER",
  THREE_TRANSFER = "THREE_TRANSFER",
  NONE_TRANSFER = "NONE_TRANSFER",
}

export type TCheckboxState = {
  [key in CheckboxId]: boolean;
};

export type TStateCheckbox = {
  checkbox: TCheckboxState;
};

export type TSetCheckboxAction = {
  type: CheckboxActionTypes;
  payload: Partial<TCheckboxState>;
};

export enum CheckboxActionTypes {
  TURN_ON = "TURN_ON",
}

export type TActionCheckbox = TSetCheckboxAction;

export const enum TabsTicket {
  CHEAPEST = "CHEAPEST",
  FASTEST = "FASTEST",
}

export type TStateTickets = {
  tabName: TabsTicket;
  allTickets: TTypeTicket[];
  visibleTickets: TTypeTicket[];
  visibleCount: number;
  loading: boolean;
  error: string;
};

export type TSetTabsAction = {
  type: TabsActionTypes.SET_TABS;
  payload: TabsTicket;
};
export type TSetLoadingAction = {
  type: TabsActionTypes.SET_LOADING;
  payload: boolean;
};

export type TSetErrorAction = {
  type: TabsActionTypes.SET_ERROR;
  payload: string;
};

export type TSetTicketsAction = {
  type: TabsActionTypes.SET_TICKETS;
  payload: TTypeTicket[];
};

export type TSetVisibleCountAction = {
  type: TabsActionTypes.SET_VISIBLE_COUNT;
  payload: number;
};
export type TSetVisibleTicketsAction = {
  type: TabsActionTypes.SET_VISIBLE_TICKETS;
  payload: [];
};


export enum TabsActionTypes {
  SET_TABS = "SET_TABS",
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR",
  SET_TICKETS = "SET_TICKETS",
  SET_VISIBLE_COUNT = "SET_VISIBLE_COUNT",
  SET_VISIBLE_TICKETS = 'SET_VISIBLE_TICKETS',
}

export type TActionTab =
  | TSetTabsAction
  | TSetLoadingAction
  | TSetErrorAction
  | TSetTicketsAction
  | TSetVisibleCountAction
  | TSetVisibleTicketsAction;

// export type TActionTab = TSetTabsAction

export type TSegment = {
  stops: string[];
};

export interface ITicketsItemProps {
  price: number;
  segments: TTypeTicket["segments"];
} //это из ticketsItem

export type TTypeTicket = {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета туда
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    },
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета обратно
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    }
  ];
};
