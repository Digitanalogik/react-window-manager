import React, { useState } from "react";
import Dialog from "./Dialog";
import {
  GAP,
  DEFAULT_X,
  DEFAULT_Y,
  DEFAULT_DIALOG_WIDTH,
  DEFAULT_DIALOG_HEIGHT,
} from "../utils/Constants";

interface DialogData {
  id: number;
  position: { x: number; y: number };
  component: JSX.Element;
  title: string; // Added title to each dialog
  visible: boolean;
  size: { width: number; height: number };
}

const DialogManager: React.FC = () => {
  const [dialogs, setDialogs] = useState<DialogData[]>([]);

  const addDialog = () => {
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
      title: `Dialog ${dialogs.length + 1}`,
      component: <div>New Dialog Content</div>,
      visible: true,
      size: { width: DEFAULT_DIALOG_WIDTH, height: DEFAULT_DIALOG_HEIGHT },
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

  const updateDialogSize = (
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
    <div>
      <button onClick={addDialog}>Add Dialog</button>
      {dialogs.map((dialog) => (
        <Dialog
          key={dialog.id}
          id={dialog.id}
          position={dialog.position}
          component={dialog.component}
          title={dialog.title} // Pass title prop
          visible={dialog.visible}
          onClose={closeDialog}
          onResize={updateDialogSize}
        />
      ))}
    </div>
  );
};

export default DialogManager;
