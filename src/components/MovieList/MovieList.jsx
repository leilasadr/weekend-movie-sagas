import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const history = useHistory();

    const handleClick = () => {
        history.push('/');
      };

    return (
        <main>
            
          <h1>Movie List</h1>

        <div className="movies-container">
         {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
        ))}
       
        </div>
            
        </main>

    );
}

export default MovieList;