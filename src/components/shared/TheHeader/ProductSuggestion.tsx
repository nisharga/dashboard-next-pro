'use client';
import { Product } from '@/endpoints';
import Image from 'next/image';

interface ProductSuggestionsProps {
    products: Product[];
    onClose: () => void;
}

export function ProductSuggestions({
    products,
    onClose
}: ProductSuggestionsProps) {
    return (
        <div className='absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-w-2xl'>
            <div className='py-2'>
                {products.map((product) => (
                    <button
                        key={product.id}
                        className='flex items-center w-full px-4 py-3 hover:bg-gray-50 text-left'
                        onClick={onClose}
                        aria-label='search'
                    >
                        <Image
                            src={product.image || '/placeholder.svg'}
                            alt={product.title}
                            width={60}
                            height={60}
                            className='rounded-md object-cover mr-3'
                        />
                        <div className='flex-1'>
                            <h4 className='text-sm font-medium line-clamp-2'>
                                {product.title}
                            </h4>
                            <p className='text-sm mt-1'>{product.price}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
