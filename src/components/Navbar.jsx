import React from 'react'
import { FaBicycle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='bg-black'>
            <nav classNameName="bg-gray-200  shadow shadow-gray-300 w-100 px-8 md:px-auto">
                <div className="  h-28 mx-auto md:px-6 container flex items-center justify-around flex-wrap md:flex-nowrap">

                    <div className="text-white md:order-1">
                        <FaBicycle className="h-20 w-20  font-light" />
                    </div>
                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                        <ul className="flex font-semibold justify-between">


                            <li className="md:px-4 md:py-2 text-white"><a href="/">HOME</a></li>
                            <li className="md:px-4 md:py-2 text-white"><a href="/">BICYCLES</a></li>
                            <li className="md:px-4 md:py-2 text-white"><a href="/">ACCESSORIES</a></li>
                            <li className="md:px-4 md:py-2 text-white"><a href="/">ABOUT</a></li>
                            <li className="md:px-4 md:py-2 text-white"><a href="/">CONTACT</a></li>
                        </ul>
                    </div>
                    <div className="order-2 md:order-3 ">
                        <p className='gap-2 flex justify-center items-center relative'>
                            <span className='text-white text-xl '>$0.00</span>  <FaShoppingCart className="text-white h-6 w-6" />
                            <p className=' absolute flex justify-center items-center rounded-xl text-center pos text-black p-1 w-5 h-5 bg-white'>5</p>
                        </p>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
