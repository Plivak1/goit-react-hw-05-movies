import { Box } from 'components/Box';
import { FilmName, Info, FilmData, Genres } from './MovieDescription.styled';

export const MovieDescription = ({
  movie: { original_title, overview, vote_average, genres, release_date },
}) => {
  const userScore = `${String(vote_average.toFixed(1)).replace('.', '')}%`;
  const releaseDate = new Date(release_date).getFullYear();

  return (
    <Box display="flex" flexDirection="column" pt="20px" pb="40px" pr="20px">
      <FilmName>{`${original_title} (${releaseDate})`}</FilmName>
      <FilmData>User score: {userScore}</FilmData>
      <Info>Overview</Info>
      <FilmData>{overview}</FilmData>
      <Info>Genres</Info>
      <Genres>{genres.map(({ name }) => name).join(' ')}</Genres>
    </Box>
  );
};
