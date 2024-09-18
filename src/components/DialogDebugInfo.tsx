import React from "react";

interface DialogDebugInfoProps {
  position: { x: number; y: number };
  size: { width: number; height: number };
}

const DialogDebugInfo: React.FC<DialogDebugInfoProps> = ({
  position,
  size,
}) => {
  return (
    <div className="dialog-debug-info">
      <div>
        <strong>Position:</strong> (x: {position.x}, y: {position.y})
      </div>
      <div>
        <strong>Size:</strong> (width: {size.width}px, height: {size.height}px)
      </div>
    </div>
  );
};

export default DialogDebugInfo;
