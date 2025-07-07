import { useQuery } from '@tanstack/react-query';

import { TAGS } from '@/configs';
import { defaultProducts, Product, searchProducts } from '@/endpoints';

export const useAllDefaultProduct = () =>
    useQuery<Product[]>({
        queryKey: [TAGS.product],
        queryFn: async () => defaultProducts
        // refetchOnWindowFocus: false
    });

export const useAllSearchableProduct = () =>
    useQuery<Product[]>({
        queryKey: [TAGS.product],
        queryFn: async () => searchProducts
    });
