import React from 'react';
import CategoryCard from "./CategoryCard.jsx";
import tablet from '../assets/tablet1.png'

const PhoneAndTabletCategory = () => {
    const categories = [
        {
            title: "Android Phones",
            image: tablet
        }, {
            title: "iPhones",
            image: tablet
        }, {
            title: "Cell Phones",
            image: tablet
        }, {
            title: "Android Tablets",
            image: tablet
        },{
            title: "iPads",
            image: tablet
        },{
            title: "Renewed",
            image: tablet
        },{
            title: "Top Brands",
            image: tablet
        },{
            title: "Built for Speed",
            image: tablet
        },{
            title: "Large Storage",
            image: tablet
        },{
            title: "Large Screen",
            image: tablet
        },{
            title: "Power all Day",
            image: tablet
        },
    ]
    return (
        <div className="bg-white mt-4 mx-4 rounded shadow">
            <h2 className="mb-4 bg-[#FEE2CC] px-4 py-3 font-normal text-[1.25rem] text-center">Phones & Tablets Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-2">
                {
                    categories.map((category, index) => (
                        <div key={index}>
                            <CategoryCard title={category.title} image={category.image} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PhoneAndTabletCategory;