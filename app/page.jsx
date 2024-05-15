import Link from 'next/link'

export default function Home() {
	return (
		<main className=' lg:h-screen overflow-hidden'>
			{/* container */}
			<div className='flex flex-col justify-center items-center pt-[110px] lg:pt-0 lg:flex-row mx-auto gap-6 lg:gap-0'>
				{/* text */}
				<div className='w-1/2 xl:w-2/5 flex justify-center'>
					<div className='flex flex-col justify-center items-center lg:items-start'>
						<h2 className='heading'>
							Fotografia <br /> & Wideo
						</h2>
						<p className='text-[26px lg:text-[36px] font-primary mb-4 lg:mb-[12px]'>Lorem, ipsum dolor sit amet</p>
						<Link href='/o-mnie' className='btn mt-6 mb-[30px]'>
							O mnie
						</Link>
					</div>
				</div>
				{/* img */}
				<div className='w-full lg:w-1/2 xl:w-3/5 h-96 lg:h-screen '>
					<img src='/img/home.jpg' alt=''  className='w-full h-full xl:h-auto object-cover'/>
				</div>
			</div>
		</main>
	)
}
