import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs({ category }); // Pass category as an object
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, [category]); // Add category to dependencies to refetch when it changes

    return {
        images,
        isLoading,
    };
};