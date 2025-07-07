'use client';
import { Button } from '@/components/ui';
import { Heart, Menu, ShoppingCart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { MENUS } from '@/static';
import Link from 'next/link';
import { Logo } from '@/components/core';
import Category from './Category';
import SearchBar from './SearchBar';

const TheHeader = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const categoriesRef = useRef<HTMLDivElement>(null);

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                categoriesRef.current &&
                !categoriesRef.current.contains(event.target as Node)
            ) {
                setShowCategories(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            {/* Overlay */}
            {(showCategories || showOverlay) && (
                <div
                    className='fixed inset-0 bg-black/50 bg-opacity-50 z-40'
                    onClick={() => {
                        setShowCategories(false);
                    }}
                />
            )}

            <header className='bg-white border-b border-primary-deep sticky top-0 pt-2 z-50'>
                {/* Main Header */}
                <div className='main-container'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-2 xl:col-span-1 flex flex-col justify-center md:justify-normal'>
                            <Link
                                href='/'
                                className='min-w-14 min-h-14 md:w-24 md:h-24'
                            >
                                <Logo className='w-14 h-14 md:w-24 md:h-24' />
                            </Link>
                        </div>
                        <div className='col-span-10 xl:col-span-11'>
                            <div className='flex items-center justify-end md:justify-between h-16'>
                                {/* Left Section - Logo and Categories */}
                                <div className='md:flex items-center space-x-4 hidden'>
                                    {/* Categories Button */}
                                    <div
                                        className='relative'
                                        ref={categoriesRef}
                                    >
                                        <Button
                                            variant='ghost'
                                            className='flex items-center space-x-2 text-gray-700 hover:bg-gray-100'
                                            onClick={() =>
                                                setShowCategories(
                                                    !showCategories
                                                )
                                            }
                                        >
                                            <Menu className='h-5 w-5' />
                                            <span className='hidden md:block'>
                                                Categories
                                            </span>
                                        </Button>

                                        {/* Categories Dropdown */}
                                        <Category
                                            showCategories={showCategories}
                                            setShowCategories={
                                                setShowCategories
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Center Section - Search Bar */}

                                <SearchBar
                                    onCloseOverlay={() => setShowOverlay(false)}
                                    className='hidden md:block'
                                />

                                {/* Right Section - Navigation Icons */}
                                <div className='flex items-center space-x-6'>
                                    <button
                                        className='text-gray-700 hover:text-gray-900'
                                        aria-label='sign-in'
                                    >
                                        Sign in
                                    </button>
                                    <button
                                        className='text-gray-700 hover:text-gray-900'
                                        aria-label='wishlist'
                                    >
                                        <Heart className='h-6 w-6' />
                                    </button>
                                    <button
                                        className='text-gray-700 hover:text-gray-900'
                                        aria-label='cart'
                                    >
                                        <ShoppingCart className='h-6 w-6' />
                                    </button>
                                </div>
                            </div>

                            {/* Secondary Navigation */}
                            <SecondNav />
                            {/* mobile */}
                            <div className='flex justify-center gap-4 pb-2'>
                                <div className='md:hidden flex items-center space-x-4 '>
                                    {/* Categories Button */}
                                    <div
                                        className='relative'
                                        ref={categoriesRef}
                                    >
                                        <Button
                                            variant='ghost'
                                            className='flex items-center space-x-2 text-gray-700 hover:bg-gray-100'
                                            onClick={() =>
                                                setShowCategories(
                                                    !showCategories
                                                )
                                            }
                                        >
                                            <Menu className='!h-6 !w-6 stroke-gray-900' />
                                            <span className='hidden md:block'>
                                                Categories
                                            </span>
                                        </Button>

                                        {/* Categories Dropdown */}
                                        <Category
                                            showCategories={showCategories}
                                            setShowCategories={
                                                setShowCategories
                                            }
                                        />
                                    </div>
                                </div>
                                <SearchBar
                                    onCloseOverlay={() => setShowOverlay(false)}
                                    className='block md:hidden w-full !mx-0'
                                />
                            </div>
                            {/* Secondary Navigation */}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default TheHeader;

const SecondNav = () => {
    return (
        <div className='bg-white border-t border-gray-100 hidden md:block'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center space-x-8 h-12 justify-center'>
                    {MENUS.map(({ id, route, label }) => (
                        <Link
                            className='text-sm text-gray-700 hover:text-gray-900 font-medium p-2 rounded'
                            key={id}
                            href={route}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
