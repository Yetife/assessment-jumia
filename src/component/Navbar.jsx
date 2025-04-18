import React, { useState } from 'react';
import { ChevronDown, Menu, Search, ShoppingCart, X, ChevronRight } from "lucide-react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 right-0 w-full bg-white shadow-sm z-10">
                {/* Main header */}
                <div className="px-4 py-3 flex items-center justify-between lg:px-40">
                    <button className="mr-3 hidden md:block">
                        <Menu className="w-6 h-6" />
                    </button>
                    <div className="flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="mr-3 md:hidden">
                            <Menu className="w-6 h-6" />
                        </button>
                        {/*<svg role="img" aria-label="Jumia Nigeria: Online Shopping for Electronics, Phones &amp; Fashion" viewBox="0 0 172 30" className="ic" width="134" height="30"><use xlink:href="https://www.jumia.com.ng/assets_he/images/i-shop-jumia.9dea3b69.svg#logo"></use></svg>*/}

                        <a href="#" className="font-bold text-2xl flex items-center">
                            JUMIA<span className="text-orange-500">⚡</span>
                        </a>
                    </div>

                    {/* Search bar */}
                    <div className="flex-1 max-w-3xl mx-4 hidden md:flex">
                        <div className="relative flex-1">
                            <input
                                type="text"
                                placeholder="Search products, brands and categories"
                                className="w-full py-2 px-4 border border-gray-300 rounded-l focus:outline-none"
                            />
                        </div>
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600">
                            Search
                        </button>
                    </div>

                    {/* User actions */}
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex items-center">
                            <span>Account</span>
                            <ChevronDown className="w-4 h-4 ml-1" />
                        </div>
                        <div className="hidden md:flex items-center">
                            <span>Help</span>
                            <ChevronDown className="w-4 h-4 ml-1" />
                        </div>
                        <div className="flex items-center">
                            <ShoppingCart className="w-6 h-6" />
                            <span className="hidden md:inline ml-1">Cart</span>
                        </div>
                    </div>
                </div>

                {/* Mobile search */}
                <div className="px-4 pb-3 md:hidden">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full py-2 px-4 border border-gray-300 rounded-l focus:outline-none"
                        />
                        <button className="bg-orange-500 text-white px-3 py-2 rounded-r hover:bg-orange-600">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Spacer to prevent content from hiding behind fixed navbar */}
            <div className="h-20 md:h-16"></div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
                    <div className="bg-white h-full w-4/5 max-w-sm overflow-y-auto">
                        <div className="flex items-center p-4 border-b">
                            <button onClick={() => setIsMobileMenuOpen(false)}>
                                <X className="w-6 h-6" />
                            </button>
                            <a href="#" className="font-bold text-2xl flex items-center pl-4">
                                JUMIA<span className="text-orange-500">⚡</span>
                            </a>
                        </div>
                        <div className="py-4">
                            <ul className="space-y-4">
                                <div className="flex justify-between py-2 px-2 border-b">
                                    <li><a href="#" className="block">NEED HELP?</a></li>
                                    <ChevronRight />
                                </div>
                                <div className="flex justify-between py-2 px-2">
                                    <li><a href="#" className="block">MY JUMIA ACCOUNT</a></li>
                                    <ChevronRight />
                                </div>
                                <div className="px-2">
                                    <li><a href="#" className="block pb-2 text-[18px]">Orders</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Pending Reviews</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Voucher</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Wishlist</a></li>
                                </div>
                                <div className="block border-b"></div>
                                <div className="flex justify-between py-2 px-2">
                                    <li><a href="#" className="block">OUR CATEGORIES</a></li>
                                    <ChevronRight />
                                </div>
                                <div className="px-2">
                                    <li><a href="#" className="block pb-2 text-[18px]">Phone & Tablets</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Appliances</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Electronics</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Supermarket</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Health & Beauty</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Home & Office</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Power</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Computing</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Women's Fashion</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Men's Fashion</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Baby Products</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Gaming</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Sporting Goods</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Automobile</a></li>
                                </div>
                                <div className="block border-b"></div>
                                <div className="flex justify-between py-2 px-2">
                                    <li><a href="#" className="block">OUR SERVICES</a></li>
                                    <ChevronRight />
                                </div>
                                <div className="px-2">
                                    <li><a href="#" className="block pb-2 text-[18px]">J-Force</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Pay Airtime & Bills</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Pay Electricity & Bills</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Pay Internet Bills</a></li>
                                    <li><a href="#" className="block py-2 text-[18px]">Buy Data</a></li>
                                </div>
                                <div className="block border-b"></div>
                                <li><a href="#" className="block p-2 text-[18px]">Sell on Jumia</a></li>
                                <li><a href="#" className="block p-2 text-[18px]">Service Center</a></li>
                                <li><a href="#" className="block p-2 text-[18px]">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;