import React, { useState } from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types/Task';
import Notification from './Notification';
import ConfirmationDialog from './ConfirmationDialog';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// TaskList props
interface TaskListProps {
  tasks: Task[];
  updateTask: (id: number, task: Task) => void;
  deleteTask: (id: number) => void;
}

// TaskList Component
const TaskList: React.FC<TaskListProps> = ({ tasks, updateTask, deleteTask }) => {
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });
  const [confirmDialog, setConfirmDialog] = useState({ open: false, taskId: 0 });
  
  const handleDelete = async (id: number) => {
    setConfirmDialog({ open: true, taskId: id });
  };

  const handleConfirm = async (confirm: boolean) => {
    setConfirmDialog({ open: false, taskId: 0 });
    if (confirm && confirmDialog.taskId) {
      try {
        deleteTask(confirmDialog.taskId);
        setNotification({ open: true, message: 'Task deleted successfully', severity: 'success' });
      } catch (error) {
        setNotification({ open: true, message: 'Error deleting task', severity: 'error' });
      }
    }
  };
    
  return (
    <div>
    {tasks.length === 0 ? (
      <Card className="mb-4 rounded-lg">
        <CardContent>
          <Typography variant="h5" component="h2" className="text-center">
            No tasks available
          </Typography>
        </CardContent>
      </Card>
    ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={handleDelete} />
        ))
      )}
      <Notification
        message={notification.message}
        severity={notification.severity}
        open={notification.open}
        onClose={() => setNotification({ ...notification, open: false })}
      />
      <ConfirmationDialog
        open={confirmDialog.open}
        onClose={handleConfirm}
        title="Confirm Deletion"
        message="Are you sure you want to delete this task?"
      />
    </div>
  );
};
export default TaskList;
