'use client'

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

// const [toggler, setToggler] = useState(false)

export default function PortfolioGallery({ children, heading, bgi }) {
	return (
		<section className='flex flex-col lg:flex-row justify-center items-center  gap-8 lg:gap-16 2xl:gap-32  max-w-screen-2xl mx-auto   '>
			{/* left */}

			<div className='w-full lg:w-1/2 h-[75vh] 2xl:h-[80vh]  relative  lg:sticky lg:top-32  pr-10 2xl:px-0'>
				<div className="bg-[url('/img/home.jpg')] h-full w-[60%] md:w-[70%] bg-center bg-fixed bg-cover"></div>
				<h2 className='heading--portfolio uppercase absolute top-1/2  transform -translate-y-1/2 right-12 xs:right-16 sm:right-20 lg:right-0'>
					{children.heading}
				</h2>
			</div>

			{/* right */}

			<LightGallery
				speed={500}
				plugins={[lgThumbnail, lgZoom]}
				elementClassNames=' w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full px-6 md:px-12 lg:pr-4 lg:mr-6 lg:pl-0 lg:overflow-y-scroll lg:max-h-[700px]'>
				{children.gallery}
			</LightGallery>
		</section>
	)
}
