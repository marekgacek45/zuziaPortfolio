import Link from 'next/link'

export default function PortfolioSectionRight({ children, className,title,titleSecond }) {
	return (
		<section
			className={`flex flex-col lg:flex-row justify-start items-start gap-8 md:gap-24 xl:gap-32  max-w-screen-xl mx-auto  pl-10 2xl:px-0 ${className}`}>
			<div className='w-full lg:w-1/2 h-full overflow-hidden flex flex-col items-center lg:items-start xs:pl-12  gap-12  order-1 lg:order-none'>
				{children}
			</div>

			<div className='w-full lg:w-1/2 h-[75vh] 2xl:h-[80vh]  relative  lg:sticky lg:top-40 flex justify-end'>
				<div className="bg-[url('/img/home.jpg')] h-full w-[60%] md:w-[70%] bg-center bg-fixed bg-cover"></div>
				<h2
					className='heading--portfolio
            
            absolute top-1/2  transform -translate-y-1/2 -left-20 xs:-left-12 md:-left-16  lg:-left-28 rotate-90 '
					style={{ lineHeight: 0.9 }}>
					{title}
					<br /> <span className='ml-24'>{titleSecond}</span>
				</h2>
			</div>
		</section>
	)
}
