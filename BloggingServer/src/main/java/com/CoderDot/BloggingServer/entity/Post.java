package com.CoderDot.BloggingServer.entity;

import java.sql.Date;
import java.util.List;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Post {
    
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;

private String name;


@Column(length = 5000)

private String content;

private String postedBy;


private String img;

private Date date;

private int likeCount;

private int viewCount;

private List<String> tags;


}
