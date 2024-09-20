import React, { useState } from 'react';

const DragDrop = () => {
  const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  const [items, setItems] = useState(initialItems);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const onDragStart = (index) => {
    setDraggingIndex(index);
  };

  const onDragOver = (index) => {
    const draggedOverItem = items[index];

    // If the item is dragged over itself, ignore
    if (draggingIndex === index) {
      return;
    }

    // Filter out the dragged item and insert it before the dragged over item
    let updatedItems = items.filter((_, idx) => idx !== draggingIndex);
    updatedItems.splice(index, 0, items[draggingIndex]);

    setItems(updatedItems);
    setDraggingIndex(index);
  };

  const onDrop = () => {
    setDraggingIndex(null);
  };

  return (
    <div>
      <h2>Drag and Drop Example</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={() => onDragStart(index)}
            onDragOver={() => onDragOver(index)}
            onDrop={onDrop}
            style={{
              padding: '10px',
              margin: '5px 0',
              border: '1px solid #ccc',
              cursor: 'move',
              backgroundColor: draggingIndex === index ? '#f0f0f0' : '#fff'
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragDrop;
