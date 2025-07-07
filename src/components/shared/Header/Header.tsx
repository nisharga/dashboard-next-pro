/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Heart, Menu, Search, ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SearchBar } from './SearchBar';
import { useEffect, useState } from 'react';
import { MENUS } from '@/static';
import Link from 'next/link';

const navigationItems = [
    { name: 'Digital', href: '#', active: false },
    { name: 'About us', href: '#', active: true },
    { name: 'Blogs', href: '#', active: false },
    { name: 'Gallery', href: '#', active: false },
    { name: 'FAQs', href: '#', active: false },
    { name: 'Freebies', href: '#', active: false }
];

export function Header() {
    const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
    useEffect(() => {
        const bodyEl = document.querySelector('body');

        if (isShowMobileMenu) {
            bodyEl && bodyEl.classList.add('modal-open');
        } else {
            bodyEl && bodyEl.classList.remove('modal-open');
        }
    }, [isShowMobileMenu]);
    const handleSearch = (query: string) => {
        console.log('Searching for:', query);
        // Implement search functionality here
    };

    return (
        <>
            <header className='w-full hidden lg:block'>
                <Banner />
                {/* Main Header */}
                <div className='bg-gradient-to-b from-pink-50 to-white'>
                    <div className='main-container mx-auto px-4 py-4'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-4'>
                                <SearchBar
                                    placeholder='Search the store'
                                    onSearch={handleSearch}
                                />
                            </div>
                            <div className='col-span-4'>
                                <div className='flex-1 flex justify-center'>
                                    <TextLogo />
                                </div>
                            </div>
                            <div className='col-span-4 flex items-center justify-end'>
                                <AuthItems
                                    setIsShowMobileMenu={setIsShowMobileMenu}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Navigation */}
            <nav className='bg-white/50 backdrop-blur-sm border-t border-b border-pink-100 py-2 sticky top-0 z-50 hidden lg:block'>
                <div className='main-container mx-auto'>
                    <ul className='flex items-center justify-center gap-4 overflow-x-auto font-nunito'>
                        {navigationItems.map((item) => (
                            <li key={item.name} className='whitespace-nowrap'>
                                <a
                                    href={item.href}
                                    className={`text-sm font-nunito px-4`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile menu */}
            {!isShowMobileMenu ? (
                <div className='lg:hidden flex justify-between items-center bg-primary-200/40 backdrop-blur-sm mt-3 px-4 py-4 sticky top-0 z-50 border-b border-pink-100'>
                    <TextLogo />
                    <div className='flex items-center justify-end gap-6'>
                        <AuthItems setIsShowMobileMenu={setIsShowMobileMenu} />
                        <button
                            onClick={() => setIsShowMobileMenu(true)}
                            className='no-underline  rounded-md'
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
            ) : (
                <div className='block lg:hidden fixed top-0 left-0 z-50 h-full w-full !bg-[#ffa6c9]'>
                    <div className='px-6 mt-8'>
                        <div className='py-2 flex justify-between items-center mb-4'>
                            <TextLogo className='text-white text-4xl' />
                            <div className='flex items-center justify-end gap-6'>
                                <button
                                    onClick={() => setIsShowMobileMenu(false)}
                                    className='no-underline  rounded-md'
                                >
                                    <X className='text-white' />
                                </button>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <SearchBar
                                placeholder='Search the store'
                                onSearch={handleSearch}
                                className='!w-full'
                            />
                        </div>

                        <div className='flex flex-col justify-end gap-8'>
                            {MENUS.map(({ id, route, label }) => (
                                <Link
                                    className='whitespace-nowrap text-white'
                                    key={id}
                                    href={route}
                                    onClick={() =>
                                        setTimeout(() => {
                                            setIsShowMobileMenu(false);
                                        }, 200)
                                    }
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

const AuthItems = ({ setIsShowMobileMenu }: { setIsShowMobileMenu: any }) => {
    return (
        <div className='flex gap-2 lg:gap-4'>
            <div className='flex-1 lg:flex justify-end hidden '>
                <Button
                    variant='ghost'
                    size='sm'
                    className='relative p-2 hover:bg-pink-100 rounded-full transition-colors duration-200'
                    aria-label={`Wishlist`}
                >
                    Sign In
                </Button>
            </div>
            <div className='flex-1 lg:hidden flex justify-end'>
                <Button
                    variant='ghost'
                    size='sm'
                    className='relative p-2 hover:bg-pink-100 rounded-full transition-colors duration-200'
                    aria-label={`Wishlist`}
                    onClick={() => setIsShowMobileMenu(true)}
                >
                    <Search className='h-6 w-6 text-gray-600' />
                </Button>
            </div>
            <div className='flex-1 flex justify-end'>
                <Button
                    variant='ghost'
                    size='sm'
                    className='relative p-2 hover:bg-pink-100 rounded-full transition-colors duration-200'
                    aria-label={`Wishlist`}
                >
                    <Heart className='h-6 w-6 text-gray-600' />

                    <span className='absolute -top-1 -right-1 bg-pink-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium'>
                        {0}
                    </span>
                </Button>
            </div>
            <div className='flex-1 flex justify-end'>
                <Button
                    variant='ghost'
                    size='sm'
                    className='relative p-2 hover:bg-pink-100 rounded-full transition-colors duration-200'
                    aria-label={`ShoppingCart`}
                >
                    <ShoppingCart className='h-6 w-6 text-gray-600' />

                    <span className='absolute -top-1 -right-1 bg-pink-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium'>
                        0
                    </span>
                </Button>
            </div>
        </div>
    );
};

const Banner = () => {
    return (
        <div className="bg-[url('/top_bar.jpg')] bg-cover bg-center py-2">
            <div className='container mx-auto px-4'>
                <p className='text-center text-white font-medium text-base tracking-wide font-coco'>
                    Welcome to giggles and gracebooks
                </p>
            </div>
        </div>
    );
};

const TextLogo = ({ className }: { className?: string }) => {
    return (
        <h1
            className={`text-xl lg:text-3xl md:text-4xl font-bold text-gray-900 font-coco ${className}`}
        >
            Giggles And Gracebooks
        </h1>
    );
};
