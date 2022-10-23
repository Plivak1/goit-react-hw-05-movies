import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import { API } from 'services';
import { Box } from 'components/Box';
import {
  Review,
  ReviewsList,
  Reviewer,
  Comment,
  NotFound,
} from './Reviews.styled';
import { toastError } from 'utils/toastError';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [id] = useState(movieId);

  useEffect(() => {
    API.fetchMovieReviews(id)
      .then(response => {
        setReviews([...response.results]);
      })
      .catch(error => {
        toastError('Что пошло не так, перезагрузите страницу');
      });
  }, [id]);

  useEffect(() => {
    window.scroll(0, 400);
  }, [reviews]);

  return (
    <Box display="flex" justifyContent="center" py="30px" as="section">
      {reviews.length !== 0 ? (
        <ReviewsList>
          {reviews.map(({ id, content, author }) => (
            <Box
              key={id}
              borderRadius="15px"
              overflow="hidden"
              borderLeft="7px solid"
              borderLeftColor="#d22f2f"
              boxShadow="0 10px 10px -6px #777"
              as="li"
            >
              <SimpleBar style={{ maxHeight: '200px' }} autoHide={false}>
                <Review>
                  <Reviewer>Author: {author}</Reviewer>
                  <Comment>'{content}'</Comment>
                </Review>
              </SimpleBar>
            </Box>
          ))}
        </ReviewsList>
      ) : (
        <NotFound>We don't have any reviews for this movie!</NotFound>
      )}
    </Box>
  );
};
