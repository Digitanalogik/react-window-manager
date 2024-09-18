import React from "react";
import { useDialogContext } from "../context/DialogContext";
import Dialog from "./Dialog";
import "./DialogManager.css";

const DialogManager: React.FC = () => {
  const { dialogs, addDialog, closeDialog, resizeDialog } = useDialogContext();

  const handleAddDialog = () => {
    addDialog(`Dialog ${dialogs.length + 1}`, <div>New Dialog Content</div>);
  };

  return (
    <div>
      <button id="add-dialog-button" onClick={handleAddDialog}>
        Add Dialog
      </button>
      {dialogs.map((dialog) => (
        <Dialog
          key={dialog.id}
          id={dialog.id}
          position={dialog.position}
          component={dialog.component}
          title={dialog.title}
          visible={dialog.visible}
          onClose={closeDialog}
          onResize={resizeDialog}
        />
      ))}
    </div>
  );
};

export default DialogManager;
