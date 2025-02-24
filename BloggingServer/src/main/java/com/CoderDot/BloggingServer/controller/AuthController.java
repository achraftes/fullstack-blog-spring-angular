package com.CoderDot.BloggingServer.controller;

import com.CoderDot.BloggingServer.entity.User;
import com.CoderDot.BloggingServer.service.UserService;
import com.CoderDot.BloggingServer.utils.JwtUtils;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;
    private final JwtUtils jwtUtils;

    public AuthController(UserService userService, JwtUtils jwtUtils) {
        this.userService = userService;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        if (userService.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body("Username already exists");
        }

        userService.registerUser(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        UserDetails userDetails = userService.loadUserByUsername(user.getUsername());

        if (userDetails != null && new BCryptPasswordEncoder().matches(user.getPassword(), userDetails.getPassword())) {
            String token = jwtUtils.generateToken(userDetails.getUsername());
            return ResponseEntity.ok("Bearer " + token); 
        }

        return ResponseEntity.status(401).body("Invalid credentials");
    }
}