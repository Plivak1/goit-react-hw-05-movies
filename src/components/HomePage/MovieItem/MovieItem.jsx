import { Item, StyledLink } from './MovieItem.styled';
import PropTypes from 'prop-types';

export const MovieItem = ({ title, id }) => {
  return (
    <Item>
      <StyledLink to={`/movies/${id}`} state={{ from: '/' }}>
        {title}
      </StyledLink>
    </Item>
  );
};

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
};
