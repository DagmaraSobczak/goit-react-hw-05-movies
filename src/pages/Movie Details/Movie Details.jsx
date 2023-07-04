import React, { useState, useEffect, Suspense, useRef } from 'react';
import css from './Movie Details.module.css';
import Api from 'components/Api';
import Loader from 'components/Loader/Loader';

import {
  NavLink,
  Link,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);

      try {
        const movieDetailsData = await Api.getMovieDetails(id);
        setMovieDetails([movieDetailsData]);
        setLoading(false);
      } catch (error) {
        console.error('Błąd podczas pobierania filmów:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [setMovieDetails, setLoading, id]);

  return (
    <>
      {!setLoading && (
        <div className={css.backBtnBox}>
          <button type="button" className={css.backBtn}>
            <Link to={backLink.current} className={css.backLink}>
              Go back
            </Link>
          </button>
        </div>
      )}
      {movieDetails.map(
        ({
          id,
          poster_path,
          tagline,
          title,
          release_date,
          vote_average,
          overview,
          genres,
        }) => (
          <div className={css.movie} key={id}>
            {poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt={tagline ? tagline : 'Movie photo'}
                className={css.movieImg}
                loading="lazy"
              />
            ) : (
              <p className={css.noPhoto}>No&nbsp;photo</p>
            )}
            <section className={css.movieSection}>
              <h1 className={css.movieTitle}>
                {`${title} (${
                  release_date ? release_date.slice(0, 4) : 'No date'
                })`}
              </h1>
              <div className={css.movieOverviewBox}>
                <p className={css.movieOverview}>Overview</p>
                <p className={css.movieOverviewText}>
                  {overview ? overview : 'No description'}
                </p>
              </div>
              <p className={css.movieScore}>
                <span className={css.movieScoreText}>User score:</span>{' '}
                {Math.round(vote_average * 10)}%
              </p>
              <p className={css.movieGenres}>Genres</p>
              {genres.length > 0 ? (
                <ul className={css.movieGenresList}>
                  {genres.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
                </ul>
              ) : (
                <p>No genres</p>
              )}
            </section>
          </div>
        )
      )}
      {!setLoading && (
        <div className={css.moreInfoBox}>
          <p className={css.moreInfo}>Additional information</p>
          <ul className={css.moreInfoList}>
            <li className={css.moreInfoItem}>
              <NavLink
                to="cast"
                className={({ isActive }) =>
                  isActive ? (css.moreInfoLink, css.isActive) : css.moreInfoLink
                }
              >
                Cast
              </NavLink>
            </li>
            <li className={css.moreInfoItem}>
              <NavLink
                to="reviews"
                className={({ isActive }) =>
                  isActive ? (css.moreInfoLink, css.isActive) : css.moreInfoLink
                }
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      <Suspense fallback={<Loader setLoading={loading} />}>
        <Outlet />
      </Suspense>
    </>
  );
};
