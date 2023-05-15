import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

function MovieItem () {

    // const dispatch = useDispatch();
    // const {id} = useParams();
    // const movie = useSelector(store => store.selectedMovie);
    // const history = useHistory();

    // useEffect(() => {
    //     dispatch({ 
    //         type: 'FETCH_MOVIE', 
    //         payload: id });
    // }, [dispatch, id]);

    // const handleBackClick = () => {
    //     history.push('/details');
    //   };

    return (
    
    <div className="movie-item">
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
      <p>Genres: {movie.genres.join(', ')}</p>
      <button onClick={handleBackClick}>Back to List</button>
    </div>
    );
}

export default MovieItem;