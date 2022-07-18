import { ReactElement } from "react";

export interface IGetQuotes {
  _id: string;
  author: string;
  quote: string;
  year: string;
  month: string;
}

export interface IGetMessages<T> {
  _id: T;
  title: string;
  message: string;
}

export interface IPreventDefault {
  preventDefault: () => void;
}

export interface IDateProps {
  setYear: (year: string) => void;
  setMonth: (month: string) => void;
}

export interface IErrorProps {
  success: boolean;
  infoMessage: string;
}

export interface IMessages {
  messages: {
    _id: string;
    message: string;
    title: string;
  }[];
}

export interface IMessagesProps {
  messages: IMessages;
}

export interface IAuthorQuotes {
  authorquotes: {
    _id: string;
    author: string;
    quote: string;
    year: string;
    month: string;
  }[];
}

export interface IQuoteProps {
  quotes: IAuthorQuotes;
}

export type IStringValue = string;

export interface IChildrenProp {
  children: ReactElement;
}

export type IContextProps = {
  isLoading: boolean;
  setIsLoading: (c: boolean) => void;
};
