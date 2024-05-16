import React from 'react'
import Link from 'next/link'

export default function Contact() {
  return (
    <main className=' lg:h-screen overflow-hidden'>
			{/* container */}
			<div className='flex flex-col justify-center items-center pt-[110px] lg:pt-0 lg:flex-row mx-auto gap-6 lg:gap-0'>
				{/* text */}
				<div className='w-1/2  flex justify-center mt-24'>
					<div className='flex flex-col justify-center items-center lg:items-start'>
						<h2 className='heading'>
							Kontakt
						</h2>
						<p className='text-[26px lg:text-[36px] font-primary mb-4 lg:mb-[12px]'>Chętnie odpowiem na Twoje pytania</p>
						<form className="flex flex-col gap-y-4 pt-12" >
  <div  className='flex gap-x-10'>
    <input type="text" placeholder='Your name' className='outline-none border-b border-b-secondary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] ' />
    <input type="email" placeholder='Your email' className='outline-none border-b border-b-secondary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] ' />
  </div>

    <textarea className=' mt-10 outline-none border-b border-b-secondary min-h-[120px] max-h-[120px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' placeholder='Your message'></textarea>
</form>
    <button type='submit' className=' mt-10 btn mb-[30px] mx-auto lg:mx-0 self-start'>Wyślij</button>

					</div>
				</div>
				{/* img */}
				<div className='w-full lg:w-1/2  h-96 lg:h-screen '>
					<img src='/img/home.jpg' alt=''  className='w-full h-full xl:h-auto object-cover'/>
				</div>
			</div>
		</main>
  )
}
