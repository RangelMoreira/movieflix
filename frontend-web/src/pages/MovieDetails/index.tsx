
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../../core/types/Movie';
import { isAllowedByRole } from '../../core/utils/auth';
import { makePrivateRequest } from '../../core/utils/request';
import MovieDescriptionLoader from '../CatalogMovies/components/Loaders/MovieDescriptionLoader';
import './styles.scss';

type ParamsType = {
  movieId: string;
}

const MovieDetails = () => {
  const { movieId } = useParams<ParamsType>();
  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState(false);
  const [evaluation, setEvaluation] = useState('');

  const payLoad = {
    text: evaluation,
    movieId: movieId
  }

  useEffect(() => {
    setIsLoading(true);
    makePrivateRequest({ url: `/movies/${movieId}` })
      .then(response => setMovie(response.data))
      .finally(() => setIsLoading(false));


  }, [movieId]);

  const handleChangeEvaluation = (evaluation: string) => {
    setEvaluation(evaluation);
  }

  const handleClcik = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    makePrivateRequest({ url: `/reviews`, method: 'POST', data: payLoad })
    setEvaluation('');
    window.location.reload();

  }

  return (
    <div className="main">
      {isLoading ? <MovieDescriptionLoader /> : (
        <>

            <div className="card-base details-card">
              <div className="image">
                <img
                  src={movie?.imgUrl}
                  alt={movie?.title}
                />
              </div>
              <div className="details">
                <h1 className="title">{movie?.title}</h1>
                <span className="year">{movie?.year}</span>
                <div className="description">
                  {movie?.synopsis}
                </div>
              </div>
            </div>

            {isAllowedByRole(['ROLE_MEMBER']) &&(
              <form action="">
                <div className="make-evaluation card-base">

                  <input
                    type="text"
                    placeholder="Deixe sua avaliação aqui"
                    onChange={event => handleChangeEvaluation(event.target.value)}
                    value={evaluation}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={(event) => handleClcik(event)}
                  >
                    SALVAR AVALIAÇÃO
                  </button>

                </div>
              </form>
             )} 

            {movie?.reviews.length !== 0 && (
              <div className="evaluations card-base">
                {movie?.reviews.map(review => (
                  <div key={review.id}>
                    <span className="author">⭐ &nbsp; {review.user.name}</span>
                    <div className="description-evaluation">
                      {review.text}
                    </div>
                  </div>
                )
                )}
              </div>
            )}

        </>
      )}
    </div>
  );
}

export default MovieDetails;

