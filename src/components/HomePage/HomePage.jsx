import { useState, useEffect } from 'react';
import { API } from 'services';
import { toastError } from 'utils/toastError';
import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import { Title } from './HomePage.styled';
import { MoviesList } from './MoviesList';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.fetchTrendingMovies()
      .then(response => setMovies(response.results))
      .catch(error => {
        toastError('Что пошло не так, перезагрузите страницу');
      });
  }, []);

  return (
    <Box as="main">
      <Box as="section">
        <Title>Trending today</Title>
        {movies.length !== 0 && <MoviesList movies={movies} />}
      </Box>
    </Box>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
