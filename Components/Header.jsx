import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center
        gap-4
        '>
            <div>
                <Image src={assets.profile_img} alt=''  className='rounded-full w-40  mt-40  mr-20' />
            </div>
            <h3 className='flex items-end gap-5 text-xl md:text-3xl  mb-3  font-Ovo' >
                Hi! I'm Hamid Khan   <Image src={assets.hand_icon} alt='' className=' w-10' /></h3>

            <h1 className='text-3x1 sm:text-6xl lg:text-[68px] mb-2 font-ovo'>
                Frontend web developer based in Pakistan
            </h1>
            <p className='max-w-3xl mx-auto font-Ovo '>
            I am a frontend developer from Abbottabad, Pakistan with 2 month of Intership experence in a 
            company DevDiligent.
            </p>
            <div className=' w-full max-w-3xl text-center mx-auto h-screen flex flex-col
            items-center justify-center gap-4'>
          <a href=" #contact"
           className='px-6 py-3   border border-white rounded-full bg-black
           text-white  flex items-center gap-2  mr-15'
            >contact me  <Image src={assets.right_arrow_white}
          alt='' className='w-4 ' /></a>

            <a href="/sample-resume.pdf" download 
            className='px-6 py-3   border rounded-full border-gray-500 flex 
            items-center gap-5 mr-15  '>
             my resume <Image src={assets.download_icon}
          alt='' className='w-4' /></a>

            </div>
        </div>
    )
}

export default Header
