import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Dragon ball gt"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>ProyectoUri</h1>
            <AddCategory onNewCategory={onAddCategory} />
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};