import React from 'react'
import Card from './Card'
import data from './data.json'

const Section2 = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-center text-7xl font-bold italic h-20 text-black'>New Arrival</h1>
            <div className='mt-6 flex'>

                {data.map((item) => (
                    <Card key={item.id} item={item} />
                ))}

            </div>
        </div>
    )
}

export default Section2
