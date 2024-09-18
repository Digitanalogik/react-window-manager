import React, { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import DialogDebugInfo from "./DialogDebugInfo";
import {
  DEFAULT_DIALOG_WIDTH,
  DEFAULT_DIALOG_HEIGHT,
  MIN_DIALOG_WIDTH,
  MIN_DIALOG_HEIGHT,
  MAX_DIALOG_WIDTH,
  MAX_DIALOG_HEIGHT,
  RESIZE_HANDLE_SIZE,
  RESIZE_GRID_SIZE,
} from "../utils/Constants";
import "./Dialog.css";
import iconLock from "../assets/lock.svg";
import iconMove from "../assets/move.svg";
import iconExpand from "../assets/expand.svg";

interface DialogProps {
  id: number;
  position: { x: number; y: number };
  component: JSX.Element;
  title: string;
  visible: boolean;
  onClose: (id: number) => void;
  onResize: (id: number, size: { width: number; height: number }) => void;
}

const Dialog: React.FC<DialogProps> = ({
  id,
  position,
  component,
  title,
  visible,
  onClose,
  onResize,
}) => {
  const [size, setSize] = useState({
    width: DEFAULT_DIALOG_WIDTH,
    height: DEFAULT_DIALOG_HEIGHT,
  });
  const [isDraggable, setIsDraggable] = useState(false); // To toggle dragging
  const [isResizable, setIsResizable] = useState(true); // To toggle resizing

  const handleResize = (e: React.SyntheticEvent, data: ResizeCallbackData) => {
    setSize({ width: data.size.width, height: data.size.height });
    onResize(id, { width: data.size.width, height: data.size.height });
  };

  if (!visible) return null;

  // Determine the dynamic classes based on state
  const dialogClassNames = [
    "dialog",
    isDraggable ? "dialog-move-mode" : "",
    isResizable ? "dialog-resize-mode" : "",
  ].join(" ");

  return (
    <Draggable
      disabled={!isDraggable}
      defaultPosition={position}
      handle=".dialog-header"
    >
      <ResizableBox
        width={size.width}
        height={size.height}
        minConstraints={[MIN_DIALOG_WIDTH, MIN_DIALOG_HEIGHT]}
        maxConstraints={[MAX_DIALOG_WIDTH, MAX_DIALOG_HEIGHT]}
        handleSize={[RESIZE_HANDLE_SIZE, RESIZE_HANDLE_SIZE]}
        resizeHandles={isResizable ? ["se"] : []} // Enable/disable resizing based on state
        onResize={handleResize}
        draggableOpts={{ grid: [RESIZE_GRID_SIZE, RESIZE_GRID_SIZE] }}
      >
        <div className={dialogClassNames}>
          <div className="dialog-header">
            <span>{title}</span>
            <div className="dialog-actions">
              <button onClick={() => setIsDraggable(!isDraggable)}>
                <img
                  src={isDraggable ? iconLock : iconMove}
                  alt="Toggle Drag"
                />
              </button>
              <button onClick={() => setIsResizable(!isResizable)}>
                <img
                  src={isResizable ? iconLock : iconExpand}
                  alt="Toggle Resize"
                />
              </button>
              <button onClick={() => onClose(id)}>❌ Close</button>
            </div>
          </div>
          <div
            className="dialog-content"
            style={{ width: "100%", height: "100%" }}
          >
            {component}
            <DialogDebugInfo position={position} size={size} />
          </div>
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default Dialog;
