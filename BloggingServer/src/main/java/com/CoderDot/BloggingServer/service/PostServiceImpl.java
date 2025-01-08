package com.CoderDot.BloggingServer.service;

import com.CoderDot.BloggingServer.entity.Post;
import com.CoderDot.BloggingServer.repository.PostRepository;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    private PostRepository postRepository;

    public Post savePost(Post post){
        post.setLikeCount(0);
        post.setViewCount(0);
        post.setDate(new Date());

        return postRepository.save(post);
    }
}
