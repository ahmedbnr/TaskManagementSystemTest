import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types/Task'; // Import the Task type


// TaskList props
interface TaskListProps {
  tasks: Task[];
  updateTask: (id: number, task: Task) => void;
  deleteTask: (id: number) => void;
}

// TaskList Component
const TaskList: React.FC<TaskListProps> = ({ tasks, updateTask, deleteTask }) => {
    if (!Array.isArray(tasks)) {
        return <div>Error: tasks is not an array.</div>;
      }
    
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
