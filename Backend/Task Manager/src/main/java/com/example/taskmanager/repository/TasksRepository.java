package com.example.taskmanager.repository;


import com.example.taskmanager.models.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;;

@Repository
public interface TasksRepository extends JpaRepository<Tasks, Long> {
}
