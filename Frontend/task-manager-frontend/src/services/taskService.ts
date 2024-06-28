import api from './api';
import { Task } from '../types/Task';


// GetAllTasks @returns Array of Task[]
export const fetchTasks = async (): Promise<Task[]> => {
    try {
      const response = await api.get('/tasks');
      if (response.request.responseURL && response.request.responseURL.includes('/login')) {
        console.error('Redirection to login page detected. Authentication failed.');
        return [];
      }
      console.log('fetchTasks response:', response.data); // Log the response data
      if (Array.isArray(response.data)) {
        return response.data;
      } else {
        console.error("API response is not an array:", response.data);
        return []; // Return an empty array if the response is not an array
      }
    } catch (error) {
      console.error('Error fetching tasks:', error); // Log any errors
      return [];
    }
  };


// Add Task @params task : Task @returns Array of Task[]
export const addTask = async (task: Task): Promise<Task> => {
    try {
        const response = await api.post('/tasks', task);
        console.log('addTask response:', response.data); // Log the response data
        return response.data;
      } catch (error) {
        console.error('Error adding task:', error); // Log any errors
        throw error;
      }
};
// Update Task @params id : task.id  @params task : Task @returns Array of Task[]
export const updateTask = async (id: number, task: Task): Promise<Task> => {
    try {
        const response = await api.put(`/tasks/${id}`, task);
        console.log('updateTask response:', response.data); // Log the response data
        return response.data;
      } catch (error) {
        console.error('Error updating task:', error); // Log any errors
        throw error;
      }
};
// Delete Task @params id : task.id @returns void
export const deleteTask = async (id: number): Promise<void> => {
    try {
        await api.delete(`/tasks/${id}`);
        console.log('deleteTask response: Task deleted successfully'); // Log success message
      } catch (error) {
        console.error('Error deleting task:', error); // Log any errors
        throw error;
      }
};
