import CarouselBannerWrapper from '@/components/CarouselBannerWrapper';
import MoviesCarousel from '@/components/MoviesCarousel';
import {Button} from '@/components/ui/button';
import {getPopularMovies, getTopRatedMovies, getUpcomingMovies} from '@/lib/getMovies';
import Image from 'next/image';

export default async function Home() {
    const upcomingMovies = await getUpcomingMovies();
    console.log(upcomingMovies);
    const topRatedMovies = await getTopRatedMovies();
    const popularMovies = await getPopularMovies();

    return (
        <main className="">
            <CarouselBannerWrapper />

            <div className="flex flex-col space-y-2 xl:-mt-48 mb-5">
                <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
                <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
                <MoviesCarousel movies={popularMovies} title="Popular" />
            </div>
        </main>
    );
}
