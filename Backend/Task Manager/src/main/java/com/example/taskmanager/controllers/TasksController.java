package com.example.taskmanager.controllers;

import com.example.taskmanager.models.Tasks;
import com.example.taskmanager.services.TasksService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
@Tag(name = "Task Management System Test", description = "Task Management System Test to Join the HandsOn Team")
public class TasksController {
    @Autowired
    private TasksService tasksService;

    @Operation(summary = "Get All Tasks", description = "Get All Tasks")
    @GetMapping
    public List<Tasks> getAllTasks() {
        return tasksService.getAllTasks();
    }

    @Operation(summary = "Get Task by ID", description = "Get Task by ID")
    @GetMapping("/{id}")
    public ResponseEntity<Tasks> getTaskById(@PathVariable Long id) {
        Optional<Tasks> task = tasksService.getTaskById(id);
        return task.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "New Task", description = "New Task")
    @PostMapping
    public ResponseEntity<Tasks> createTask(@Valid @RequestBody Tasks task) {
        Tasks createdTask = tasksService.createTask(task);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTask);
    }

    @Operation(summary = "Update Task by ID", description = "Update Task by ID")
    @PutMapping("/{id}")
    public ResponseEntity<Tasks> updateTask(@PathVariable Long id, @Valid @RequestBody Tasks taskDetails) {
        Optional<Tasks> updatedTask = tasksService.updateTask(id, taskDetails);
        return updatedTask.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "Delete Task by ID", description = "Delete Task by ID")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        if (tasksService.deleteTask(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}