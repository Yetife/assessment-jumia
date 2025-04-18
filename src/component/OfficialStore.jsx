import React from 'react';
import brand1 from '../assets/brand1.png'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'
const OfficialStore = () => {
    const brands = [brand1, brand2, brand1, brand3, brand2, brand3]
    return (
        <div className="bg-white mt-4 mx-1 rounded shadow">
            <h2 className=" bg-[#E2F5FF] px-4 py-3 font-normal text-[1.25rem] text-center">Official Stores</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-1">
                {
                    brands.map((brand, index) => (
                        <div key={index} className="bg-white rounded p-3 text-center">
                            <img src={brand} alt={"brand"} className="mx-auto mb-2 transition-transform duration-300 hover:scale-110" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OfficialStore;