package com.example.taskmanager.controllers;

import com.example.taskmanager.models.Tasks;
import com.example.taskmanager.services.TasksService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
@Tag(name = "Task Management System Test", description = "Task Management System Test to Join the HandsOn Team")
public class TasksController {

        @Autowired
        private TasksService tasksService;

        @Operation(summary = "Get All Tasks", description = "Get All Tasks")
        @GetMapping
        public ResponseEntity<List<Tasks>> getAllTasks() {
            List<Tasks> tasks = tasksService.getAllTasks();
            return new ResponseEntity<>(tasks, HttpStatus.OK);
        }

        @Operation(summary = "Get Task by ID", description = "Get Task by ID")
        @GetMapping("/{id}")
        public ResponseEntity<?> getTaskById(@PathVariable Long id) {
            Optional<Tasks> task = tasksService.getTaskById(id);
            // Handle validation err
            if (task.isPresent()) {
                return new ResponseEntity<>(task.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Task Not Found, ID Num : " + id, HttpStatus.NOT_FOUND);
            }
        }

        @Operation(summary = "Create Task", description = "Create Task")
        @PostMapping
        public ResponseEntity<?> createTask(@Valid @RequestBody Tasks task, BindingResult result) {
            // Handle validation err
            if (result.hasErrors()) {
                Map<String, String> errors = new HashMap<>();
                result.getFieldErrors().forEach(error -> errors.put(error.getField(), error.getDefaultMessage()));
                return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
            }
            Tasks createdTask = tasksService.createTask(task);
            return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
        }

        @Operation(summary = "Update Task By ID", description = "Update Task By ID")
        @PutMapping("/{id}")
        public ResponseEntity<?> updateTask(@PathVariable Long id, @Valid @RequestBody Tasks taskDetails, BindingResult result) {
           // Handle validation err
            if (result.hasErrors()) {
                Map<String, String> errors = new HashMap<>();
                result.getFieldErrors().forEach(error -> errors.put(error.getField(), error.getDefaultMessage()));
                return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
            }
            // Implement custom err messages
            Optional<Tasks> existingTask = tasksService.getTaskById(id);
            if (existingTask.isPresent()) {
                Tasks updatedTask = tasksService.updateTask(id, taskDetails).get();
                return new ResponseEntity<>(updatedTask, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Task Not Found, ID Num : " + id, HttpStatus.NOT_FOUND);
            }
        }

        @Operation(summary = "Delete By ID", description = "Delete By ID")
        @DeleteMapping("/{id}")
        public ResponseEntity<?> deleteTask(@PathVariable Long id) {
            // Custom validation
            if (tasksService.deleteTask(id)) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            } else {
                return new ResponseEntity<>("Task Not Found, ID Num : " + id, HttpStatus.NOT_FOUND);
            }
        }
    }
