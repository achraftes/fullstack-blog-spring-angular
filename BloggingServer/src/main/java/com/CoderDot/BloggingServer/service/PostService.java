package com.CoderDot.BloggingServer.service;

import java.util.List;

import com.CoderDot.BloggingServer.entity.Post;

public interface PostService {

    Post savePost(Post post);


    List<Post> getAllPosts();


    Post getPostById(long Id);

    void LikePost(long postId);


}
