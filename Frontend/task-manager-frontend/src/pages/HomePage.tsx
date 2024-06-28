import React, { useEffect, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { fetchTasks, addTask, updateTask, deleteTask } from '../services/taskService';
import { Task } from '../types/Task';

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasks = await fetchTasks();
        console.log('Fetched tasks:', tasks); // Log the fetched tasks
        setTasks(tasks);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    getTasks();
  }, []);

  const handleAddTask = async (task: Task) => {
    try {
      const newTask = await addTask(task);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  const handleUpdateTask = async (id: number, updatedTask: Task) => {
    try {
      const task = await updateTask(id, updatedTask);
      setTasks(tasks.map(t => (t.id === id ? task : t)));
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Management System</h1>
      <TaskForm addTask={handleAddTask} />
      <TaskList tasks={tasks} updateTask={handleUpdateTask} deleteTask={handleDeleteTask} />
    </div>
  );
};

export default HomePage;
