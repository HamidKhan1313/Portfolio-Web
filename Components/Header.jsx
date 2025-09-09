import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className='w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center
        gap-4'>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image src={assets.profile_img} alt='' className='rounded-full w-40  mt-40  mr-20' />
            </motion.div>
            < motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex items-end gap-5 text-xl md:text-3xl  mb-3  font-Ovo' >
                Hi! I'm Hamid Khan   <Image src={assets.hand_icon} alt='' className=' w-10' />
            </motion.h3>

            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}

                className='text-3x1 sm:text-6xl lg:text-[68px] mb-2 font-ovo'>
                Frontend web developer based in Pakistan
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}

                className='max-w-3xl mx-auto font-Ovo '>
                I am a frontend developer from Abbottabad, Pakistan with 2 month of Intership experence in a
                company DevDiligent.
            </motion.p>
            <div className=' w-full max-w-3xl text-center mx-auto h-screen flex flex-col
            items-center justify-center gap-4'>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}

                    href=" #contact"
                    className='px-6 py-3   border border-white rounded-full bg-black
           text-white  flex items-center gap-2  mr-15'
                >contact me  <Image src={assets.right_arrow_white}
                    alt='' className='w-4 ' /></motion.a>

                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}

                    href="/sample-resume.pdf" download
                    className='px-6 py-3   border rounded-full border-gray-500 flex 
            items-center gap-5 mr-15  '>
                    my resume <Image src={assets.download_icon}
                        alt='' className='w-4' /></motion.a>

            </div>
        </div>
    )
}

export default Header
