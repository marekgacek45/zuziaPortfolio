import Image from "next/image";

export default function PortfolioSection({ children, title, titleSecond }) {
	return (
		<section className='flex flex-col lg:flex-row justify-start items-start gap-8 md:gap-24 xl:gap-32  max-w-screen-xl mx-auto  pr-10 2xl:px-0   '>
			{/* left */}
			<div className='w-full lg:w-1/2 h-[75vh] 2xl:h-[80vh]  relative  lg:sticky lg:top-40'>
				<Image
					src='/img/zuzanna_matyja-portfolio.webp'
					alt='Zuzanna Matyja - fotografia i wideo'
					width={430}
					height={728}
					className=' h-full w-[60%] md:w-[75%] object-cover '
				/>

				<h2
					className='heading--portfolio 
            
            absolute top-1/2  transform -translate-y-1/2 -right-20 md:-right-28  lg:-right-44 -rotate-90 '
					style={{ lineHeight: 0.9 }}>
					{title}
					<br /> <span className='ml-24'>{titleSecond}</span>
				</h2>
			</div>

			{/* right */}

			<div className='w-full lg:w-1/2 h-full overflow-hidden flex flex-col items-center lg:items-start xs:pl-12  gap-12  '>
				{children}
			</div>
		</section>
	)
}
