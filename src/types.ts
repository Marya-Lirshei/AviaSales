export const enum TabsTicket {
  CHEAPEST = 'CHEAPEST',
  FASTEST = 'FASTEST',
  OPTIMAL = 'OPTIMAL',
}

export type TState = {
  tabName: TabsTicket;
}

export type TSetTabsAction = {
  type: TabsActionTypes;
  payload: TabsTicket;
};

export enum TabsActionTypes {
  SET_TABS = 'SET_TABS',
}

export type TAction = TSetTabsAction 


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
