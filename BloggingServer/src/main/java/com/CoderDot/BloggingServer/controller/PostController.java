package com.CoderDot.BloggingServer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CoderDot.BloggingServer.entity.Post;
import com.CoderDot.BloggingServer.service.PostService;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "*")
public class PostController {
    @Autowired
    private PostService postService;


    @PostMapping
    public ResponseEntity<?> createPost(@RequestBody Post post){
        try {
            Post createPost = postService.savePost(post);
            return ResponseEntity.status(HttpStatus.CREATED).body(createPost);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
