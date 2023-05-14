import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieItem ({movie}) {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
  dispatch({ type: 'FETCH_MOVIES' });
  }, []);

    return (
    
        <div key={movie.movies_id}>
            <h3>{movie.movies_title}</h3>
            <img src={movie.movies_poster} alt={movie.movies_title}/>
            <p>{movie.movies_description}</p>
            <p>Genres: {movie.movies_genres.join(', ')}</p>
        </div>
    );
}

export default MovieItem;