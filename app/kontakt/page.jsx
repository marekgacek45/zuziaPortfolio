'use client'

import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
// npm install react-hook-form @web3forms/react
import { useForm } from 'react-hook-form'
import useWeb3Forms from '@web3forms/react'

export default function Contact() {
	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append("access_key", "2ce45a9e-19e6-4edf-abd9-c3ca8f5dc7f1");

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			  Accept: "application/json"
			},
			body: json
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
		}
	}

	return (
		<main className=' lg:h-screen overflow-hidden'>
			{/* container */}
			<div className='flex flex-col justify-center items-center pt-[110px] lg:pt-0 lg:flex-row mx-auto gap-6 lg:gap-0'>
				{/* text */}
				<div className='w-1/2  flex justify-center mt-24'>
					<div className='flex flex-col justify-center items-center lg:items-start'>
						<h2 className='heading'>Kontakt</h2>
						<p className='text-[26px lg:text-[36px] font-primary mb-4 lg:mb-[12px]'>
							Chętnie odpowiem na Twoje pytania
						</p>

						<form onSubmit={handleSubmit} className='flex flex-col gap-y-4 pt-12'>
							<div className='flex gap-x-10'>
							{/* <input type="hidden" name="subject" value="Nowa wiadomość ze strony zuzannamatyja.pl"/> */}
								<input
									name='name'
									type='text'
									placeholder='Your name'
									required
									className='outline-none border-b border-b-secondary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] '
								/>
								<input
									name='email'
									type='email'
									placeholder='Your email'
									required
									className='outline-none border-b border-b-secondary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] '
								/>
							</div>

							<textarea
								name='message'
								required
								className=' mt-10 outline-none border-b border-b-secondary min-h-[120px] max-h-[120px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
								placeholder='Your message'></textarea>
							<button type='submit' className=' mt-10 btn mb-[30px] mx-auto lg:mx-0 self-start'>
								Wyślij
							</button>
						</form>

						{/* <span>{result}</span> */}
					</div>
				</div>
				{/* img */}
				<div className='w-full lg:w-1/2  h-96 lg:h-screen '>
					<img src='/img/home.jpg' alt='' className='w-full h-full xl:h-auto object-cover' />
				</div>
			</div>
		</main>
	)
}
