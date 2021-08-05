import { Movie } from '../../../../core/types/Movie';
import './styles.scss';

type Props = {
  movie: Movie;
}

const MovieCard = ({movie}:Props) => (
  <div className="card-base movie-card">
    <img
      src={movie.imgUrl}
      alt={movie.title}
      className="product-card-image"
    />
    <div className="content">
      <h3 className="title">{movie.title}</h3>
      <strong className="year">{movie.year}</strong>
      <div className="description">
        {movie.synopsis}
        ...
      </div>
      
    </div>
  </div>
);

export default MovieCard;