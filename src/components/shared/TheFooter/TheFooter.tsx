import Link from 'next/link';
import React from 'react';
import { FOOTER } from '@/static';
import { Logo } from '@/components/core';

const TheFooter = () => {
    return (
        <div className='main-container my-6'>
            <div className='h-full bg-purple-600 rounded-xl md:mx-auto text-white p-6 relative'>
                <div
                    className='absolute top-0 right-28 bg-white/65 h-40 w-2 rounded-b-full 
                hidden md:block'
                ></div>
                <div
                    className='absolute top-28 right-0 bg-white/65 h-2 w-40 rounded-l-full 
                hidden md:block'
                ></div>
                <div className=''>
                    <div className='grid grid-cols-12 gap-4 w-full'>
                        <div className='col-span-12 lg:col-span-4 space-y-4 mb-6 md:mb-0 mt-8'>
                            <Link
                                href='/'
                                className='z-50 flex items-center justify-center lg:justify-start'
                            >
                                <Logo className='!w-24 !h-24' />
                            </Link>
                            <p className='text-sm font-light text-white text-center lg:text-left lg:pr-4'>
                                {FOOTER.title}
                            </p>
                        </div>
                        <div
                            className='col-span-12 lg:col-span-5 flex flex-row justify-between 
                        items-center w-full md:mb-0'
                        >
                            <div className='space-y-5'>
                                <h2 className='border-b-[1.5px] border-white text-xl text-white'>
                                    Company
                                </h2>
                                <div
                                    className='flex flex-col gap-2'
                                    data-testid='company-links'
                                >
                                    {FOOTER?.company_pageLink?.map(
                                        ({ id, label, route }) => {
                                            return (
                                                <Link
                                                    href={route}
                                                    key={id}
                                                    className='font-normal transition-colors 
                                                duration-300 text-white hover:text-gray-300'
                                                >
                                                    {label}
                                                </Link>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                            <div className='space-y-5'>
                                <div
                                    className='border-b-[1.5px] border-white text-xl font-normal 
                                text-right md:text-left'
                                >
                                    Useful Links
                                </div>
                                <div
                                    className='flex flex-col gap-2'
                                    data-testid='useful-links'
                                >
                                    {FOOTER?.usefulLink?.map(
                                        ({ id, label, route }) => {
                                            return (
                                                <Link
                                                    href={route}
                                                    key={id}
                                                    className={`transition-colors duration-300 
                                                text-white font-normal hover:text-gray-300 
                                                text-right md:text-left`}
                                                >
                                                    {label}
                                                </Link>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='flex flex-col justify-end items-end h-full mt-8 pb-3 
                lg:pb-0 lg:mt-10'
                >
                    <p
                        className='text-center border-t-[1.5px] border-white text-white 
                    text-xs mx-auto pt-2 flex-grow'
                    >
                        {FOOTER?.copyright}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TheFooter;
