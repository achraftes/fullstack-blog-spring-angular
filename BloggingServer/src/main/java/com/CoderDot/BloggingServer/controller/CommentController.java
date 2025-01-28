package com.CoderDot.BloggingServer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.CoderDot.BloggingServer.service.CommentService;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/")
@CrossOrigin
public class CommentController {
    @Autowired
    private CommentService commentService;


    @PostMapping("comments/create")
    public ResponseEntity<?>createComment(@RequestParam long postId,
                                          @RequestParam String postedBy,
                                          @RequestParam String content){
          try {
            return ResponseEntity.ok(commentService.createComment(postId, postedBy, content));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }                           
                                            

    }


    @GetMapping("comments/{postId}")
    public ResponseEntity <?>getCommentsForPostId(@PathVariable Long postId){
        try{
            return ResponseEntity.ok(commentService.getCommentsForPostId(postId));
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("something Went Wrong");
        }
    }

}
