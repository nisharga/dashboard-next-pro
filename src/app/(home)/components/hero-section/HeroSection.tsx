'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { HERO_SLIDES } from '@/static';

const HeroSection = () => {
    return (
        <div className='my-4 main-container'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 lg:col-span-8'>
                    <section className='w-full h-[350px]'>
                        <Swiper
                            modules={[
                                Autoplay,
                                EffectFade,
                                Navigation,
                                Pagination
                            ]}
                            effect='fade'
                            fadeEffect={{ crossFade: true }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
                            }}
                            speed={1000}
                            loop={true}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev'
                            }}
                            pagination={{
                                clickable: true,
                                bulletClass:
                                    'swiper-pagination-bullet custom-bullet',
                                bulletActiveClass:
                                    'swiper-pagination-bullet-active custom-bullet-active',
                                renderBullet: (index, className) =>
                                    `<span class="${className}"></span>`
                            }}
                            className='h-full w-full'
                        >
                            {HERO_SLIDES.map((slide) => (
                                <SwiperSlide key={slide.id}>
                                    <div className='relative !rounded-2xl w-full h-[350px]'>
                                        <Image
                                            src={slide.image}
                                            alt={slide.title}
                                            width={1920}
                                            height={943}
                                            className='object-cover h-full w-full !rounded-2xl'
                                            priority
                                        />
                                        {/* Overlay */}
                                        <div className='absolute inset-0 bg-black/20 z-10 !rounded-2xl' />
                                        {/* Overlay */}
                                        <div className='absolute inset-0 flex flex-col items-center justify-center text-white pb-40 text-center !z-50'>
                                            <p className='text-xl max-w-2xl !text-coco text-gray-900'>
                                                {slide.description}
                                            </p>
                                            <h1 className='!text-coco text-2xl md:text-3xl font-bold mb-4 text-gray-900'>
                                                {slide.title}
                                            </h1>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* pagination and slider */}
                        {/* Custom Navigation Buttons */}
                        <div className='swiper-button-prev absolute left-4 top-1/2 z-50 -translate-y-1/2 transform text-white opacity-1 transition-opacity duration-300 group-hover:opacity-100'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-10 w-10'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                            >
                                <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' />
                            </svg>
                        </div>
                        <div className='swiper-button-next absolute right-4 top-1/2 z-10 -translate-y-1/2 transform text-white opacity-1 transition-opacity duration-300 group-hover:opacity-100'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-10 w-10'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                            >
                                <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
                            </svg>
                        </div>

                        {/* Custom Pagination Dots */}
                        <div className='swiper-pagination absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 transform space-x-2'></div>
                    </section>
                </div>
                <Product />
            </div>
        </div>
    );
};

export default HeroSection;

const Product = () => {
    return (
        <div className='col-span-12 lg:col-span-4 h-full'>
            <div className='h-[350px] flex flex-col gap-3'>
                {/* Product 1 */}
                <div className='bg-white rounded-xl shadow-lg p-4 flex-1 flex items-center gap-4 hover:shadow-xl transition-shadow duration-300'>
                    <div className='flex-shrink-0'>
                        <Image
                            src='/images/book/pic1.webp'
                            alt='Book One'
                            className='w-20 h-28 sm:w-24 sm:h-32 object-cover rounded-lg shadow-md'
                            width={990}
                            height={1280}
                        />
                    </div>
                    <div className='flex-1 min-w-0'>
                        <h3 className='text-base sm:text-lg font-bold text-gray-800 mb-2 line-clamp-2'>
                            The Magical Forest Adventure
                        </h3>
                        <p className='text-sm text-gray-600 mb-3 line-clamp-2'>
                            A wonderful journey through enchanted lands filled
                            with mystery and magic.
                        </p>
                        <button className='w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-4 h-4'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13a1 1 0 001-1V7H6.4'
                                />
                            </svg>
                            Buy Now
                        </button>
                    </div>
                </div>

                {/* Product 2 */}
                <div className='bg-white rounded-xl shadow-lg p-4 flex-1 flex items-center gap-4 hover:shadow-xl transition-shadow duration-300'>
                    <div className='flex-shrink-0'>
                        <Image
                            src='/images/book/pic2.webp'
                            alt='Book Two'
                            className='w-20 h-28 sm:w-24 sm:h-32 object-cover rounded-lg shadow-md'
                            width={990}
                            height={1280}
                        />
                    </div>
                    <div className='flex-1 min-w-0'>
                        <h3 className='text-base sm:text-lg font-bold text-gray-800 mb-2 line-clamp-2'>
                            Adventures of Tiny Tim
                        </h3>
                        <p className='text-sm text-gray-600 mb-3 line-clamp-2'>
                            Join Tiny Tim on his incredible adventures through
                            magical worlds and exciting challenges.
                        </p>
                        <button className='w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-4 h-4'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13a1 1 0 001-1V7H6.4'
                                />
                            </svg>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
