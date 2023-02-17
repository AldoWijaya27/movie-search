import { useEffect, useState } from 'react';
import { getMovieList, searchMovie } from '../api';
import { AiFillStar } from 'react-icons/ai';

const MovieContainer = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className='movie-wrapper'>
          <div className='movie-konten' key={i}>
            <div className='movie-title'>{movie.title}</div>
            <img
              className='movie-image'
              alt='foto'
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            />
            <div className='movie-date'>Release date: {movie.release_date}</div>
            <div className='movie-rate'>
              <AiFillStar className='star' />
              {movie.vote_average}
            </div>
          </div>

          <div className='movie-overview'>
            <div className='overview'>{movie.overview}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='body-wrapper'>
      <input
        placeholder='Search movie ....'
        className='movie-input'
        onChange={({ target }) => search(target.value)}
      />
      <div className='movie-container'>
        <PopularMovieList />;
      </div>
    </div>
  );
};

export default MovieContainer;
