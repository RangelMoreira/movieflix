import { useEffect, useState } from 'react';
import { Genre } from '../../core/types/Movie';
import { makePrivateRequest } from '../../core/utils/request';
import Select from 'react-select';
import './styles.scss';

type Props = {

  genre?: Genre;
  handleChangeGenre: (genre: Genre) => void;
}

const Filter = (
  {
    handleChangeGenre,
    genre
  }: Props

) => {
  const [isLoadingGenres, setIsLoadingGenres] = useState(false);
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    setIsLoadingGenres(true);
    makePrivateRequest({ url: '/genres' })
      .then(
        response => setGenres(response.data)
      )

      .finally(() => setIsLoadingGenres(false));
  }, []);

  return (

    <div className="card-base filter">
      <Select
        name="genre"
        value={genre}
        key={`select-${genre?.id}`}
        options={genres}
        isLoading={isLoadingGenres}
        getOptionLabel={(option: Genre) => option.name}
        getOptionValue={(option: Genre) => String(option.id)}
        className="filter-select-container"
        classNamePrefix="movie-genre-select"
        placeholder="Generos..."
        onChange={value => handleChangeGenre(value as Genre)}
        isClearable
      />
    </div>

  );
}

export default Filter;