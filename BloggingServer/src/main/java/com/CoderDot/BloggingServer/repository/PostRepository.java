package com.CoderDot.BloggingServer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.CoderDot.BloggingServer.entity.Post;

@Repository

public interface PostRepository extends JpaRepository<Post,Long>{

}