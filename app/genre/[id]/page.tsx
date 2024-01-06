import MoviesCarousel from '@/components/MoviesCarousel';
import {getDiscoverMovies} from '@/lib/getMovies';
import {notFound} from 'next/navigation';
import React from 'react';

type GenrePageProps = {
    params: {
        id: number;
    };
    searchParams: {
        genre: string;
    };
};

async function GenrePage({params: {id}, searchParams: {genre}}: GenrePageProps) {
    if (!id) notFound();
    if (!genre) notFound();

    const movies = await getDiscoverMovies(id.toString());

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
                <h1 className="text-6xl font-bold px-10">Results for {genre}</h1>
                <MoviesCarousel title="Movies" movies={movies} isVertical />
            </div>
        </div>
    );
}

export default GenrePage;
