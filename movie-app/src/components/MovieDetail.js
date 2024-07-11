// src/components/MovieDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../data';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieDetail;
