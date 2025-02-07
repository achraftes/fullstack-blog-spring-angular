package com.CoderDot.BloggingServer.controller;

import com.CoderDot.BloggingServer.entity.User;
import com.CoderDot.BloggingServer.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        // Utilisez existsByUsername() au lieu de getUserByUsername()
        if (userService.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body("Username already exists");
        }
        
        userService.registerUser(user);
        return ResponseEntity.ok("User registered successfully");
    }
    // Le login est géré par Spring Security via /api/auth/login (POST)
}
