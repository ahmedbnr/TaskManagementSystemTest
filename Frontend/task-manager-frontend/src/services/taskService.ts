import api from './api';
import { Task } from '../types/Task';


// GetAllTasks @returns Array of Task[]
export const fetchTasks = async (): Promise<Task[]> => {
    try {
      const response = await api.get('/tasks');
      if (response.request.responseURL && response.request.responseURL.includes('/login')) {
        return [];
      }
      if (Array.isArray(response.data)) {
        return response.data;
      } else {
        return []; // Return an empty array if the response is not an array
      }
    } catch (error) {
      console.error('Error fetching tasks:', error); // Log any errors
      throw error;
    }
  };


// Add Task @params task : Task @returns Array of Task[]
export const addTask = async (task: Task): Promise<Task> => {
    try {
        const response = await api.post('/tasks', task);
        return response.data;
      } catch (error) {
        throw error;
      }
};
// Update Task @params id : task.id  @params task : Task @returns Array of Task[]
export const updateTask = async (id: number, task: Task): Promise<Task> => {
    try {
        const response = await api.put(`/tasks/${id}`, task);
        return response.data;
      } catch (error) {
        throw error;
      }
};
// Delete Task @params id : task.id @returns void
export const deleteTask = async (id: number): Promise<void> => {
    try {
        await api.delete(`/tasks/${id}`);
      } catch (error) {
        console.error('Error deleting task:', error); // Log any errors
        throw error;
      }
};
