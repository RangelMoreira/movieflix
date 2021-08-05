
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from '../../components/MovieFilter';
import { MovieResponse } from '../../core/types/Movie';
import { makePrivateRequest, makeRequest } from '../../core/utils/request';
import MovieCard from './components/MovieCard';
import './styles.scss';

const CatalogMovies = () => {
  const [movieResponse, setMovieResponse] = useState<MovieResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [name, setName] = useState('');


  const getMovies = useCallback(() => {
    const params = {
      page: activePage,
      linesPerPage: 8,
      name: name,
      //genreId: genreId?.id

    }
    setIsLoading(true);
    makePrivateRequest({ url: '/movies', params })
      .then(response => setMovieResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      })
  }, [activePage, name]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);


  return (
    <div className="main">
      <Filter />
      <div className="movies">
        {movieResponse?.content.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>


    </div>


  )
}

export default CatalogMovies;