import React, { useState } from "react";
import Dialog from "./Dialog";

interface DialogData {
  id: number;
  position: { x: number; y: number };
  component: JSX.Element;
  visible: boolean;
}

const DialogManager: React.FC = () => {
  const [dialogs, setDialogs] = useState<DialogData[]>([]);

  const addDialog = () => {
    const newDialog: DialogData = {
      id: Date.now(),
      position: { x: 100, y: 100 },  // Initial position
      component: <div>New Dialog Content</div>,  // Component to render inside the dialog
      visible: true,
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
        />
      ))}
    </div>
  );
};

export default DialogManager;
