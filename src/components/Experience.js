import React from 'react'
import img1 from '../images/icons/HTML5-without-wordmark-color-Logo-Vector.svg--264x300.png'
import img2 from '../images/icons/logo-css-3-1536.png'
import img3 from '../images/icons/download.png'
import img4 from '../images/icons/reactjspng.png'
import img5 from '../images/icons/tailwindcss.png'
import img6 from '../images/icons/sass.png'
import img7 from '../images/icons/git.png'




function Experience() {
  const links = [
    {
      id: 1,
      image: img1,
      title: "HTML",
      style: "shadow-orange-500"

    },
    {
      id: 2,
      image: img2,
      title: "CSS",
      style: "shadow-blue-500"

    },
    {
      id: 3,
      image: img3,
      title: "Javascript",
      style: "shadow-yellow-500"


    },
    {
      id: 4,
      image: img4,
      title: "React",
      style: "shadow-blue-600"

    },
    {
      id: 5,
      image: img5,
      title: "Tailwindcss",
      style: "shadow-blue-500"


    },
    {
      id: 6,
      image: img6,
      title: "Sass",
      style: "shadow-red-500"

    },
    {
      id: 7,
      image: img7,
      title: "Github",
      style: "shadow-gray-400"

    },

  ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full  py-[100px]'>

      <div className='w-[90%] mx-auto p-4 flex flex-col justify-center  text-white'>
        <div >
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline '>Experience</p>
          <p className='py-6'>These are the  technologies  I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>


          {
            links.map(({ id, image, title, style }) => (
              <div key={id} className={`shadow-md  hover:scale-105  duration-500  py-2 rounded-lg ${style}`}>

                <img className='w-[100px] h-[60px] sm:h-[100px] m-auto' src={image} alt="" />
                <p className='text-[10px] sm:text-md mt-4 lg:text-xl'>{title}</p>
              </div>
            ))
          }



        </div>
      </div>

    </div>
  )
}

export default Experience