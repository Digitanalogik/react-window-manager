import React, { useState } from "react";
import Dialog from "./Dialog";

interface DialogData {
  id: number;
  position: { x: number; y: number };
  component: JSX.Element;
  visible: boolean;
  size: { width: number; height: number };
}

const GAP = 10;

const DialogManager: React.FC = () => {
  const [dialogs, setDialogs] = useState<DialogData[]>([]);

  const addDialog = () => {
    // Calculate position based on existing dialogs
    const lastDialog = dialogs[dialogs.length - 1];
    const defaultPosition = lastDialog
      ? {
          x: lastDialog.position.x,
          y: lastDialog.position.y + lastDialog.size.height + GAP, 
        }
      : { x: 100, y: 100 }; // Default position for the first dialog

    const newDialog: DialogData = {
      id: Date.now(),
      position: defaultPosition, // Dynamically calculate position
      component: <div>New Dialog Content</div>,
      visible: true,
      size: { width: 300, height: 200 }, // Default size, will be updated later
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

  const updateDialogSize = (id: number, size: { width: number; height: number }) => {
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
          visible={dialog.visible}
          onClose={closeDialog}
          onResize={updateDialogSize}
        />
      ))}
    </div>
  );
};

export default DialogManager;
