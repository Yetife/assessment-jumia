import React from 'react';

const CategoryCard = ({ title, image }) => {
    return (
        <div className="bg-white rounded p-3 text-center hover:shadow-md transition-shadow">
            <img src={image} alt={title} className="mx-auto mb-2" />
            <h3 className="text-sm font-normal">{title}</h3>
        </div>
    );
};

export default CategoryCard;