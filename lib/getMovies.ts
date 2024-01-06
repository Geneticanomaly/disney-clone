import {SearchResults} from '@/typings';

async function getMovies(url: URL, cacheTime?: number) {
    url.searchParams.set('include_adult', 'false');
    url.searchParams.set('include_video', 'false');
    url.searchParams.set('sort_by', 'popularity.desc');
    url.searchParams.set('language', 'en-US');
    url.searchParams.set('page', '1');

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
        next: {
            // If cacheTime is given use it, if not go with 24 hour caching
            revalidate: cacheTime || 60 * 60 * 24,
        },
    };
    const response = await fetch(url.toString(), options);
    const data = (await response.json()) as SearchResults;

    return data;
}

export async function getUpcomingMovies() {
    const url = new URL('https://api.themoviedb.org/3/movie/upcoming');
    const data = await getMovies(url);

    return data.results;
}

export async function getTopRatedMovies() {
    const url = new URL('https://api.themoviedb.org/3/movie/top_rated');
    const data = await getMovies(url);

    return data.results;
}

export async function getPopularMovies() {
    const url = new URL('https://api.themoviedb.org/3/movie/popular');
    const data = await getMovies(url);
    console.log('POPULAR DATA:', data);

    return data.results;
}

export async function getDiscoverMovies(id?: string, keywords?: string) {
    const url = new URL('https://api.themoviedb.org/3/discover/movie');

    // If keywords are given update url params
    keywords && url.searchParams.set('with_keywords', keywords);
    // If id is given update url params
    id && url.searchParams.set('with_genres', id);

    const data = await getMovies(url);

    return data.results;
}

export async function getSearchedMovies(term: string) {
    const url = new URL('https://api.themoviedb.org/3/search/movie');

    url.searchParams.set('query', term);
    const data = await getMovies(url);

    return data.results;
}