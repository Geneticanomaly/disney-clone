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

function GenrePage({params: {id}, searchParams: {genre}}: GenrePageProps) {
    if (!id) notFound();
    if (!genre) notFound();
    return (
        <div>
            Welcome to genre page with the ID: {id} and Genre: {genre}
        </div>
    );
}

export default GenrePage;
