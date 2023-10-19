import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'


function About() {

    const [typeEffect] = useTypewriter({
        words: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore numquam asperiores est ullam, officia ducimus aspernatur minus reiciendis magni enim cumque! Aperiam, officia vero explicabo consequatur commodi odio ea laudantium impedit nobis aliquid? Eum nisi eaque, quae optio harum dolore, molestiae voluptatibus ducimus impedit numquam, repellat itaque non hic magni!"],
        autoStart: false,
        typeSpeed: 50,


    })





    
    return (
        <div name='about' className='w-full  py-[50px] bg-gradient-to-b from-gray-500 to-black text-white h-fit-content '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col  justify-center w-full '>
                <div className='pb-[15px]'>
                    <p className='text-4xl font-bold inline  border-b-4 border-gray-500'>About</p>
                </div>

                <p id='matn' className='text-xl  mt-[15px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quis!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, debitis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam, doloribus, eum autem minus dolores esse hic, iure quos doloremque nesciunt! Fugiat, alias eum enim tenetur quis voluptatibus quo culpa fuga in voluptate odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dignissimos tenetur, labore aliquam porro aspernatur eligendi beatae atque, iusto inventore tempore, nisi ea quaerat possimus optio alias aperiam ipsam temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, animi!
                </p>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem autem deleniti fuga? Odio magni possimus dolores harum, provident ad nihil nostrum impedit saepe qui magnam quae vel debitis adipisci quos? Illum dolores sint iste vel cum libero! Debitis, modi magni! Cumque quibusdam magnam nisi, molestias delectus vel corporis voluptates ad.</p>
                <br />

            </div>
        </div>
    )
}

export default About