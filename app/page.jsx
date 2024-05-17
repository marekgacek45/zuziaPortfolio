import LinkBtn from './components/LinkBtn'
// import { motion } from 'framer-motion'
// import { transition } from './transition'

export default function Home() {
	return (
		<main className=' md:h-screen overflow-hidden '>
			{/* container */}
			<div className='flex flex-col lg:flex-row justify-center items-center  gap-8 md:gap-24 lg:gap-0 pt-28 md:pt-32 lg:pt-0  mx-auto  '>
				{/* text */}
				<div className='flex justify-center w-1/2 xl:w-2/5 '>
					<div className='flex flex-col justify-center items-center lg:items-start'>
						<h2 className='heading'>
							Fotografia <br /> & Wideo
						</h2>
						<p className='text-center sm:text-left text-xl  lg:text-[36px] '>Lorem, ipsum dolor sit amet</p>

						<LinkBtn href='/o-mnie'>O mnie</LinkBtn>
					</div>
				</div>
				{/* img */}
				<div className='w-full lg:w-1/2 xl:w-3/5 h-96 md:h-screen '>
					<img
						src='/img/home.jpg'
						alt='moje zdjęcie'
						width={1}
						height={1}
						className='w-full h-full xl:h-auto object-cover '
					/>
				</div>
			</div>
		</main>
	)
}
