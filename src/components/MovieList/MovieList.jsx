import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies.all);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // const history = useHistory();

    // const handleClick = () => {
    //     history.push('/');
    //   };

    return (
        <main>
            
          <h1>Movie List</h1>

          <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.movies_id} >
                            <h3>{movie.movies_title}</h3>
                            <img src={movie.movies_poster} alt={movie.movies_title}/>
                        </div>
                    );
                })}
            </section>
            
        </main>

    );
}

export default MovieList;