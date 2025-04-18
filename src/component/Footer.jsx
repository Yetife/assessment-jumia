import React from 'react';
import {Facebook, Instagram, Twitter, Youtube} from "lucide-react";

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer className="mt-8 bg-gray-800 text-white">
                <div className="container mx-auto pt-6">
                    <div>
                        <div className="mb-8 md:mb-0 flex flex-col md:flex-row justify-around">
                            <h2 className="text-2xl font-bold mb-4">JUMIA<span className="text-orange-500">⚡</span></h2>

                            <div className="mb-6">
                                <h3 className="text-sm font-semibold mb-2">NEW TO JUMIA?</h3>
                                <p className="text-xs mb-2">Subscribe to our newsletter to get updates on our latest offers!</p>
                                <div className="flex max-w-xs">
                                    <input
                                        type="email"
                                        placeholder="Enter E-mail Address"
                                        className="w-full py-2 px-3 bg-white text-gray-700 rounded-l"
                                    />
                                    <button className="bg-gray-700 px-4 py-2 rounded-r hover:bg-gray-600">
                                        Subscribe
                                    </button>
                                </div>
                                <div>
                                    <div className="flex pt-8">
                                        <input type="checkbox" id="brand1" className="mr-2" />
                                        <label htmlFor="brand1" className="text-sm text-gray-500">I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe from newsletters <br/> at any time.</label>
                                    </div>
                                    <a className="text-sm text-orange-500">I accept the Legal Terms</a>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-sm font-semibold mb-2">DOWNLOAD JUMIA FREE APP</h3>
                                <p className="text-xs mb-2">Get access to exclusive offers!</p>
                                <div className="flex space-x-2">
                                    <button className="bg-black text-white text-xs px-3 py-2 rounded flex items-center">
                                        Download on the<br/>App Store
                                    </button>
                                    <button className="bg-black text-white text-xs px-3 py-2 rounded flex items-center">
                                        GET IT ON<br/>Google Play
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#535357] pt-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:mx-32">
                                <div>
                                    <h3 className="font-semibold mb-4">NEED HELP?</h3>
                                    <ul className="text-xs space-y-2">
                                        <li><a href="#" className="hover:underline">Chat with us</a></li>
                                        <li><a href="#" className="hover:underline">Help Center</a></li>
                                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                                    </ul>

                                    <h3 className="font-semibold mt-6 mb-4">USEFUL LINKS</h3>
                                    <ul className="text-xs space-y-2">
                                        <li><a href="#" className="hover:underline">Service Center</a></li>
                                        <li><a href="#" className="hover:underline">How to shop on Jumia?</a></li>
                                        <li><a href="#" className="hover:underline">Delivery options and timelines</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-4">ABOUT JUMIA</h3>
                                    <ul className="text-xs space-y-2">
                                        <li><a href="#" className="hover:underline">About us</a></li>
                                        <li><a href="#" className="hover:underline">Jumia careers</a></li>
                                        <li><a href="#" className="hover:underline">Jumia Express</a></li>
                                        <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
                                        <li><a href="#" className="hover:underline">Privacy Notice</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-4">MAKE MONEY WITH JUMIA</h3>
                                    <ul className="text-xs space-y-2">
                                        <li><a href="#" className="hover:underline">Sell on Jumia</a></li>
                                        <li><a href="#" className="hover:underline">Vendor hub</a></li>
                                        <li><a href="#" className="hover:underline">Become a Sales Consultant</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-4">JUMIA INTERNATIONAL</h3>
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                                        <a href="#" className="hover:underline">Algeria</a>
                                        <a href="#" className="hover:underline">Kenya</a>
                                        <a href="#" className="hover:underline">Egypt</a>
                                        <a href="#" className="hover:underline">Morocco</a>
                                        <a href="#" className="hover:underline">Ghana</a>
                                        <a href="#" className="hover:underline">Senegal</a>
                                        <a href="#" className="hover:underline">Ivory Coast</a>
                                        <a href="#" className="hover:underline">Uganda</a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-b pb-12 border-gray-700 md:mx-32">
                                <div className="flex flex-col md:flex-row">
                                    <div className="mb-4 md:mb-0">
                                        <h3 className="font-semibold text-sm mb-4">JOIN US ON</h3>
                                        <div className="flex space-x-4">
                                            <a href="#" className="hover:text-orange-500"><Facebook className="w-5 h-5" /></a>
                                            <a href="#" className="hover:text-orange-500"><Youtube className="w-5 h-5" /></a>
                                            <a href="#" className="hover:text-orange-500"><Instagram className="w-5 h-5" /></a>
                                            <a href="#" className="hover:text-orange-500"><Twitter className="w-5 h-5" /></a>
                                        </div>
                                    </div>

                                    <div className="pl-8">
                                        <h3 className="font-semibold text-sm mb-4">PAYMENT METHODS & DELIVERY PARTNERS</h3>
                                        <div className="flex flex-wrap gap-4">
                                            <div className="bg-white text-gray-800 p-1 rounded w-8 h-5"></div>
                                            <div className="bg-white text-gray-800 p-1 rounded w-8 h-5"></div>
                                            <div className="bg-white text-gray-800 p-1 rounded w-8 h-5"></div>
                                            <div className="bg-white text-gray-800 p-1 rounded w-8 h-5"></div>
                                            <div className="bg-white text-gray-800 p-1 rounded w-8 h-5"></div>
                                            <div className="bg-white text-gray-800 p-1 rounded w-8 h-5"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Copyright Information */}
                            <div className="mt-8 text-center text-xs text-gray-400">
                                <p>© 2025 Jumia. All rights reserved</p>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;