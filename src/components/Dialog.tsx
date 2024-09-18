import React, { FC } from "react";
import Draggable from "react-draggable";
import "./Dialog.css";

interface DialogProps {
  id: number;
  position: { x: number; y: number };
  component: JSX.Element;
  visible: boolean;
  onClose: (id: number) => void;
}

const Dialog: FC<DialogProps> = ({ id, position, component, visible, onClose }) => {
  if (!visible) return null;

  return (
    <Draggable defaultPosition={position}>
      <div className="dialog">
        <div className="dialog-header">
          <button onClick={() => onClose(id)}>Close</button>
        </div>
        <div className="dialog-content">{component}</div>
      </div>
    </Draggable>
  );
};

export default Dialog;
