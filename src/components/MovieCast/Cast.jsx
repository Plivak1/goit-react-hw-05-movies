import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

import { toastError } from 'utils/toastError';
import { API } from 'services';
import { Box } from 'components/Box';
import { NotFound } from 'components/MovieReviews/Reviews.styled';
import { ActorsList, ActorItem, ActorImage, ActorName } from './Cast.styled';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    API.fetchMovieActors(movieId)
      .then(response => setActors(response.cast))
      .catch(error => toastError('Что пошло не так, перезагрузите страницу'));
  }, [movieId]);

  useEffect(() => {
    window.scroll(0, 460);
  }, [actors]);

  return (
    <Box display="flex" justifyContent="center" py="30px" as="section">
      {actors.length !== 0 ? (
        <ActorsList>
          {actors.map(({ cast_id, character, original_name, profile_path }) => (
            <ActorItem key={cast_id}>
              <Box width="200px" height="300px">
                {profile_path ? (
                  <ActorImage
                    loading="lazy"
                    src={`https://image.tmdb.org/t/p/original${profile_path}`}
                    alt={`${original_name} image`}
                  />
                ) : (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="#ece7e7"
                    width="100%"
                    height="100%"
                    borderRadius="15%"
                  >
                    <BsFillPersonFill size={150} color="#6b6969" />
                  </Box>
                )}
              </Box>
              <ActorName>{original_name}</ActorName>
              <ActorName>Character: {character}</ActorName>
            </ActorItem>
          ))}
        </ActorsList>
      ) : (
        <Box as="section" display="flex" justifyContent="center">
          <NotFound>We don't have any actors for this movie!</NotFound>
        </Box>
      )}
    </Box>
  );
};
