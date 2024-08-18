// src/main/java/com/example/back/repository/UserRepository.java
package com.example.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.back.model.User;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    void deleteByEmail(String email);
}
