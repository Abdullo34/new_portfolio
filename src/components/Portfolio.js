import React from 'react'
import { data } from './static_data'
import { Link } from 'react-router-dom'


function Portfolio() {


    return (
        <div name='portfolio' className='  bg-gradient-to-b from-black  to-gray-800 w-full text-white h-fit-content py-[50px] '>
            <div className=' w-[90%] p-4 mx-auto  flex flex-col justify-center   '>
                <div className='pb-8' >
                    <p className='text-4xl  font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 pb-[30px] sm:px-0'>


                    {
                        data.map((item) => (
                            <div className= 'w-full h-[200px] shadow-md duration-200 shadow-gray-600 rounded-lg '>
                                <div className=''>
                                    {/* <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'><Link state={item} to={`single/${item.id}`} >Demo</Link></button> */}
                                    <Link className='inline-block w-full h-[200px]' state={item} to={`single/${item.id}`} >
                                        <img src={item.image} alt="" className='rounded-md duration-200 hover:scale-105 w-full h-full'  />

                                    </Link>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default Portfolio