import { IoMdSearch } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';

import { toastError } from 'utils/toastError';
import { API } from 'services';
import { Box } from 'components/Box';
import { MoviesList } from './MoviesList';
import { Form, Input, SearchBtn } from './FindMovie.styled';

export const FindMovie = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('query') ?? '';

  useEffect(() => {
    return setQuery(movie);
  }, [movie]);

  useEffect(() => {
    if (!movie) {
      return;
    }
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const response = await API.fetchSearchMovies(movie);
        const movies = response.results;
        if (movies.length === 0) {
          setMovies([]);
          return toastError('Нет фильмов с таким названием');
        }
        setMovies([...movies]);
      } catch (error) {
        toastError(
          'Что пошло не так, перезагрузите страницу и попробуйте еще раз'
        );
      } finally {
        setIsLoading(false);
      }
    }, 500);
  }, [movie]);

  const handleSubmit = e => {
    e.preventDefault();
    const {
      elements: {
        movie: { value },
      },
    } = e.currentTarget;
    if (value.trim() === '') {
      return toastError('Введите что нибудь');
    }
    if (value.trim().toLowerCase() === movie.toLowerCase()) {
      return toastError('Такой же запрос');
    }
    setSearchParams(value !== '' ? { query: value.trim() } : {});
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <Box as="main">
      <Box py="20px" pl="20px">
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Input
            onChange={handleChange}
            placeholder="Film name"
            type="text"
            name="movie"
            value={query}
          />
          <SearchBtn
            type="submit"
            aria-label="search button"
            disabled={isLoading}
          >
            <IoMdSearch size={22} />
          </SearchBtn>
        </Form>
      </Box>
      <Box>
        {isLoading ? (
          <Box pt="100px" pl="400px">
            <RotatingLines
              strokeColor="#50d22f"
              strokeWidth="4"
              animationDuration="0.75"
              width="70"
              visible={true}
            />
          </Box>
        ) : (
          <>{movies.length !== 0 && <MoviesList movies={movies} />}</>
        )}
      </Box>
    </Box>
  );
};
Input.propTypes = {
  value: PropTypes.string.isRequired,
};

SearchBtn.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
