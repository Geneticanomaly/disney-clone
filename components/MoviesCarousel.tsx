import {Movie} from '@/typings';
import MovieCard from './MovieCard';
import {cn} from '@/lib/utils';

type MovieCarouselProps = {
    title?: string;
    movies: Movie[];
    isVertical?: boolean;
};

function MoviesCarousel({title, movies, isVertical}: MovieCarouselProps) {
    return (
        <div className="z-50">
            <h2>{title}</h2>
            <div
                className={cn(
                    'flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide',
                    isVertical && 'flex-col space-x-0 space-y-12'
                )}
            >
                {isVertical
                    ? movies.map((movie) => (
                          <div
                              key={movie.id}
                              className={cn(
                                  isVertical &&
                                      'flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5'
                              )}
                          >
                              <MovieCard movie={movie} />
                              <div className="">
                                  <p className="font-bold ">
                                      {movie.title} ({movie.release_date})
                                  </p>
                                  <hr className="mb-3" />
                                  <p className="">{movie.overview}</p>
                              </div>
                          </div>
                      ))
                    : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
}

export default MoviesCarousel;