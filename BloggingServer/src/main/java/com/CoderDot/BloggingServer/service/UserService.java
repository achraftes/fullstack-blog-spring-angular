package com.CoderDot.BloggingServer.service;

import com.CoderDot.BloggingServer.entity.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    User registerUser(User user);
    boolean existsByUsername(String username);
}
