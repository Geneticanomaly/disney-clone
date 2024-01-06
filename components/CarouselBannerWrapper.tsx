import {getDiscoverMovies} from '@/lib/getMovies';
import React from 'react';
import CarouselBanner from './CarouselBanner';

type CarouselBannerWrapperProps = {
    id?: string;
    keywords?: string;
};

async function CarouselBannerWrapper({id, keywords}: CarouselBannerWrapperProps) {
    const movies = await getDiscoverMovies(id, keywords);
    return <CarouselBanner movies={movies} />;
}

export default CarouselBannerWrapper;
