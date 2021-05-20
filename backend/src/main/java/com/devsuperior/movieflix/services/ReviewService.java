package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.repositories.ReviewRepository;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;
	
	
	@Transactional(readOnly = true)
	public List<ReviewDTO> findByMovieId(Movie movie){
		
		List<Review> list = repository.findByMovieId(movie);
		
		List<ReviewDTO> listDTO = list.stream().map(x -> new ReviewDTO(x))
				.collect(Collectors.toList());
		
		return (listDTO);
		
	}
}
