import React from 'react';
import Tag from './Tag';
import { Task } from '../types/Task';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
    <Card 
      className="task-card" 
      sx={{ 
        position: 'relative', 
        borderRadius: '16px', 
        mb: 2, 
        borderColor: 'grey.500', 
        borderWidth: 1, 
        borderStyle: 'solid' 
      }}
    >
      <Tag completed={task.completed} className="tag" sx={{ position: 'absolute', top: 8, right: 8 }} />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ textAlign: 'center', mb: 1 }}>
          {task.title}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
          {task.description}
        </Typography>
        <div className="buttons" style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
          <Button variant="contained" color="warning" onClick={handleUpdate}>
           Finish
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
