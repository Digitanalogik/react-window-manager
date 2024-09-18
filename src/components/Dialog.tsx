import React, { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
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
  const [size, setSize] = useState({ width: 300, height: 200 });

  const handleResize = (e: React.SyntheticEvent, data: ResizeCallbackData) => {
    setSize({ width: data.size.width, height: data.size.height });
    onResize(id, { width: data.size.width, height: data.size.height });
  };

  if (!visible) return null;

  return (
    <Draggable defaultPosition={position} handle=".dialog-header">
      <ResizableBox
        width={size.width}
        height={size.height}
        minConstraints={[200, 100]}  // Minimum width and height
        maxConstraints={[800, 600]}  // Maximum width and height
        onResize={handleResize}
        resizeHandles={['se']}
      >
        <div className="dialog" style={{ width: '100%', height: '100%' }}>
          <div className="dialog-header">
            <button onClick={() => onClose(id)}>Close</button>
          </div>
          <div className="dialog-content" style={{ width: '100%', height: '100%' }}>
            {component}
          </div>
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default Dialog;
