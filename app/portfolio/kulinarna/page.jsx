'use client'

import React, { useState } from 'react'

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

import Footer from '@/app/components/Footer'

export default function Culinary() {
	const [toggler, setToggler] = useState(false)

	return (
		<>
			<main className=''>
				{/* container */}
				<div className='flex flex-col lg:flex-row justify-center items-center pt-[120px] md:pt-[150px] gap-8 lg:gap-16 xl:gap-32  max-w-screen-2xl mx-auto px-10 lg:h-[90vh] '>
					{/* left */}
					<div className='w-full lg:w-2/5 h-[80vh] lg:h-full relative'>
						<div className="bg-[url('/img/home.jpg')] h-full w-[60%] sm:w-3/4 bg-center bg-fixed bg-cover"></div>
						<h2 className='heading absolute top-1/2  transform -translate-y-1/2 right-20'>
							ku
							<br />
							li <br />
							nar <br />
							na
						</h2>
					</div>

					{/* right */}

					{/* <div className='w-3/5 grid grid-cols-2 gap-4 h-full overflow-hidden'> */}
					<LightGallery
						speed={500}
						plugins={[lgThumbnail, lgZoom]}
						elementClassNames=' w-full lg:w-3/5 grid sm:grid-cols-2 gap-4 h-full '>
						<a href='/img/kulinarna-1.jpg' className='h-[327px] overflow-hidden'>
							<img
								src='/img/kulinarna-1.jpg'
								alt=''
								className='w-full h-full object-cover hover:scale-110 duration-500'
							/>
						</a>
						<a href='/img/kulinarna-2.jpg' className='h-[327px] overflow-hidden'>
							<img
								src='/img/kulinarna-2.jpg'
								alt=''
								className='w-full h-full object-cover hover:scale-110 duration-500'
							/>
						</a>
						<a href='/img/kulinarna-3.jpg' className='h-[327px] overflow-hidden'>
							<img
								src='/img/kulinarna-3.jpg'
								alt=''
								className='w-full h-full object-cover hover:scale-110 duration-500'
							/>
						</a>
						<a href='/img/kulinarna-4.jpg' className='h-[327px] overflow-hidden'>
							<img
								src='/img/kulinarna-4.jpg'
								alt=''
								className='w-full h-full object-cover hover:scale-110 duration-500'
							/>
						</a>
					</LightGallery>
					{/* </div> */}
				</div>
        <section className='pt-20 max-w-screen-lg mx-auto'>
          <h3 className='heading text-center'>Zobacz więcej</h3>

          <div className='grid sm:grid-cols-3 pt-12'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Link href="/portfolio/produktowa" className='w-[250px] h-[250px] overflow-hidden'><img src="/img/home.jpg" alt="" className='w-full h-full hover:scale-110 duration-500 object-cover'/></Link>
              <h2 className='text-2xl'>Fotografia Kulinarna</h2>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Link href="/portfolio/uliczna" className='w-[250px] h-[250px] overflow-hidden'><img src="/img/home.jpg" alt="" className='w-full h-full hover:scale-110 duration-500 object-cover'/></Link>
              <h2 className='text-2xl'>Fotografia Kulinarna</h2>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Link href="/portfolio/reportażowa" className='w-[250px] h-[250px] overflow-hidden'><img src="/img/home.jpg" alt="" className='w-full h-full hover:scale-110 duration-500 object-cover'/></Link>
              <h2 className='text-2xl'>Fotografia Kulinarna</h2>
            </div>
          </div>
        </section>
			</main>
			<Footer />
		</>
	)
}
