export default function Container({ children, order, imgAttributes }) {
	return (
		<section className='flex flex-col md:flex-row justify-center gap-12 lg:gap-6 '>
			{/* text */}
			<div
				className={`flex-1 md:w-auto lg:ml-10 xl:ml-20  flex flex-col justify-center items-start   z-10 ${order}`}>
				{children}
			</div>

			{/* img */}
			<div className='md:w-1/2 max-h-[600px] overflow-hidden'>
				<img {...imgAttributes} className='max-h-[500px] md:max-h-full w-full object-cover img-hover' />
			</div>
		</section>
	)
}
