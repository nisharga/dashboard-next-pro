export interface Product {
    id: string;
    title: string;
    image: string;
    price: string;
}

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

export const categories = [
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
