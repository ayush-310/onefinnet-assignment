import React from 'react'
import { FiTarget } from "react-icons/fi";

const Section1 = () => {
    return (
        <div className='flex bg-black h-[110vh]  pb-5'>

            {/* Box1 */}
            <div className='flex flex-col gap-3 justify-center items-center  w-[50%]'>
                <div className=' text-white'>
                    <div className='mb-8'>
                        <p className='text-3xl font-bold ps-4 italic'>Newly Launched</p>
                        <p className='my-10 font-bold text-9xl italic'>Kryo X26</p>
                        <p className='text-7xl font-bold italic'>MTB</p>
                    </div>
                    <div>
                        <p className='text-white font-bold text-xl italic mb-4'>Specification:</p>
                        <ul>
                            <li className='flex gap-2 items-center'>  <FiTarget />Lightweight 18" Frame</li>
                            <li className='flex gap-2 items-center my-2'><FiTarget />Steel Suspension Fork</li>
                            <li className='flex gap-2 items-center'>  <FiTarget />Steel Hardtail Frame</li>
                        </ul>
                    </div>

                    <button className="button-24 mt-9" >BUY NOW</button>
                </div>
            </div>

            {/* box 2 */}
            <div className='bimg w-[50%]'>
            </div>

        </div>
    )
}

export default Section1
