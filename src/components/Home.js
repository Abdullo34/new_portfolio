import React from 'react'
import img from '../images/port_img.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useTypewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll'

function Home() {
    const [typeEffect] = useTypewriter({
        words: ["React Dev", "Mobile Dev", "Next js Dev"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40


    })

    return (
        <div name='home' className='py-[40px]  mt-[50px]  w-full h-screen bg-gradient-to-b from-black via-black to-gray-800   '>


            <div className='max-w-screen-lg mx-auto flex  flex-col  items-center justify-center h-full  px-4 lg:flex-row'>
                <div className='flex flex-col  justify-center md:h-[450px] lg:h-full'>

                    <h2 className='text-4xl sm:text-5xl font-bold text-white'>I'm a <span>{typeEffect}</span></h2>

                    <p className='text-gray-500 py-4 max-w-md'>
                        I have  8 years of experience building  and desgining software.
                        Currently, I love to work on web application using technologies like
                        React, Tailwind, Next JS and GraphQL.
                    </p>

                    <div>
                        <button className=' group text-white w-fit px-6 py-3 my-2  flex items-center rounded-md bg-gradient-to-r  from-cyan-500 to-blue-500'>
                            <Link className='flex' to='portfolio'>
                                Portfolio
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1  group-hover:rotate-90 duration-300' />

                            </Link>


                        </button>
                    </div>


                </div>
                <div className='w-1/2  md:w-full lg:w-1/2  mt-2 lg:mt-0 py-[15px] lg:py-0'>
                    <img src={img} alt="" className='rounded-2xl mx-auto w-[90%] h-[240px] sm:w-[70%] sm:h-[230px] md:w-[70%] md:h-[300px]' />
                </div>
            </div>
        </div>
    )
}

export default Home