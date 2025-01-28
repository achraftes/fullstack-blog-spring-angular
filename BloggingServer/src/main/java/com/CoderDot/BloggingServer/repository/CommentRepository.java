package com.CoderDot.BloggingServer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.CoderDot.BloggingServer.entity.Comment;
import java.util.List;


@Repository

public interface CommentRepository extends JpaRepository<Comment,Long>{
    List<Comment> findByPostId(Long postId);

}

