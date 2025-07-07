import React from 'react';
import { HeroSection } from './components';

const page = () => {
    return (
        <div>
            <HeroSection />

            <div className='container mx-auto rounded-2xl py-24 text-white bg-primary-main flex items-center justify-center mt-12 mb-6 flex-col gap-4'>
                <h1 className='font-rubik-sans text-4xl'>Section One</h1>
                <h1 className='font-nunito text-4xl'>Section One</h1>
                <h1 className='font-baloo text-4xl'>Section One</h1>
            </div>
            <div
                className='container mx-auto rounded-2xl py-24 text-white bg-secondary-main flex items-center justify-center mt-12 mb-6 '
                data-aos='slide-up'
            >
                Section Two
            </div>
            <div className='bg-blue-500'>
                <div
                    className='main-container rounded-2xl py-24 text-white bg-amber-800 flex items-center justify-center mt-12 mb-6'
                    data-aos='slide-up hello'
                >
                    <p className='hello'>Section Three</p>
                </div>
            </div>
            <div
                className='container mx-auto rounded-2xl py-24 text-white bg-amber-800 flex items-center justify-center mt-12 mb-6'
                data-aos='slide-up'
            >
                Section Four
            </div>
            <div
                className='container mx-auto rounded-2xl py-24 text-white bg-amber-800 flex items-center justify-center mt-12 mb-6'
                data-aos='slide-up'
            >
                Section Five
            </div>
        </div>
    );
};

export default page;
