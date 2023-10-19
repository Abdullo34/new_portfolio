import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

function Social() {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://linkedin.com',
            style: "rounded-tr-md"

        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/abdullo34',
            style: "rounded-tr-md"

        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'https://',

        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: 'https://linkedin.com',
            style: "rounded-br-md"

        },
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>

            <ul>
                {
                    links.map(({ id, child, href }) => (
                        <li key={id} className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-200
                hover:ml-[-10px]'>

                            <a href={href} className='flex justify-between items-center w-full text-white' target='_blank'>
                               {child}
                            </a>

                        </li>
                    ))
                }


            </ul>
        </div>
    )
}

export default Social