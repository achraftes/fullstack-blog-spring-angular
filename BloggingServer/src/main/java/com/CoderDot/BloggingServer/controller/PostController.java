package com.CoderDot.BloggingServer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CoderDot.BloggingServer.entity.Post;
import com.CoderDot.BloggingServer.service.PostService;

import jakarta.persistence.EntityNotFoundException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "*")
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping(
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Post> createPost(@RequestBody Post post) {
        try {
            if (post == null) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            Post savedPost = postService.savePost(post);
            if (savedPost == null) {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return new ResponseEntity<>(savedPost, HttpStatus.CREATED);
        } catch (DataIntegrityViolationException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            e.printStackTrace(); // Pour le débogage
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<Post>> getAllPosts(){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(postService.getAllPosts());
        }  catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        
    }
    @GetMapping("/{Id}")
    public ResponseEntity<Post> getPostById(@PathVariable long Id){
          try{
            Post post = postService.getPostById(Id);
            return ResponseEntity.ok(post);
          }catch(EntityNotFoundException e){
             return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
          }

    }
    @PutMapping("/{postId}/like")
    public ResponseEntity<?> LikePost(@PathVariable long postId){
        try{
            postService.LikePost(postId);
            return ResponseEntity.ok(new String[]{"Post Liked Successfully"});
        } catch(EntityNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
        
    }
    @GetMapping("/search/{name}")
    public ResponseEntity<?> searchByName(@PathVariable String name){
         try{
            return ResponseEntity.status(HttpStatus.OK).body(postService.searchByName(name));
         } catch(Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
         }
    }
}