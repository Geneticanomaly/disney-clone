import {notFound} from 'next/navigation';
import React from 'react';

type SearchPageProps = {
    params: {
        term: string;
    };
};

function SearchPage({params: {term}}: SearchPageProps) {
    if (!term) notFound();

    const termToUse = decodeURI(term);

    // TODO:
    // API call to get the movies - TMDB database
    // API call to get the popular movies - TMDB database

    return <div>Welcome to the search page {termToUse}</div>;
}

export default SearchPage;
