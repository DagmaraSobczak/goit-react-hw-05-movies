import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Movies.module.css';
import Api from 'components/Api';
import Loader from 'components/Loader/Loader';

const Movies = ({ getMovieByQuery }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      if (searchQuery.trim() === '') {
        return;
      }

      setLoading(true);

      try {
        const movies = await Api.getMovieByQuery(searchQuery);
        setMovies(movies);
        setLoading(false);
      } catch (error) {
        console.error('Błąd podczas pobierania filmów:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  const handleSubmit = event => {
    event.preventDefault();
    getMovieByQuery(searchQuery);
  };

  const handleInputChange = event => {
    const searchQuery = event.target.value;
    setSearchQuery(searchQuery);
    setMovies([]);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonaLabel}>Szukaj</span>
        </button>
        <input
          name="query"
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Szukaj filmów"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </form>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={`${id}`}
                state={{ from: location }}
                className={css.moviesTitle}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Loader setLoading={loading} />
    </>
  );
};

Movies.propTypes = {
  getMovieByQuery: PropTypes.func.isRequired,
};

export default Movies;
