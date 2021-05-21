package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import com.devsuperior.movieflix.entities.Review;

public class ReviewDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String text;
	private String author;
	
	public ReviewDTO() {
		
	}

	public ReviewDTO(Long id, String text,  String author) {
		this.id = id;
		this.text = text;
		this.author = author;
	}
	
	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		author = entity.getUser().getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	
	
}
