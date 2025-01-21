package com.CoderDot.BloggingServer.service;

import com.CoderDot.BloggingServer.entity.Post;
import com.CoderDot.BloggingServer.repository.PostRepository;

import jakarta.persistence.EntityNotFoundException;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;

    public Post savePost(Post post) {
        post.setLikeCount(0);
        post.setViewCount(0);
        post.setDate(new Date(Calendar.getInstance().getTimeInMillis()));

        return postRepository.save(post);
    }


    public List<Post> getAllPosts(){
        return postRepository.findAll();
    }


    public Post getPostById(long Id){
        Optional<Post> optionalpost = postRepository.findById(Id);
        if (optionalpost.isPresent()){
            Post post = optionalpost.get();

            post.setViewCount(post.getViewCount()+1);
            return postRepository.save(post);
        } else{
            throw new EntityNotFoundException("Post not found");
        }
    }
}