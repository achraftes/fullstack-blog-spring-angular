package com.CoderDot.BloggingServer.service;

import com.CoderDot.BloggingServer.entity.Comment;

public interface CommentService {
    
    Comment createComment(long postId, String postedBy, String content);
}
