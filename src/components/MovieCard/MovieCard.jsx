import { Outlet, Link } from 'react-router-dom';

function MovieCard() {
  return (
    <div>
      <header>
        <h1>MovieCard</h1>
        <ul>
          <li>
            <Link to="cast">Read about our mission</Link>
          </li>
          <li>
            <Link to="reviews">Get to know the team</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MovieCard;
