import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import "./Dialog.css";

interface DialogProps {
  id: number;
  position: { x: number; y: number };
  component: JSX.Element;
  visible: boolean;
  onClose: (id: number) => void;
  onResize: (id: number, size: { width: number; height: number }) => void;
}

const Dialog: React.FC<DialogProps> = ({
  id,
  position,
  component,
  visible,
  onClose,
  onResize,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Get the size of the dialog after it renders
    if (dialogRef.current) {
      const rect = dialogRef.current.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
      onResize(id, { width: rect.width, height: rect.height });
    }
  }, [id, onResize]);

  if (!visible) return null;

  return (
    <Draggable defaultPosition={position}>
      <div ref={dialogRef} className="dialog">
        <div className="dialog-header">
          <button onClick={() => onClose(id)}>Close</button>
        </div>
        <div className="dialog-content">{component}</div>
      </div>
    </Draggable>
  );
};

export default Dialog;
