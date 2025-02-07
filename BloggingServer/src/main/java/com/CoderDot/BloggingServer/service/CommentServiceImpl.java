package com.CoderDot.BloggingServer.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CoderDot.BloggingServer.entity.Comment;
import com.CoderDot.BloggingServer.entity.Post;
import com.CoderDot.BloggingServer.repository.CommentRepository;
import com.CoderDot.BloggingServer.repository.PostRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostRepository postRepository;

    public Comment createComment(long postId, String postedBy, String content) {
        Optional<Post> optionalPost = postRepository.findById(postId);

        if (optionalPost.isPresent()) {
            Comment comment = new Comment();
            comment.setPost(optionalPost.get());
            comment.setContent(content);
            comment.setPostedBy(postedBy);
            comment.setCreatedAt(new java.sql.Date(System.currentTimeMillis()));

            return commentRepository.save(comment);
        }
        throw new EntityNotFoundException("Post not found");
    }

    public List<Comment> getCommentsForPostId(Long postId) {
        return commentRepository.findByPostId(postId);
    }
}
