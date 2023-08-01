import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

function MovieItem () {

  const params = useParams();
  const movieId = params.id;


    // const {movie} = props;
    const dispatch = useDispatch();
    // const {id} = useParams();
    const movie = useSelector(store => store.selectedMovie);
    const history = useHistory();

    useEffect(() => {
        dispatch({ 
            type: 'FETCH_MOVIE', 
            payload: movieId });
    }, []);

    const handleBackClick = () => {
        history.push(`/details/${movie.id}`);
      };

    return (
    
    <div className="movie-item">
      <h2>{movie.movie_title}</h2>
      <img src={movie.movie_poster} alt={movie.movie_title} />
      <p>{movie.description}</p>
      <p>Genres: {movie.genres.join(', ')}</p>
      <button onClick={handleBackClick}>Back to List</button>
    </div>
    );
}

export default MovieItem;