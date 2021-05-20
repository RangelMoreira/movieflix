package com.devsuperior.movieflix.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;

public class MovieDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String title;
	private String subTitle;
	private Integer year;
	private String imgUrl;
	private String synopsis;
	
	private List<ReviewDTO> reviews = new ArrayList<>();
	
	public MovieDTO() {
		
	}

	public MovieDTO(Long id, String title, String subTitle, Integer year, String imgUrl, String synopsis) {
		super();
		this.id = id;
		this.title = title;
		this.subTitle = subTitle;
		this.year = year;
		this.imgUrl = imgUrl;
		this.synopsis = synopsis;
	}
	
	public MovieDTO(Movie entitie) {
		id = entitie.getId();
		title = entitie.getTitle();
		subTitle = entitie.getSubTitle();
		year = entitie.getYear();
		imgUrl = entitie.getImgUrl();
		synopsis = entitie.getSynopsis();
	}
	
	public MovieDTO(Movie entity, Set<Review> reviews) {
		this(entity);
		reviews.forEach(rev -> this.reviews.add(new ReviewDTO(rev)));
	}
	
	public MovieDTO(Movie entity, List<ReviewDTO> reviews) {
		this(entity);
		reviews.forEach(rev -> this.reviews.add(rev));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSubTitle() {
		return subTitle;
	}

	public void setSubTitle(String subTitle) {
		this.subTitle = subTitle;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getSynopsis() {
		return synopsis;
	}

	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}

	public List<ReviewDTO> getReviews() {
		return reviews;
	}
	
	
}
