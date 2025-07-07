import Image from 'next/image';
import React from 'react';

const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            className={`w-[65px] h-auto lg:w-full lg:h-full ${className}`}
            src='/logo.png' //svg recommand
            alt='Next.js logo'
            width={100}
            height={100}
            priority
            quality={95}
        />
    );
};

export default Logo;
