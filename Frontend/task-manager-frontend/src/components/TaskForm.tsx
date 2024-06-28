import React, { useState } from 'react';
import { Task } from '../types/Task';

// TaskForm props
interface TaskFormProps {
  addTask: (task: Task) => void;
}

// TaskForm Component
const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
    // Task state
  const [task, setTask] = useState<Task>({ title: '', description: '', completed: false });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(task);
    setTask({ title: '', description: '', completed: false });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        required
        className="border p-2"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        required
        className="border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Task</button>
    </form>
  );
};

export default TaskForm;
