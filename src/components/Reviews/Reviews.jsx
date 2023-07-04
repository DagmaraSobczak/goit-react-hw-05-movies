import React, { useState, useEffect } from 'react';
import css from './Reviews.module.css';
import Api from 'components/Api';
import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);

      try {
        const reviewsData = await Api.getMovieReviews(id);
        setReviews(reviewsData);
        setLoading(false);
      } catch (error) {
        console.error('Błąd podczas pobierania filmów:', error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, [setReviews, setLoading, id]);

  return (
    <>
      {reviews.length > 0 && (
        <ul className={css.reviewsList}>
          {reviews.map(({ id, author_details: { name, rating }, content }) => (
            <li className={css.reviewsItem} key={id}>
              <p className={css.reviewsName}>
                <span className={css.reviewsNameText}>Author:</span>{' '}
                {name ? name : 'Unknown'}
              </p>
              <p className={css.reviewsRating}>
                <span className={css.reviewsRatingText}>Rating:</span>{' '}
                {rating ? `${rating}/10` : 'Unknown'}
              </p>
              <p>
                <span className={css.reviewsDescription}>Description:</span>{' '}
                {content ? content : 'No description'}
              </p>
            </li>
          ))}
        </ul>
      )}
      {!reviews.length && !setLoading && (
        <p className={css.noReviews}>There is no reviews for this movie</p>
      )}
      <Loader setLoading={loading} />
    </>
  );
};
export default Reviews;
