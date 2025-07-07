import React, { SetStateAction } from 'react';

interface ICategory {
    showCategories: boolean;
    setShowCategories: React.Dispatch<SetStateAction<boolean>>;
}

const Category = ({ showCategories, setShowCategories }: ICategory) => {
    return (
        <>
            {showCategories && (
                <div className='cursor-pointer absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50'>
                    <div className='py-2'>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className='cursor-pointer block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                onClick={() => setShowCategories(false)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Category;
const categories = [
    'Accessories',
    'Art & Collectibles',
    'Baby',
    'Bags & Purses',
    'Bath & Beauty',
    'Books, Movies & Music',
    'Clothing',
    'Craft Supplies & Tools',
    'Electronics & Accessories',
    'Gifts',
    'Home & Living',
    'Jewelry'
];
