import { useQuery } from '@tanstack/react-query';

import { TAGS } from '@/configs';
import { getAllCategories } from '@/endpoints';

export const useAllCategory = () =>
    useQuery({
        queryKey: [TAGS.category],
        queryFn: async () => getAllCategories
        // refetchOnWindowFocus: false
    });
