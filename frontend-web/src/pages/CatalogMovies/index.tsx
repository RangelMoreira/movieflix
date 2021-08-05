
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from '../../components/MovieFilter';
import Pagination from '../../components/Pagination';
import { MovieResponse, Genre } from '../../core/types/Movie';
import { makePrivateRequest} from '../../core/utils/request';
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import MovieCard from './components/MovieCard';
import './styles.scss';

const CatalogMovies = () => {
  const [movieResponse, setMovieResponse] = useState<MovieResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [genre, setGenre] = useState<Genre>();


  const getMovies = useCallback(() => {
    const params = {
      page: activePage,
      linesPerPage: 8,
      genreId: genre?.id

    }
    setIsLoading(true);
    makePrivateRequest({ url: '/movies', params })
      .then(response => setMovieResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      })
  }, [activePage, genre]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const handleChangeGenre = (genre: Genre) => {
    setActivePage(0);
    setGenre(genre);
  }

  return (
    <div className="main">
      <Filter 
        genre={genre}
        handleChangeGenre={handleChangeGenre}
      />
      <div className="movies">
        {isLoading ? <MovieCardLoader /> : 
        (movieResponse?.content.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} />
          </Link>
        )))}
      </div>
      
      {movieResponse &&
        <Pagination
          totalPages={movieResponse?.totalPages}
          activePage={activePage}
          onChange={page => setActivePage(page)}
        />
      }


    </div>


  )
}

export default CatalogMovies;