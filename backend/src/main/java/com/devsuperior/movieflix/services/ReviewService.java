package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
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

	@Autowired
	private AuthService authService;

	@Transactional(readOnly = true)
	public List<ReviewDTO> findByMovieId(Movie movie) {
		List<Review> list = repository.findByMovieId(movie);
		List<ReviewDTO> listDTO = list.stream().map(x -> new ReviewDTO(x)).collect(Collectors.toList());
		return (listDTO);
	}

	@PreAuthorize("hasAnyRole('MEMBER')")
	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		
		authService.validateIsMember();
		
		Review entity = new Review();
		copyDtoToEntity(dto, entity);
		entity = repository.save(entity);
		return new ReviewDTO(entity);
		
	}

	private void copyDtoToEntity(ReviewDTO dto, Review entity) {

		entity.setText(dto.getText());
		entity.setId(dto.getId());

		entity.setUser(authService.authenticated());

		Movie movie = new Movie();
		movie.setId(dto.getMovieId());

		entity.setMovie(movie);

	}

}
