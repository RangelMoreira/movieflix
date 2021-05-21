package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.repositories.GenereRepository;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Autowired
	private ReviewService reviewService;
	
	@Autowired
	private GenereRepository genreRepository;
	
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);
		Movie entity = obj.orElseThrow(()-> new ResourceNotFoundException("Entity not found"));
		List<ReviewDTO> list = reviewService.findByMovieId(entity);		
		return new MovieDTO(entity, list);
	}
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> find(Long genreId,  PageRequest pageRequest ){
		Genre genre = (genreId == 0) ? null : genreRepository.getOne(genreId);
		Page<Movie>  page = repository.find(genre,  pageRequest);
		return page.map(x-> new MovieDTO(x));
		
	}
	
}
