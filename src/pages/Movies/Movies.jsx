import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Movies.module.css';
import Api from 'components/Api';
import Loader from 'components/Loader/Loader';

export const Movies = ({ getMovieByQuery }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

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
        {loading ? <div>Ładowanie...</div> : null}
        {movies.length > 0 ? (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        ) : null}
      </form>
      <Loader setLoading={loading} />
    </>
  );
};

Movies.propTypes = {
  getMovieByQuery: PropTypes.func.isRequired,
};
