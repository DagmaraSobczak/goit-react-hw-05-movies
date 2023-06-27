import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';
import Api from 'components/Api';
import Loader from 'components/Loader/Loader';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      try {
        const moviesData = await Api.getTrendingMovies();
        setMovies(moviesData);
        setLoading(false);
      } catch (error) {
        console.error('Błąd podczas pobierania filmów:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [setMovies, setLoading]);

  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      <ul className={css.moviesList}>
        {movies.map(({ id, title }) => (
          <li className={css.moviesItem} key={id}>
            <Link to={`movies/${id}`} className={css.moviesTitle}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <Loader setLoading={loading} />
    </>
  );
};
