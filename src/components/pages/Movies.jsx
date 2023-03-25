import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { getMovieSearch } from 'components/servises/movieAPI';
import MovieItem from '../MovieItem/MovieItem';
import { Toaster } from 'react-hot-toast';
import ReactPaginate from 'react-paginate';
import Form from 'components/Form/Form';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const refDiv = useRef('');

  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') ?? '';

  const getQuery = query => {
    setSearchParams({ name: query });
  };

  useEffect(() => {
    if (name === '') {
      return;
    }
    const fetchMovies = async () => {
      const movies = await getMovieSearch(name, page);
      if (movies.results.length === 0) {
        refDiv.current.textContent = 'There are no movies found';
        return;
      }
      setMoviesList(movies.results);
      setPageCount(movies.total_pages);
    };
    fetchMovies(name);
  }, [name, page]);

  const handlePageClick = event => {
    const page = event.selected + 1;
    setPage(page);
  };

  return (
    <>
      <Toaster />
      <Form onSubmit={getQuery} />
      {moviesList.length === 0 ? (
        <div className="refDiv" ref={refDiv}></div>
      ) : null}
      <main>
        {moviesList.length !== 0 ? <MovieItem movies={moviesList} /> : null}
      </main>
      {moviesList.length !== 0 ? (
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      ) : null}
    </>
  );
};

export default Movies;
