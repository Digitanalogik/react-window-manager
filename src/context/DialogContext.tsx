import React, { createContext, useState, useContext, ReactNode } from "react";
import { DEFAULT_X, DEFAULT_Y, GAP } from "../utils/Constants";

interface DialogData {
  id: number;
  position: { x: number; y: number };
  component: JSX.Element;
  title: string;
  visible: boolean;
  size: { width: number; height: number };
}

interface DialogContextType {
  dialogs: DialogData[];
  addDialog: (title: string, component: JSX.Element) => void;
  closeDialog: (id: number) => void;
  resizeDialog: (id: number, size: { width: number; height: number }) => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const useDialogContext = (): DialogContextType => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialogContext must be used within a DialogProvider");
  }
  return context;
};

export const DialogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [dialogs, setDialogs] = useState<DialogData[]>([]);

  const addDialog = (title: string, component: JSX.Element) => {
    const lastDialog = dialogs[dialogs.length - 1];
    const defaultPosition = lastDialog
      ? {
          x: lastDialog.position.x,
          y: lastDialog.position.y + lastDialog.size.height + GAP,
        }
      : { x: DEFAULT_X, y: DEFAULT_Y };

    const newDialog: DialogData = {
      id: Date.now(),
      position: defaultPosition,
      title,
      component,
      visible: true,
      size: { width: 300, height: 200 },
    };

    setDialogs([...dialogs, newDialog]);
  };

  const closeDialog = (id: number) => {
    setDialogs((prevDialogs) =>
      prevDialogs.map((dialog) =>
        dialog.id === id ? { ...dialog, visible: false } : dialog
      )
    );
  };

  const resizeDialog = (
    id: number,
    size: { width: number; height: number }
  ) => {
    setDialogs((prevDialogs) =>
      prevDialogs.map((dialog) =>
        dialog.id === id ? { ...dialog, size } : dialog
      )
    );
  };

  return (
    <DialogContext.Provider
      value={{
        dialogs,
        addDialog,
        closeDialog,
        resizeDialog,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};
