import {Movie} from '@/typings';

type MovieCarouselProps = {
    title?: string;
    movies: Movie[];
    isVertical?: boolean;
};

function MovieCarousel({title, movies, isVertical}: MovieCarouselProps) {
    return (
        <div className="z-50">
            <h1>{title}</h1>
            {movies?.map((movie) => (
                <li key={movie.id}>{movie.original_title}</li>
            ))}
        </div>
    );
}

export default MovieCarousel;
