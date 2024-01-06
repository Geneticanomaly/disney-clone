'use client';
import {Movie} from '@/typings';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import getImagePath from '@/lib/getImagePath';

type CarouselBannerProps = {
    movies: Movie[];
};

// https://www.embla-carousel.com/get-started/react/
Autoplay.globalOptions = {delay: 8000};

function CarouselBanner({movies}: CarouselBannerProps) {
    const [emblaRef] = useEmblaCarousel({loop: true, duration: 100}, [Autoplay()]);
    return (
        <div className="overflow-hidden lg:-mt-40 relative cursor-pointer" ref={emblaRef}>
            <div className="flex">
                {movies.map((movie) => (
                    <div key={movie.id} className="flex-[0_0_100%] min-w-0 relative">
                        <Image
                            src={getImagePath(movie.backdrop_path, true)}
                            alt={movie.title}
                            width={1920}
                            height={1080}
                            key={movie.id}
                        />
                        <div
                            className="hidden lg:inline absolute mt-0 top-0
                        pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent z-20
                        h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent p-10"
                        >
                            <h2 className="font-bold text-5xl max-w-xl z-50">{movie.title}</h2>
                            <p className="max-w-xl line-clamp-3 mt-2">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div
                className="absolute inset-0 bg-gradient-to-b from-gray-200/0
            via-gray-900/25 to-gray-300 dark:to-[#1A1C29]"
            />
        </div>
    );
}

export default CarouselBanner;
