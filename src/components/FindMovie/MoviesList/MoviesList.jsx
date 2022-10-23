import { BsImage } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

import { Box } from 'components/Box';
import {
  Film,
  FilmName,
  FilmList,
  FilmPoster,
  StyledLink,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Box py="20px" pl="20px">
      <FilmList>
        {movies.map(({ id, original_title, poster_path }) => (
          <Film key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              {poster_path ? (
                <FilmPoster
                  loading="lazy"
                  src={`https://www.themoviedb.org/t/p/original${poster_path}`}
                  alt={original_title}
                />
              ) : (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="#a09d9d"
                  width="100%"
                  height="250px"
                  borderRadius="10px"
                >
                  <BsImage size={100} color="#1d1b1b" />
                </Box>
              )}
              <FilmName>{original_title}</FilmName>
            </StyledLink>
          </Film>
        ))}
      </FilmList>
    </Box>
  );
};
