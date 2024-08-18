// src/main/java/com/example/back/controller/UserController.java
package com.example.back.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.back.model.User;
import com.example.back.service.UserService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

    // Existing POST method
    @PostMapping("/signup")
    public ResponseEntity<User> signUp(@RequestBody User user) {
        User savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }

    // GET method to retrieve all users
    @GetMapping("/get")
    public ResponseEntity<List<User>> getAllUsers() {
        List <User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    // PUT method to update a user by email
    @PutMapping("/email/{email}")
    public ResponseEntity<User> updateUserByEmail(@PathVariable String email, @RequestBody User user) {
        Optional<User> updatedUser = userService.updateUserByEmail(email, user);
        return updatedUser.map(ResponseEntity::ok)
                          .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // DELETE method to remove a user by email
    @DeleteMapping("/email/{email}")
    public ResponseEntity<Void> deleteUserByEmail(@PathVariable String email) {
        Optional<User> existingUser = userService.deleteUserByEmail(email);
        if (existingUser.isPresent()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
