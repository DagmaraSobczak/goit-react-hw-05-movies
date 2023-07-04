import React, { useState, useEffect } from 'react';
import css from './Cast.module.css';
import Api from 'components/Api';
import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);

      try {
        const castData = await Api.getMovieCredits(id);
        setCast(castData.cast);
        setLoading(false);
      } catch (error) {
        console.error('Błąd podczas pobierania filmów:', error);
        setLoading(false);
      }
    };

    fetchCast();
  }, [setCast, setLoading, id]);

  return (
    <>
      {cast.length > 0 && (
        <ul className={css.castList}>
          {cast.map(({ id, profile_path, name, character }) => (
            <li className={css.castItem} key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${profile_path}`}
                  alt={`${name ? name : 'Actor'}`}
                  className={css.castImg}
                  loading="lazy"
                />
              ) : (
                <p className={css.noPhoto}>No photo</p>
              )}
              <p className={css.castName}>{name ? name : 'Unknown'}</p>
              <p className={css.castCharacter}>
                Character: {character ? character : 'Unknown'}
              </p>
            </li>
          ))}
        </ul>
      )}
      {!cast.length && !setLoading && (
        <p className={css.noCast}>There is no cast for this movie</p>
      )}
      <Loader setLoading={loading} />
    </>
  );
};
