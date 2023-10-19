import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import img1 from '../images/youtube.jpg'
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import img_1 from '../images/close.png'

function Singlepage() {

  let item = useLocation().state

  return (
    <div className='w-full   xl:h-screen   bg-gradient-to-b from-black  to-gray-800 text-white   flex justify-center lg:items-center '>
      <div className='absolute top-[20px]  w-[95%] flex justify-end lg:top-[10px] xl:top-[40px] '>
        <Link to='/'> <img className='w-[20px] sm:w-[30px]' src={img_1} alt="" /> </Link>
      </div>
      <div className='w-[90%]    my-[20px] lg:my-[40px] lg:flex translate-y-[50px] lg:translate-y-0 xl:my-[20px] '>
        <div className='w-full    lg:w-[60%] '>
          <img className='w-full  h-[170px] sm:h-[300px] md:h-[400px] lg:h-[350px] xl:h-[450px]' src={item.image} alt="" />
        </div>


        {/* information  */}
        <div className='w-full   lg:w-[40%] lg:pl-[15px] '>
          <div className='my-[10px] pl-2 sm:h-[130px] sm:flex sm:flex-col   sm:justify-evenly  xl:h-[180px]'>
            <h1 className='text-2xl my-[10px] sm:my-0  xl:text-3xl '>
              {item.title}
            </h1>
            <p className='text-md lg:mt-[10px] '>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quisquam hic nulla cum officiis deleniti excepturi iste ipsa autem tempora?
            </p>
          </div>
          <div className=' flex justify-between sm:w-[50%] md:w-[42%] lg:w-[50%]  lg:h-[60px] lg:items-center '>
            <button type="button" class=" w-[130px] h-[40px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              <a href={item.url} target='_blank'>Result</a> 
              </button>
            <button type="button" class="text-white w-[130px] h-[40px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Code</button>
          </div>

          <div className='w-full pl-2 py-[15px] sm:w-[50%] lg:w-[70%] lg:py-[10px] '>
            <h3 className='text-2xl font-sans  '>Contact me </h3>
            <div className='flex justify-around items-center py-[10px] h-[60px] w-[80%]'>
              <a className='text-[30px] hover:text-red-500' href=""><BsFillPersonLinesFill /></a>
              <a className='text-[30px]  hover:text-red-500' href="https://github.com/abdullo34"><FaGithub /></a>
              <a className='text-[30px]  hover:text-red-500' href=""><FaLinkedin /> </a>
              <a className='text-[30px]  hover:text-red-500' href=""><HiOutlineMail /></a>
            </div>
          </div>



        </div>

      </div>


    </div>
  )
}

export default Singlepage