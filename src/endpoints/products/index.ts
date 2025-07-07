export interface Product {
    id: string;
    title: string;
    image: string;
    price: string;
}

export const getAllSearchDefaultProduct = async () => defaultProducts ?? [];
export const getAllSearchableProduct = async () => searchProducts ?? [];
export const getAllCategories = async () => categories ?? [];

// export const getAllUsers = async (): Promise<User[]> => {
//     const res = await axios.get(BASE_URL);
//     return res.data;
// };

// export const getSingleUser = async (id: string): Promise<User> => {
//     const res = await axios.get(`${BASE_URL}/${id}`);
//     return res.data;
// };

// export const createUser = async (data: Omit<User, 'id'>): Promise<User> => {
//     const res = await axios.post(BASE_URL, data);
//     return res.data;
// };
// export const updateUser = async (
//     id: string,
//     data: Partial<Omit<User, 'id'>>
// ): Promise<User> => {
//     const res = await axios.put(`${BASE_URL}/${id}`, data);
//     return res.data;
// };
// export const deleteUser = async (id: string): Promise<void> => {
//     await axios.delete(`${BASE_URL}/${id}`);
// };

export const defaultProducts: Product[] = [
    {
        id: '1',
        title: 'Handmade Ceramic Mug',
        image: '/placeholder.svg?height=80&width=80',
        price: '$24.99'
    },
    {
        id: '2',
        title: 'Vintage Leather Journal',
        image: '/placeholder.svg?height=80&width=80',
        price: '$32.50'
    },
    {
        id: '3',
        title: 'Artisan Wooden Bowl',
        image: '/placeholder.svg?height=80&width=80',
        price: '$45.00'
    },
    {
        id: '4',
        title: 'Hand-knitted Scarf',
        image: '/placeholder.svg?height=80&width=80',
        price: '$28.75'
    },
    {
        id: '5',
        title: 'Custom Portrait Drawing',
        image: '/placeholder.svg?height=80&width=80',
        price: '$65.00'
    }
];

export const searchProducts: Product[] = [
    {
        id: '6',
        title: 'Bohemian Wall Tapestry',
        image: '/placeholder.svg?height=80&width=80',
        price: '$39.99'
    },
    {
        id: '7',
        title: 'Minimalist Plant Pot',
        image: '/placeholder.svg?height=80&width=80',
        price: '$18.50'
    },
    {
        id: '8',
        title: 'Handcrafted Silver Ring',
        image: '/placeholder.svg?height=80&width=80',
        price: '$89.00'
    },
    {
        id: '9',
        title: 'Organic Soap Set',
        image: '/placeholder.svg?height=80&width=80',
        price: '$22.99'
    }
];
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
