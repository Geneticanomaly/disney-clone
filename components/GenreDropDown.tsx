import {Genres} from '@/typings';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import {ChevronDown} from 'lucide-react';

async function GenreDropDown() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?/language=en';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
        next: {
            revalidate: 60 * 60 * 24, // 24 hour caching
        },
    };

    const response = await fetch(url, options);
    const data = (await response.json()) as Genres;

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className="text-white flex justify-center items-center p-1 pl-2">
                    Genre <ChevronDown className="ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {data.genres.map((genre, index) => (
                        <Link key={index} href={`/genre/${genre.id}?genre=${genre.name}`}>
                            <DropdownMenuItem key={genre.id}>{genre.name}</DropdownMenuItem>
                        </Link>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default GenreDropDown;
