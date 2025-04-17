import React from 'react';
import {ArrowRight} from "lucide-react";
import ProductCard from "./ProductCard.jsx";
import phone1 from "../assets/phone1.svg"
import phone2 from "../assets/phone2.jpg"
import phone3 from "../assets/phone5.jpg"
const TopDeals = () => {
    const products = [
        {
            image: phone1,
            title: "Tecno Pop 9 6.67",
            price: "114,384",
            originalPrice: "125,684",
            discount: "-9%",
            rating: 4,
            reviews: 214
        },
        {
            image: phone1,
            title: "itel S25 Ultra 6.78",
            price: "231,300",
            originalPrice: "300,000",
            discount: "-23%",
            rating: 4,
            reviews: 39,
            hot: true
        },
        {
            image: phone3,
            title: "XIAOMI Redmi 14C 6.88",
            price: "125,712",
            originalPrice: "",
            discount: "",
            rating: 4,
            reviews: 42
        },
        {
            image: phone1,
            title: "Infinix Smart 9HD 6.7",
            price: "117,261",
            originalPrice: "136,211",
            discount: "-14%",
            rating: 4,
            reviews: 135
        },
        {
            image: phone3,
            title: "Samsung Galaxy A05 6.7",
            price: "113,160",
            originalPrice: "124,160",
            discount: "-9%",
            rating: 4,
            reviews: 56
        }
    ]
    return (
        <div className="bg-white mt-4 mx-4 rounded shadow">
            <div className="flex justify-between items-center mb-4 bg-[#FEE2CC] px-4 py-3">
                <h2 className="font-normal text-[1.25rem]">Top Deals</h2>
                <a href="#" className="text-sm text-gray-600 flex items-center">
                    See All <ArrowRight className="w-4 h-4 ml-1" />
                </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                {
                    products.map((product, index) => (
                        <div key={index}>
                            <ProductCard
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                originalPrice={product.originalPrice}
                                discount={product.discount}
                                rating={product.rating}
                                reviews={product.reviews}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TopDeals;