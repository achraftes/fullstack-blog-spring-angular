package com.CoderDot.BloggingServer.service;

import java.util.List;

import com.CoderDot.BloggingServer.entity.Comment;

public interface CommentService {
    
    Comment createComment(long postId, String postedBy, String content);

     List<Comment> getCommentsForPostId(Long postId);
}
