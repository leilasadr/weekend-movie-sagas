import React from 'react';

function MovieItem ({movie}) {

    return (
    
    <div key={movie.movies_id}>
      <h3>{movie.movies_title}</h3>
      <img src={movie.movies_poster} alt={movie.movies_title} />
      <p>{movie.movies_description}</p>
      <p>Genres: {movie.movies_genres.join(', ')}</p>
    </div>
    );
}

export default MovieItem;