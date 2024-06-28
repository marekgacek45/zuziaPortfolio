'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Footer from '../components/Footer'


export default function Contact() {
	const [result, setResult] = useState('')
	const [sendingForm, setSendingForm] = useState(false)

	async function handleSubmit(event) {
		event.preventDefault()
		setSendingForm(true)
		setResult('Wysyłam....')
		const formData = new FormData(event.target)

		formData.append('access_key', 'd362bf7b-1ea4-4a1f-86e7-4a76a3c7e7ad')

		const object = Object.fromEntries(formData)
		const json = JSON.stringify(object)

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: json,
		})
		const result = await response.json()
		if (result.success) {
			event.target.reset()
			setSendingForm(true)
			setResult('Dzięki za wiadomość!')
		}
	}

	return (
		<>
			<main className='  md:h-[screen] overflow-hidden '>
				{/* container */}
				<div className='flex flex-col lg:flex-row justify-center items-center  gap-8 md:gap-24 lg:gap-0 pt-28 md:pt-32 lg:pt-0  mx-auto'>
					{/* img */}
					<div className="w-full lg:w-1/2 5 h-96 md:h-screen order-1 lg:order-none bg-[url('/img/zuzanna_matyja-portfolio.webp')] bg-cover bg-center ">
				
					</div>

					{/* text */}
					<div className=' w-full lg:w-1/2  flex justify-center lg:mt-20 px-6 md:px-12 order-1 lg:order-none'>
						<div className='flex flex-col justify-center items-center lg:items-start'>
							<h2 className='heading'>Kontakt</h2>
							<p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-[12px]'>
								Chętnie odpowiem na Twoje pytania
							</p>
							{/* form */}
							<form onSubmit={handleSubmit} className='flex flex-col gap-y-4 2xl:pt-12'>
								<span className={`text-2xl font-bold uppercase ${sendingForm ? '' : 'hidden'}`}>{result}</span>
								<input type='hidden' name='subject' value='Nowa wiadomość ze strony zuzannamatyja.pl' />
								<div className='flex flex-wrap gap-x-10'>
									<input name='name' type='text' placeholder='Imię i nazwisko' required className='form-input ' />
									<input name='email' type='email' placeholder='Email' required className='form-input ' />
								</div>

								<textarea
									name='message'
									required
									className=' mt-10 min-h-[120px] max-h-[120px] form-input'
									placeholder='Twoja wiadomość'></textarea>
								<button
									type='submit'
									disabled={sendingForm}
									className={`mt-6 sm:mt-12 xl:mt-6 py-4 px-12 bg-secondary  font-semibold uppercase text-white  duration-500 self-start ${
										sendingForm ? 'cursor-not-allowed' : 'hover:bg-gray-700'
									} `}>
									Wyślij
								</button>
							</form>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}
