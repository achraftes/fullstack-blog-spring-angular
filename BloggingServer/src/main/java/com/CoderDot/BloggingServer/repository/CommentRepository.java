package com.CoderDot.BloggingServer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.CoderDot.BloggingServer.entity.Comment;

@Repository

public interface CommentRepository extends JpaRepository<Comment,Long>{

}

