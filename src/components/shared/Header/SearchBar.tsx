'use client';

import type React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface SearchBarProps {
    placeholder?: string;
    onSearch?: (query: string) => void;
    className?: string;
}

export function SearchBar({
    placeholder = 'Search the store',
    onSearch,
    className = ''
}: SearchBarProps) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch?.(query);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`relative max-w-xs ${className} mr-8`}
        >
            <div className='relative'>
                <Input
                    type='text'
                    placeholder={placeholder}
                    value={query}
                    onChange={handleInputChange}
                    className='pl-4 pr-12 py-3 rounded-full border-2 border-gray-200 bg-white/80 backdrop-blur-sm placeholder:text-gray-400 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-all duration-200'
                    aria-label='Search'
                />
                <Button
                    type='submit'
                    size='sm'
                    variant='ghost'
                    className='absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full hover:bg-pink-100 transition-colors duration-200'
                    aria-label='Search button'
                >
                    <Search className='h-4 w-4 text-gray-500' />
                </Button>
            </div>
        </form>
    );
}
