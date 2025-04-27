import React, { useState } from "react";

const DragDropBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" }
  ]);

  const [draggedTask, setDraggedTask] = useState(null);

  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  const handleDrop = (index) => {
    if (!draggedTask) return;

    const updatedTasks = tasks.filter((t) => t.id !== draggedTask.id);
    updatedTasks.splice(index, 0, draggedTask);
    setTasks(updatedTasks);
    setDraggedTask(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Drag and Drop Board</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {tasks.map((task, index) => (
          <div
            key={task.id}
            draggable
            onDragStart={() => handleDragStart(task)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
            style={{
              padding: "20px",
              backgroundColor: "#f0f0f0",
              border: "1px solid #ccc",
              borderRadius: "8px",
              cursor: "grab"
            }}
          >
            {task.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragDropBoard;
