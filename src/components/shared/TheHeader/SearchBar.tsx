'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui';
import { useDebounce } from '@/lib/useDebounce';
import { defaultProducts, Product, searchProducts } from '@/endpoints';
import { Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ProductSuggestions } from './ProductSuggestion';

interface SearchBarProps {
    onCloseOverlay: () => void;
    className: string;
}

const SearchBar = ({ onCloseOverlay, className }: SearchBarProps) => {
    const [searchValue, setSearchValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const debouncedSearchValue = useDebounce(searchValue, 300);
    const searchRef = useRef<HTMLDivElement>(null);

    // Load products only when focused
    useEffect(() => {
        if (!isFocused) return;

        if (!debouncedSearchValue.trim()) {
            setFilteredProducts(defaultProducts);
        } else {
            // Simulate API call using searchProducts
            const results = searchProducts.slice(0, 4);
            setFilteredProducts(results);
        }
    }, [debouncedSearchValue, isFocused]);

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(e.target as Node)
            ) {
                setIsFocused(false);
                setShowSuggestions(false);
                onCloseOverlay();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [onCloseOverlay]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        setShowSuggestions(true);
    };

    const handleFocus = () => {
        setIsFocused(true);
        setShowSuggestions(true);
    };

    const clearSearch = () => {
        setSearchValue('');
        setShowSuggestions(false);
        setIsFocused(false);
        setFilteredProducts([]);
        onCloseOverlay();
    };

    const shouldShow =
        showSuggestions && isFocused && filteredProducts.length > 0;

    return (
        <div
            className={`flex-1 max-w-2xl mx-8 relative ${className}`}
            ref={searchRef}
        >
            <div className='relative flex'>
                <Input
                    type='text'
                    placeholder='Search for anything'
                    value={searchValue}
                    onChange={handleSearchChange}
                    onFocus={handleFocus}
                    className='flex-1 h-12 pl-4 pr-12 border-2 border-gray-300 rounded-l-full focus:border-orange-500 focus:ring-0'
                />

                {searchValue && (
                    <button
                        onClick={clearSearch}
                        className='absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
                    >
                        <X className='h-4 w-4' />
                    </button>
                )}

                <Button
                    aria-label='search-btn'
                    className='h-12 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-r-full border-2 border-orange-500'
                >
                    <Search className='h-5 w-5' />
                </Button>
            </div>

            {shouldShow && (
                <ProductSuggestions
                    products={filteredProducts}
                    onClose={clearSearch}
                />
            )}
        </div>
    );
};

export default SearchBar;
