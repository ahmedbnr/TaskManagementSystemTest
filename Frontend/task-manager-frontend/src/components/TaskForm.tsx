import React, { useState } from 'react';
import { Task } from '../types/Task';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Notification from './Notification';

// TaskForm props
interface TaskFormProps {
  addTask: (task: Task) => void;
}

// TaskForm Component
const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  // TaskForm states
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);
    
  // Form Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === '' || description.trim() === '') {
      setError('Title and description are required.');
      setOpen(true);
      return;
    }

    const newTask: Task = { title, description, completed: false };

    try {
      addTask(newTask);
      setTitle('');
      setDescription('');
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred.');
      setOpen(true);
    }
  };

  // Notification Dismiss Handler
  const handleClose = () => {
    setOpen(false);
    setError(null);
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-4"
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mb-4"
        />
        <Button variant="contained" color="primary" type="submit" style={{ marginTop: '16px', marginBottom: '16px' }}>
          Add Task
        </Button>
      </form>
      <Notification
        message={error || ''}
        severity="error"
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

export default TaskForm;
