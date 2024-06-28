import React from 'react';
import Tag from './Tag';
import { Task } from '../types/Task'; // Import the Task type

// TaskItem props
interface TaskItemProps {
  task: Task;
  updateTask: (id: number, task: Task) => void;
  deleteTask: (id: number) => void;
}

// TaskItem Component
const TaskItem: React.FC<TaskItemProps> = ({ task, updateTask, deleteTask }) => {
    
    // Update Task Item
  const handleUpdate = () => {
    if (task.id !== undefined) {
      updateTask(task.id, { ...task, completed: !task.completed });
    }
  };

  // Delete Task Item
  const handleDelete = () => {
    if (task.id !== undefined) {
      deleteTask(task.id);
    }
  };

  return (
    <div className="border p-4 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">{task.title}</h2>
        <p>{task.description}</p>
        <Tag completed={task.completed} />
      </div>
      <div className="space-x-2">
        <button onClick={handleUpdate} className="bg-yellow-500 text-white p-2 rounded">Toggle Complete</button>
        <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
