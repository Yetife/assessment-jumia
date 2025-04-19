import { useState } from 'react';
import { Search, ShoppingCart, ChevronDown, Heart, X, Menu, ArrowRight, Facebook, Youtube, Instagram, Twitter } from 'lucide-react';
import ListingProductCard from "./ListingProductCard.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import TopDeals from "./TopDeals.jsx";
import PhoneAndTabletCategory from "./PhoneAndTabletCategory.jsx";
import OfficialStore from "./OfficialStore.jsx";
import phone1 from '../assets/phone6.jpg'
export default function JumiaClone() {

    return (
        <div className='bg-gray-100'>
            <Navbar/>
            <div className="min-h-screen lg:px-40">

                {/* Flash Sale Banner */}
                {/*<div className="bg-white p-4 mt-4 mx-1 rounded shadow">*/}
                {/*    <div className="bg-gray-100 p-3 rounded flex items-center justify-between">*/}
                {/*        <div>*/}
                {/*            <h3 className="font-bold text-lg">FLASH SALE AWOOF!</h3>*/}
                {/*            <p className="text-sm">Huge 68% OFF itel PowerPulse A1160 Power-Bank 20000mAh 12W Fast Charging TypeC</p>*/}
                {/*            <div className="mt-2 text-sm">*/}
                {/*                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">HOT</span>*/}
                {/*                <span className="ml-2 font-semibold">ITEL</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="flex flex-col items-center">*/}
                {/*            <img src="/api/placeholder/120/100" alt="Power Bank" className="mb-2" />*/}
                {/*            <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-semibold">*/}
                {/*                BUY NOW*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className=" pt-4 mt-4 mx-1">
                    <p className="text-sm">Home  >  Phones & Tablets > Mobile Phones > Smartphones</p>
                </div>

                {/* Top Deals Section */}
               <TopDeals/>

                {/* Categories */}
               <PhoneAndTabletCategory />

                <OfficialStore />

                {/* Smartphones Listing */}
                <div className="flex flex-col md:flex-row mt-4 mx-1 gap-4">
                    {/* Filters - Desktop */}
                    <div className="hidden md:block w-64 bg-white rounded shadow p-4 h-fit">
                        <h3 className="font-bold mb-3">CATEGORY</h3>
                        <ul className="space-y-2 mb-4">
                            <li><a href="#" className="text-gray-700 hover:text-orange-500">Mobile Phones</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-orange-500 font-semibold">Smartphones</a></li>
                            <li className="ml-4"><a href="#" className="text-gray-700 hover:text-orange-500">Android Phones</a></li>
                            <li className="ml-4"><a href="#" className="text-gray-700 hover:text-orange-500">iOS Phones</a></li>
                            <li className="ml-4"><a href="#" className="text-gray-700 hover:text-orange-500">Other Operating Systems</a></li>
                        </ul>

                        <h3 className="font-bold mb-3">BRAND</h3>
                        <div className="mb-2">
                            <input type="text" placeholder="Search" className="w-full p-2 border rounded text-sm" />
                        </div>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center">
                                <input type="checkbox" id="brand1" className="mr-2" />
                                <label htmlFor="brand1" className="text-sm">AGM</label>
                            </li>
                            <li className="flex items-center">
                                <input type="checkbox" id="brand2" className="mr-2" />
                                <label htmlFor="brand2" className="text-sm">Anker</label>
                            </li>
                            <li className="flex items-center">
                                <input type="checkbox" id="brand3" className="mr-2" />
                                <label htmlFor="brand3" className="text-sm">ANXINDENO</label>
                            </li>
                            <li className="flex items-center">
                                <input type="checkbox" id="brand4" className="mr-2" />
                                <label htmlFor="brand4" className="text-sm">Apple</label>
                            </li>
                        </ul>

                        <h3 className="font-bold mb-3">COLOR</h3>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center">
                                <input type="checkbox" id="color1" className="mr-2" />
                                <label htmlFor="color1" className="text-sm">Beige</label>
                            </li>
                            <li className="flex items-center">
                                <input type="checkbox" id="color2" className="mr-2" />
                                <label htmlFor="color2" className="text-sm">Cyan</label>
                            </li>
                        </ul>

                        <h3 className="font-bold mb-3">PRICE (₦)</h3>
                        <div className="flex items-center space-x-2 mb-2">
                            <input type="text" placeholder="2499" className="w-full p-2 border rounded text-sm" />
                            <span>-</span>
                            <input type="text" placeholder="6500000" className="w-full p-2 border rounded text-sm" />
                        </div>
                        <button className="text-orange-500 ml-auto block mb-4">Apply</button>

                        <h3 className="font-bold mb-3">RAM</h3>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center">
                                <input type="checkbox" id="ram1" className="mr-2" />
                                <label htmlFor="ram1" className="text-sm">1</label>
                            </li>
                            <li className="flex items-center">
                                <input type="checkbox" id="ram2" className="mr-2" />
                                <label htmlFor="ram2" className="text-sm">2</label>
                            </li>
                            <li className="flex items-center">
                                <input type="checkbox" id="ram3" className="mr-2" />
                                <label htmlFor="ram3" className="text-sm">3</label>
                            </li>
                            <li className="flex items-center">
                                <input type="checkbox" id="ram4" className="mr-2" />
                                <label htmlFor="ram4" className="text-sm">4</label>
                            </li>
                        </ul>
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1 bg-white rounded shadow p-4">

                        <div className="mb-4">
                            <h2 className="text-lg font-semibold">Smartphones <span className="text-sm text-gray-500">(8872 products found)</span></h2>
                            <div className="flex flex-wrap gap-2 text-sm text-orange-500 mt-1">
                                <span className="text-[#535357] font-normal">Related results:</span>
                                <a href="#" className="hover:underline">Quality Camera Phones</a> |
                                <a href="#" className="hover:underline">Black Friday Smartphones</a> |
                                <a href="#" className="hover:underline">Table</a> |
                                <a href="#" className="hover:underline">C Table</a> |
                                <a href="#" className="hover:underline">Anniversary</a> |
                                <a href="#" className="hover:underline">Stay Connected</a> |
                                <a href="#" className="hover:underline">Smart Table</a>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <div className="hidden md:block">
                                <span className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded">EXPRESS</span>
                            </div>
                            <div className="mr-2">
                                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Shipped from Nigeria</span>
                            </div>
                            <div className="hidden md:flex items-center">
                                <span className="text-gray-700 text-sm">Brand</span>
                                <ChevronDown className="w-4 h-4 ml-1" />
                            </div>
                            <div className="hidden md:flex items-center ml-2">
                                <span className="text-gray-700 text-sm">Price</span>
                                <ChevronDown className="w-4 h-4 ml-1" />
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <ListingProductCard
                                image={phone1}
                                title="XIAOMI Redmi A3x 6.71"
                                price="88,316"
                                rating={4}
                                reviews={75}
                                officialStore={true}
                            />

                            <ListingProductCard
                                image={phone1}
                                title="itel A50 6.6"
                                price="93,500"
                                originalPrice="110,000"
                                discount="-15%"
                                rating={4}
                                reviews={103}
                                officialStore={true}
                                hot={true}
                            />

                            <ListingProductCard
                                image={phone1}
                                title="itel RS4 256GB ROM+8 GB RAM"
                                price="159,000"
                                originalPrice="250,000"
                                discount="-36%"
                                rating={4}
                                reviews={50}
                                officialStore={true}
                                payOnDelivery={true}
                            />

                            <ListingProductCard
                                image={phone1}
                                title="Samsung Galaxy A05 6.7 4GB RAM/64GB ROM"
                                price="106,853"
                                rating={4}
                                reviews={144}
                                officialStore={true}
                            />

                            <ListingProductCard
                                image={phone1}
                                title="Samsung Galaxy A05 6.7 4GB RAM 128GB ROM"
                                price="142,203"
                                rating={4.5}
                                reviews={114}
                                officialStore={true}
                            />

                            <ListingProductCard
                                image={phone1}
                                title="XIAOMI Redmi 14C 6.88 4GB RAM/128GB ROM"
                                price="125,712"
                                rating={4}
                                reviews={197}
                                officialStore={true}
                            />

                            <ListingProductCard
                                image={phone1}
                                title="Tecno Spark 30C 6.6 4GB RAM/128GB ROM"
                                price="159,474"
                                rating={4}
                                reviews={209}
                                officialStore={true}
                            />

                            <ListingProductCard
                                image={phone1}
                                title="XIAOMI Redmi 14C 6.88 8GB RAM/256GB ROM"
                                price="157,722"
                                rating={4}
                                reviews={161}
                                officialStore={true}
                            />
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-8">
                            <nav className="inline-flex">
                                <a href="#" className="px-3 py-2 border text-sm">‹‹</a>
                                <a href="#" className="px-3 py-2 border text-sm">‹</a>
                                <a href="#" className="px-3 py-2 border bg-orange-500 text-white text-sm">1</a>
                                <a href="#" className="px-3 py-2 border text-sm">2</a>
                                <a href="#" className="px-3 py-2 border text-sm">3</a>
                                <a href="#" className="px-3 py-2 border text-sm">›</a>
                                <a href="#" className="px-3 py-2 border text-sm">››</a>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="bg-white p-4 mt-4 mx-1 rounded shadow">
                    <h2 className="text-lg font-semibold mb-2">Discover the Best Smartphones on Jumia</h2>
                    <p className="text-sm mb-3">
                        In today's digital age, smartphones are more than just communication devices—they're your gateway to staying connected, productive, and entertained. At Jumia, we offer an extensive collection of the latest smartphones to suit your lifestyle, whether you're looking for cutting-edge technology, budget-friendly options, or devices tailored for gaming, photography, or multitasking.
                    </p>
                    <p className="text-sm mb-3">
                        Explore our comprehensive Phones and Tablets category, where you'll find not only smartphones but also other essential gadgets like Tablets, Basic Phones, and Mobile Accessories to complete your tech experience.
                    </p>

                    <h3 className="font-semibold mb-2">Find Your Ideal Smartphone</h3>
                    <p className="text-sm mb-2">
                        We've made it simple to browse and choose from our wide selection of smartphones by organizing them into helpful subcategories:
                    </p>
                    <ul className="list-disc pl-5 text-sm mb-3">
                        <li>
                            <strong>Android Phones:</strong> Offering the perfect balance of high functionality and affordability. With brands like Samsung, Xiaomi, Oppo, and Tecno, you'll find phones equipped with powerful processors, stunning displays, and exceptional cameras to suit every budget and lifestyle.
                        </li>
                        <li>
                            <strong>iOS Phones:</strong> If you prefer a sleek, user-friendly interface and seamless integration with other Apple products, iOS phones like the iPhone are your go-to option. Explore models with advanced features like Face ID, cinematic photography, and lightning-fast performance.
                        </li>
                        <li>
                            <strong>Other Operating Systems:</strong> For those seeking something unique, devices with alternative operating systems like KaiOS or custom builds offer a fresh perspective. These phones often cater to niche audiences, such as professionals or enthusiasts, providing distinct features and functionalities.
                        </li>
                    </ul>

                    <h3 className="font-semibold mb-2">Why Shop Smartphones on Jumia?</h3>
                    <p className="text-sm mb-3">
                        At Jumia, we're committed to offering only the best. Whether you're looking for flagship models or affordable alternatives, we ensure you get genuine products, competitive prices, and unbeatable convenience. With detailed product descriptions, customer reviews, and exciting deals, finding the perfect smartphone has never been easier.
                    </p>

                    <h3 className="font-semibold mb-2">Ready to Upgrade Your Smartphone?</h3>
                    <p className="text-sm mb-3">
                        Start exploring our Smartphones category today and find the perfect device for your needs. Don't forget to check out our Phones and Tablets section for more options, including accessories to complement your new smartphone. At Jumia, we make it simple, affordable, and exciting to shop for your next tech upgrade!
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm mt-4">
                        <a href="#" className="text-blue-700 hover:underline">4G Mobile</a>
                        <a href="#" className="text-blue-700 hover:underline">4g Android Phones</a>
                        <a href="#" className="text-blue-700 hover:underline">Samsung Galaxy S2</a>
                        <a href="#" className="text-blue-700 hover:underline">Samsung Galaxy Tab S2</a>
                        <a href="#" className="text-blue-700 hover:underline">8gb Ram Phones</a>
                        <a href="#" className="text-blue-700 hover:underline">I Phone 6</a>
                        <a href="#" className="text-blue-700 hover:underline">Nokia 3</a>
                        <a href="#" className="text-blue-700 hover:underline">Infinix Smart 3</a>
                        <a href="#" className="text-blue-700 hover:underline">5000mah Phones</a>
                        <a href="#" className="text-blue-700 hover:underline">64gb Phones</a>
                        <a href="#" className="text-blue-700 hover:underline">Ulefone X</a>
                        <a href="#" className="text-blue-700 hover:underline">Dual Sim 5g Phone</a>
                    </div>
                </div>


                {/* Back to Top Button - Fixed */}
                <div className="fixed bottom-4 right-4">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>

                {/* Newsletter Popup - Can be triggered with useState */}
                <div className="hidden">
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold">Subscribe to our Newsletter</h3>
                                <button className="text-gray-500 hover:text-gray-700">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Be the first to know about our exclusive deals, new arrivals, and special promotions!
                            </p>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full p-2 border border-gray-300 rounded mb-2"
                                />
                                <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                                    Subscribe
                                </button>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="consent" className="mr-2" />
                                <label htmlFor="consent" className="text-xs text-gray-600">
                                    I agree to receive marketing emails from Jumia
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick View Product Modal - Can be triggered with useState */}
                <div className="hidden">
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-4 rounded-lg shadow-xl max-w-3xl w-full">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold">Quick View</h3>
                                <button className="text-gray-500 hover:text-gray-700">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/2 p-4">
                                    <img src="/api/placeholder/300/300" alt="Product" className="w-full" />
                                    <div className="flex justify-center mt-4 space-x-2">
                                        <button className="w-12 h-12 border-2 border-gray-200 p-1">
                                            <img src="/api/placeholder/40/40" alt="Thumbnail" />
                                        </button>
                                        <button className="w-12 h-12 border-2 border-gray-200 p-1">
                                            <img src="/api/placeholder/40/40" alt="Thumbnail" />
                                        </button>
                                        <button className="w-12 h-12 border-2 border-gray-200 p-1">
                                            <img src="/api/placeholder/40/40" alt="Thumbnail" />
                                        </button>
                                    </div>
                                </div>

                                <div className="md:w-1/2 p-4">
                                    <h2 className="text-xl font-semibold mb-2">
                                        Samsung Galaxy A05 6.7" 4GB RAM/64GB ROM Android 13 - Black
                                    </h2>

                                    <div className="flex items-center mb-2">
                                        <div className="flex text-yellow-400">
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span className="text-gray-300">★</span>
                                        </div>
                                        <span className="text-sm text-gray-500 ml-2">(144 Reviews)</span>
                                    </div>

                                    <div className="mb-4">
                                        <span className="font-bold text-2xl">₦106,853</span>
                                        <span className="text-gray-500 text-sm ml-2 line-through">₦115,000</span>
                                        <span className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded ml-2">-7%</span>
                                    </div>

                                    <p className="text-sm text-gray-600 mb-4">
                                        The Samsung Galaxy A05 features a 6.7" display, 4GB RAM and 64GB storage. Powered by Android 13, this smartphone offers a smooth experience for your everyday tasks.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold mb-1">Key Features:</h4>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            <li>• 6.7" HD+ Display</li>
                                            <li>• 4GB RAM / 64GB Storage</li>
                                            <li>• 50MP Main Camera</li>
                                            <li>• 5000mAh Battery</li>
                                            <li>• Android 13</li>
                                        </ul>
                                    </div>

                                    <div className="flex items-center mb-4">
                                        <div className="flex border rounded overflow-hidden">
                                            <button className="px-3 py-1 bg-gray-100">-</button>
                                            <input type="text" value="1" className="w-12 text-center" readOnly />
                                            <button className="px-3 py-1 bg-gray-100">+</button>
                                        </div>
                                        <span className="text-xs text-gray-500 ml-2">Only 5 items left!</span>
                                    </div>

                                    <div className="flex space-x-3">
                                        <button className="flex-1 bg-orange-500 text-white py-2 rounded hover:bg-orange-600 flex items-center justify-center">
                                            <ShoppingCart className="w-4 h-4 mr-2" />
                                            Add to Cart
                                        </button>
                                        <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100">
                                            <Heart className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Filter Drawer - Can be triggered with useState */}
                <div className="hidden">
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
                        <div className="bg-white h-full w-full max-w-sm overflow-y-auto absolute right-0">
                            <div className="flex justify-between items-center p-4 border-b">
                                <h2 className="font-semibold">Filter Products</h2>
                                <button>
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="p-4">
                                <div className="mb-6">
                                    <h3 className="font-bold mb-3">PRICE</h3>
                                    <div className="flex items-center space-x-2 mb-2">
                                        <input type="text" placeholder="Min" className="w-full p-2 border rounded text-sm" />
                                        <span>-</span>
                                        <input type="text" placeholder="Max" className="w-full p-2 border rounded text-sm" />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="font-bold mb-3">BRAND</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <input type="checkbox" id="m-brand1" className="mr-2" />
                                            <label htmlFor="m-brand1">Samsung</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="m-brand2" className="mr-2" />
                                            <label htmlFor="m-brand2">Apple</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="m-brand3" className="mr-2" />
                                            <label htmlFor="m-brand3">Xiaomi</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="m-brand4" className="mr-2" />
                                            <label htmlFor="m-brand4">Tecno</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="font-bold mb-3">RAM</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <input type="checkbox" id="m-ram1" className="mr-2" />
                                            <label htmlFor="m-ram1">2GB</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="m-ram2" className="mr-2" />
                                            <label htmlFor="m-ram2">4GB</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="m-ram3" className="mr-2" />
                                            <label htmlFor="m-ram3">6GB</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="m-ram4" className="mr-2" />
                                            <label htmlFor="m-ram4">8GB</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="font-bold mb-3">STORAGE</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <input type="checkbox" id="m-storage1" className="mr-2" />
                                            <label htmlFor="m-storage1">32GB</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="m-storage2" className="mr-2" />
                                            <label htmlFor="m-storage2">64GB</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="m-storage3" className="mr-2" />
                                            <label htmlFor="m-storage3">128GB</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="m-storage4" className="mr-2" />
                                            <label htmlFor="m-storage4">256GB</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex space-x-4">
                                    <button className="flex-1 border border-gray-300 py-2 rounded">
                                        Clear
                                    </button>
                                    <button className="flex-1 bg-orange-500 text-white py-2 rounded">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}