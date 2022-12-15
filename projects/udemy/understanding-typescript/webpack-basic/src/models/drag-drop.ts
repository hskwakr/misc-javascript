// Drag & Drop Interfaces

// Element can drag and drop
export interface Draggable {
  // Start of drag event
  dragStartHandler(event: DragEvent): void;
  // End of drag event
  dragEndHandler(event: DragEvent): void;
}

// Target for the draggable elements
export interface DragTarget {
  // Signal that dragging something over the target
  dragOverHandler(event: DragEvent): void;
  // React to the drop happens
  dropHandler(event: DragEvent): void;
  // Useful for:
  // - no drop happens
  // - it's canceled
  // - the user moves the element away
  dragLeaveHandler(event: DragEvent): void;
}
