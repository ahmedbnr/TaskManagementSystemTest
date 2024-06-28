package com.example.taskmanager.services;

import com.example.taskmanager.models.Tasks;
import com.example.taskmanager.repository.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TasksService {
    @Autowired
    private TasksRepository tasksRepository;

    public List<Tasks> getAllTasks() {
        return tasksRepository.findAll();
    }

    public Optional<Tasks> getTaskById(Long id) {
        return tasksRepository.findById(id);
    }

    public Tasks createTask(Tasks task) {
        return tasksRepository.save(task);
    }

    public Optional<Tasks> updateTask(Long id, Tasks taskDetails) {
        return tasksRepository.findById(id).map(task -> {
            task.setTitle(taskDetails.getTitle());
            task.setDescription(taskDetails.getDescription());
            task.setCompleted(taskDetails.isCompleted());
            return tasksRepository.save(task);
        });
    }

    public boolean deleteTask(Long id) {
        if (tasksRepository.existsById(id)) {
            tasksRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
