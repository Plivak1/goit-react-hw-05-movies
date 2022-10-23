import { Box } from 'components/Box';
import { List } from './MoviesList.styled';
import { MovieItem } from '../MovieItem';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" pb="20px">
      <List>
        {movies.map(({ id, original_title }) => (
          <MovieItem key={id} id={id} title={original_title} />
        ))}
      </List>
    </Box>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
