import React from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ image, title, price, originalPrice, discount, rating, reviews, hot }) => {
    return (
        <div className="bg-white border rounded p-2 transition-shadow hover:shadow-md">
            <div className="relative">
                <img src={image} alt={title} className="w-full object-contain" />
                {discount && (
                    <span className="absolute top-0 right-0 bg-orange-100 text-orange-500 text-xs px-1 py-0.5 rounded-br">
            {discount}
          </span>
                )}
          {/*      {hot && (*/}
          {/*          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 py-0.5 rounded-bl">*/}
          {/*  HOT*/}
          {/*</span>*/}
          {/*      )}*/}
                {/*<button className="absolute bottom-0 right-0 p-1">*/}
                {/*    <Heart className="w-5 h-5 text-gray-400" />*/}
                {/*</button>*/}
            </div>
            <div className="mt-4">
                <h3 className="text-[16px] line-clamp-2 ">{title}</h3>
                <div className="mt-1">
                    <span className="font-normal text-[16px]">₦{price}</span>
                    {originalPrice && (
                        <p className="text-gray-500 text-sm line-through">₦{originalPrice}</p>
                    )}
                </div>
                {/*<div className="flex items-center mt-1">*/}
                {/*    <div className="flex text-yellow-400">*/}
                {/*        {Array(5).fill(0).map((_, i) => (*/}
                {/*            <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*    <span className="text-xs text-gray-500 ml-1">({reviews})</span>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default ProductCard;