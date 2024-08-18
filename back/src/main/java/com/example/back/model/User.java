package com.example.back.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String email;
    private String mobileNumber;
    private String city;
    private String role;
    private String referCode;
    public User() {}

    public User(String name, String email, String mobileNumber, String city, String role, String referCode) {
        this.name = name;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.city = city;
        this.role = role;
        this.referCode = referCode;
    }
}
