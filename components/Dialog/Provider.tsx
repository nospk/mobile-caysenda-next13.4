"use client";
import React, { createContext, useContext, useReducer } from "react";

type DialogData = {
  message: string;
  time?: number;
};

type DialogAction = {
  type: "DIALOG";
  dialog: DialogData;
};

const dialogReducer = (state: DialogData, action: DialogAction): DialogData => {
  switch (action.type) {
    case "DIALOG":
      return action.dialog;
    default:
      return state;
  }
};
const defaultValue = {
  message: "",
};

const myDialog = {
  dialog: defaultValue,
  setDialog: (action: DialogAction): void => {},
};
const DialogContext = createContext<{
  dialog: DialogData;
  setDialog: React.Dispatch<DialogAction>;
}>(myDialog);
interface Props {
  children: React.ReactNode;
}

export const DialogProvider: React.FC<Props> = ({ children }) => {
  const [dialog, setDialog] = useReducer(dialogReducer, defaultValue);

  return (
    <DialogContext.Provider value={{ dialog, setDialog }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);
