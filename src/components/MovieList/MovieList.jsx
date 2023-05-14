import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>Movie List</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.movies_id} >
                            <h3>{movie.movies_title}</h3>
                            <img src={movie.movies_poster} alt={movie.movies_title}/>
                            <p>{movie.movies_description}</p>
                            <p>Genres: {movie.movies_genres.join(',')}</p>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;