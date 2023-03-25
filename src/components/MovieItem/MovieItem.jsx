import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieItem = ({ movies }) => {
  const location = useLocation();

  return (
    <div className="column-container">
      <ul>
        {movies.map(movie => (
          <NavLink
            to={`/movies/${movie.id}`}
            key={movie.id}
            state={{ from: location }}
          >
            <li className="item-container">{movie.original_title}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

MovieItem.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieItem;
