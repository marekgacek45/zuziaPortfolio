import Image from 'next/image'
import Footer from './components/Footer'
import LinkBtn from './components/LinkBtn'
// import { motion } from 'framer-motion'
// import { transition } from './transition'

export default function Home() {
	return (
		<>
		<main className=' md:h-screen overflow-hidden '>
			{/* container */}
			<div className='flex flex-col md:flex-row justify-center items-center  gap-8 lg:gap-0  mx-auto pt-28 sm:pt-32 md:pt-0   '>
				{/* text */}
				<div className='flex justify-center xl:justify-start w-1/2 xl:w-2/5  mb-12 md:mb-0  order-1 md:order-none'>
					<div className='flex flex-col justify-center items-center lg:items-start gap-3'>
						<h2 className='heading'>
							Fotografia <br /> & Wideo
						</h2>
						<p className='text-center sm:text-left text-xl  lg:text-[42px] font-third'>Coś więcej niż zdjęcia i filmy</p>

						<LinkBtn href='/o-mnie'>O mnie</LinkBtn>
					</div>
				</div>
				
				{/* img */}
				<div className='w-full md:w-1/2 2xl:w-2/5 h-96 md:h-screen  px-6 md:px-0'>
					{/* mobile */}
					<Image
						src='/img/zuzanna_matyja-home--mobile.webp'
						alt='Zuzanna Matyja - fotografia i wideo'
						width={662}
						height={384}
						className='w-full h-full object-contain  md:object-cover  md:hidden'
					/>
					{/* desktop */}
					<Image
						src='/img/zuzanna_matyja-home.webp'
						alt='Zuzanna Matyja - fotografia i wideo'
						width={667}
						height={911}
						className='w-full h-full object-contain  md:object-cover hidden md:block'
					/>
				</div>
			</div>
		</main>
		<Footer className={'md:hidden'}/>
		</>
	)
}
