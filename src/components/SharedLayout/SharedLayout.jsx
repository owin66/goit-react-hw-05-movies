import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

function SharedLayout() {
  return (
    <div>
      <Suspense
        fallback={
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
          />
        }
      >
        <header>
          <nav>
            <Link to="/"> Home</Link>
            <Link to="/movies"> Movies</Link>
          </nav>
        </header>

        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
