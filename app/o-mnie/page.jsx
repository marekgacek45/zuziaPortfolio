'use client'

import React from 'react'
import Link from 'next/link'


import { motion } from 'framer-motion'
import { transition } from '../transition'

import Footer from '../components/Footer'

export default function About() {

	return (
		<>
			<motion.main
			 
				initial={{ opacity: 0,  }}
				animate={{ opacity: 1,  }}
				exit={{ opacity: 0,  }}
				transition={transition}
				className=''>
				{/* container */}
				<div className='flex flex-col justify-center items-center pt-[120px] md:pt-[150px] gap-24  max-w-screen-xl mx-auto px-10'>
					{/* FIRST */}
					<div className='about-box '>
						{/* text */}
						<motion.div
							initial={{ opacity: 0, y:'-80%' }}
							animate={{ opacity: 1,y:0 }}
							exit={{ opacity: 0,y:'-80%' }}
							transition={transition}
						className='about-box-text order-1 md:order-none '>
							<h2 className=' heading'>O mnie</h2>
							<div className='space-y-6 max-w-sm'>
								<p className='text-2xl '>
									Hej! Mam na imię Zuzanna <br></br>
								</p>
								<p>
									Zakochuję się w fotografii już od najmłodszych lat łącząc piękno świata z moim własnym osobistym
									filtrem na otoczenie. <strong className='font-semibold'>Eksperymentuję z różnymi stylami</strong> i
									gatunkami w fotografii.
								</p>
								<p>
									Na swoim Instagramie prezentuję{' '}
									<strong className='font-semibold'>charakteryzującą mnie różnorodność</strong> przez autoportrety,
									sesje wizerunkowe, fotografię kulinarną, uliczną jak i produktową.<br></br> Nie zamykam się na żaden z
									tych obszarów, jestem otwarta na nowe.
								</p>
							</div>
						</motion.div>

						{/* img */}
						<motion.div initial={{ scale: .5 }}
				animate={{ scale: 1 }}
				exit={{ scale: 0 }}
				transition={transition} className='md:w-1/2 max-h-[600px]'>
							<img src='/img/home.jpg' alt='' className='about-box-img' />
						</motion.div>
					</div>
					{/* SECOND */}
					<div className='about-box '>
						{/* img */}
						<motion.div initial={{ scale: .5 }}
				animate={{ scale: 1 }}
				exit={{ scale: 0 }}
				transition={transition}  className='md:w-1/2 max-h-[600px] '>
							<img src='/img/home.jpg' alt='' className='about-box-img' />
						</motion.div>
						{/* text */}
						<div className='about-box-text '>
							<div className='space-y-6 max-w-sm'>
								<p>
									Lubię uwydatniać emocje i historię płynącą z każdego człowieka, z każdej chwili, gry światła czy
									ruchu.
									<br />
									Niezależnie od tego, czego potrzebujesz lub oczekujesz postaram się{' '}
									<strong className='font-semibold'>maksymalnie wykorzystać potencjał</strong> moich zdolności i
									kreatywności.
								</p>

								<p>
									Uważam, że nie ma czegoś takiego jak &quotnie fotogeniczność&quot i staram się to udowadniać tworząc
									portrety, w których <strong className='font-semibold'>skupiam się na pięknie każdego z nas.</strong>
								</p>
							</div>

							<Link href='/portfolio' className='btn mt-12'>
								Portfolio{' '}
							</Link>
						</div>
					</div>
				</div>
			</motion.main>
			<Footer />
		</>
	)
}
