import Link from 'next/link';
import Image from 'next/image';
import {ThemeToggler} from './ThemeTogglers';
import SearchInput from './SearchInput';
import GenreDropDown from './GenreDropDown';

function Header() {
    return (
        <header
            className="fixed flex items-center w-full z-50 top-0 justify-between p-5 
            bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900"
        >
            <Link href="/" className="mr-10">
                <Image
                    src="https://links.papareact.com/a943ae"
                    alt="Disney logo"
                    width={120}
                    height={100}
                    className="cursor-pointer dark:invert"
                />
            </Link>
            <div className="flex space-x-2 items-center">
                <GenreDropDown />
                <SearchInput />
                <ThemeToggler />
            </div>
        </header>
    );
}

export default Header;
