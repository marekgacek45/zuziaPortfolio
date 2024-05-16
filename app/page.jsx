'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { transition } from './transition'

export default function Home() {
	
	return (
		<motion.main
		
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={transition}
			className=' lg:h-screen overflow-hidden'>
			{/* container */}
			<div className='flex flex-col justify-center items-center pt-[110px] lg:pt-0 lg:flex-row mx-auto gap-6 lg:gap-0'>
				{/* text */}
				<div className='w-1/2 xl:w-2/5 flex justify-center'>
					<motion.div 
						initial={{ opacity: 0,y: '-50%' }}
						animate={{ opacity: 1 ,y:0}}
						exit={{ opacity: 0,y: '-50%' }}
						
						transition={transition} className='flex flex-col justify-center items-center lg:items-start'>
						<h2 className='heading'>
							Fotografia <br /> & Wideo
						</h2>
						<p className='text-[26px lg:text-[36px] font-primary mb-4 lg:mb-[12px]'>Lorem, ipsum dolor sit amet</p>
						<Link href='/o-mnie' className='btn mt-6 mb-[30px]'>
							O mnie
						</Link>
					</motion.div>
				</div>
				{/* img */}
				<motion.div
				
				initial={{ scale: .5 }}
				animate={{ scale: 1 }}
				exit={{ scale: 0 }}
				transition={transition}
				className='w-full lg:w-1/2 xl:w-3/5 h-96 lg:h-screen '>
					<motion.img whileHover={{scale:1.05}} transition={transition} src='/img/home.jpg' alt='moje zdjęcie' width={1} height={1} className='w-full h-full xl:h-auto object-cover' />
				</motion.div>
			</div>
		</motion.main>
	)
}
