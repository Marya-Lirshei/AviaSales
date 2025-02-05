export const enum CheckboxId {
  ALL = 'ALL',
  ONE_TRANSFER = 'ONE_TRANSFER',
  TWO_TRANSFER = 'TWO_TRANSFER',
  THREE_TRANSFER = 'THREE_TRANSFER',
  NONE_TRANSFER = 'NONE_TRANSFER',
}

export type CheckboxState = {
  [key in CheckboxId]: boolean;
};

export type TStateCheckbox = {
  checkbox: CheckboxState,
}

export type TSetCheckboxAction = {
  type: CheckboxActionTypes,
  payload: Partial<CheckboxState>,
}

export enum CheckboxActionTypes {
  TURN_ON = 'TURN_ON',
}

export type TActionCheckbox = TSetCheckboxAction;



export const enum TabsTicket {
  CHEAPEST = 'CHEAPEST',
  FASTEST = 'FASTEST',
  OPTIMAL = 'OPTIMAL',
}

export type TStateTab = {
  tabName: TabsTicket;
}

export type TSetTabsAction = {
  type: TabsActionTypes;
  payload: TabsTicket;
};

export enum TabsActionTypes {
  SET_TABS = 'SET_TABS',
}

export type TActionTab = TSetTabsAction 

export type Segment = {
  stops: string[];
};

export interface TicketsItemProps {
  price: number;
  segments: TypeTicket["segments"];
}//это из ticketsItem

export type TypeTicket = {
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
