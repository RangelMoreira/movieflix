import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../../core/types/Movie';
import { makePrivateRequest } from '../../core/utils/request';
import './styles.scss';

type ParamsType = {
  movieId: string;
}

const MovieDetails = () => {
  const { movieId } = useParams<ParamsType>();
  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    makePrivateRequest({ url: `/movies/${movieId}` })
      .then(response => setMovie(response.data))
      .finally(() => setIsLoading(false));

  }, [movieId]);


  return (
    <div className="main">
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

      <div className="make-evaluation card-base">
        <input type="text" placeholder="Deixe sua avaliação aqui" />
        <button className="btn btn-primary ">
          SALVAR AVALIAÇÃO
        </button>
      </div>

      
        <div className="evaluations card-base">
          <span className="author">⭐Nome</span>
          <div className="description-evaluation">
          Mussum Ipsum, cacilds vidis litro abertis.
          </div>
        </div>
      
    </div>

  );
}

export default MovieDetails;

