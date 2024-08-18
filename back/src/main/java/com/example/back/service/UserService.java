// src/main/java/com/example/back/service/UserService.java
package com.example.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.back.model.User;
import com.example.back.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    // Save a new user
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // Retrieve all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Update a user by email
    public Optional<User> updateUserByEmail(String email, User user) {
        Optional<User> existingUserOpt = userRepository.findByEmail(email);
        if (existingUserOpt.isPresent()) {
            User existingUser = existingUserOpt.get();
            existingUser.setName(user.getName());
            existingUser.setEmail(user.getEmail());
            existingUser.setMobileNumber(user.getMobileNumber());
            existingUser.setCity(user.getCity());
            existingUser.setRole(user.getRole());
            existingUser.setReferCode(user.getReferCode());
            return Optional.of(userRepository.save(existingUser));
        } else {
            return Optional.empty();
        }
    }

    // Delete a user by email
    public Optional<User> deleteUserByEmail(String email) {
        Optional<User> existingUserOpt = userRepository.findByEmail(email);
        if (existingUserOpt.isPresent()) {
            userRepository.deleteByEmail(email);
            return existingUserOpt;
        } else {
            return Optional.empty();
        }
    }
}
