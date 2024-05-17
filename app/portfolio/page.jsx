'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import LightGallery from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss'
import 'lightgallery/scss/lg-zoom.scss'

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

import Footer from '../components/Footer'

export default function Portfolio() {
	const [toggler, setToggler] = useState(false)

	return (
		<>
			<main className='relative'>
				{/* container */}
				<div className='flex flex-col lg:flex-row justify-start items-start pt-[100px]  lg:pt-[150px] gap-8 lg:gap-16 xl:gap-32  max-w-screen-xl mx-auto px-10  '>
					{/* left */}
					<div className='w-full lg:w-1/2 h-[650px] relative  lg:sticky lg:top-48'>
						<div className="bg-[url('/img/home.jpg')] h-full w-[60%] sm:w-3/4 bg-center bg-fixed bg-cover"></div>
						<h2
							className='heading absolute top-1/2  transform -translate-y-1/2 right-0 xs:right-5 sm:right-20 lg:-right-32 -rotate-90 '
							style={{ lineHeight: 0.9 }}>
							Moja
							<br /> <span className='ml-12'>Fotografia</span>
						</h2>
					</div>

					{/* right */}

					<div className='lg:w-1/2 h-full overflow-hidden flex flex-col justify-start gap-12'>
            {/* 1 */}
						<Link href='/portfolio/kulinarna' className='flex gap-6 group '>
							<div className='w-[250px] h-[250px] overflow-hidden'>
								<img src='/img/kulinarna-1.jpg' alt='' className='w-full h-full group-hover:scale-110 duration-500' />
							</div>
							<h3 className='text-4xl mt-4 group-hover:translate-y-20 duration-500'>Produktowa</h3>
						</Link>
            {/* 1 */}
						<Link href='/portfolio/kulinarna' className='flex gap-6 group '>
							<div className='w-[250px] h-[250px] overflow-hidden'>
								<img src='/img/kulinarna-1.jpg' alt='' className='w-full h-full group-hover:scale-110 duration-500' />
							</div>
							<h3 className='text-4xl mt-4 group-hover:translate-y-20 duration-500'>Kulinarna</h3>
						</Link>
            {/* 1 */}
						<Link href='/portfolio/kulinarna' className='flex gap-6 group '>
							<div className='w-[250px] h-[250px] overflow-hidden'>
								<img src='/img/kulinarna-1.jpg' alt='' className='w-full h-full group-hover:scale-110 duration-500' />
							</div>
							<h3 className='text-4xl mt-4 group-hover:translate-y-20 duration-500'>Uliczna</h3>
						</Link>
            {/* 1 */}
						<Link href='/portfolio/kulinarna' className='flex gap-6 group '>
							<div className='w-[250px] h-[250px] overflow-hidden'>
								<img src='/img/kulinarna-1.jpg' alt='' className='w-full h-full group-hover:scale-110 duration-500' />
							</div>
							<h3 className='text-4xl mt-4 group-hover:translate-y-20 duration-500'>Reportażowa</h3>
						</Link>
            {/* 1 */}
						<Link href='/portfolio/kulinarna' className='flex gap-6 group '>
							<div className='w-[250px] h-[250px] overflow-hidden'>
								<img src='/img/kulinarna-1.jpg' alt='' className='w-full h-full group-hover:scale-110 duration-500' />
							</div>
							<h3 className='text-4xl mt-4 group-hover:translate-y-20 duration-500'>Wizerunkowa</h3>
						</Link>
					</div>


          
				</div>
        		{/* container */}
				<div className='flex flex-col lg:flex-row justify-start items-start pt-[120px] md:pt-[150px] gap-8 lg:gap-16 xl:gap-32  max-w-screen-xl mx-auto px-10  '>
					{/* left */}
          <div className='w-1/2 h-full overflow-hidden flex flex-col justify-start gap-12'>
            {/* 1 */}
						<Link href='/portfolio/kulinarna' className='flex gap-6 group '>
							<div className='w-[250px] h-[250px] overflow-hidden'>
								<img src='/img/kulinarna-1.jpg' alt='' className='w-full h-full group-hover:scale-110 duration-500' />
							</div>
							<h3 className='text-4xl mt-4 group-hover:translate-y-20 duration-500'>Kulinarne</h3>
						</Link>
            {/* 1 */}
						<Link href='/portfolio/kulinarna' className='flex gap-6 group '>
							<div className='w-[250px] h-[250px] overflow-hidden'>
								<img src='/img/kulinarna-1.jpg' alt='' className='w-full h-full group-hover:scale-110 duration-500' />
							</div>
							<h3 className='text-4xl mt-4 group-hover:translate-y-20 duration-500'>Produktowe</h3>
						</Link>
           
					</div>

					{/* right */}
          <div className='w-full lg:w-1/2 h-[650px]  sticky top-48 flex justify-end'>
						<div className="bg-[url('/img/home.jpg')] h-full w-[60%] sm:w-3/4 bg-center bg-fixed bg-cover relative"></div>
						<h2
							className='heading absolute top-1/2   transform -translate-y-1/2  sm:left-20 lg:-left-20 rotate-90 '
							style={{ lineHeight: 0.9 }}>
							Moje
							<br /> <span className='ml-12'>Wideo</span>
						</h2>
					</div>
					


          
				</div>
			</main>
			<Footer />
		</>
	)
}
