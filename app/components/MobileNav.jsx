'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion'

export default function MobileNav() {
	const [isOpen, setIsOpen] = useState(false)

	const menuVariants = {
		hidden: {
			x: '100%',
			opacity: 0,
		},
		show: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				ease: [0.6, 0.01, 0.05, 0.9],
			},
		},
	}

	return (
		<nav className='text-primary xl:hidden'>
			<button onClick={() => setIsOpen(true)} type='button' aria-label='otworz menu' className=' cursor-pointer'>
				<img src='/icons/hamburger.svg' alt='' className='w-10' />
			</button>
			<motion.div
				variants={menuVariants}
				initial='hidden'
				animate={isOpen ? 'show' : ''}
				className='bg-white shadow-2xl w-full absolute top-0 right-0  h-screen z-20'>
				<button
					onClick={() => setIsOpen(false)}
					type='button'
					aria-label='zamknij menu'
					className='text-4xl absolute z-30 right-8 top-8 text-primary cursor-pointer w-6'>
					<img src='/icons/close.svg' alt='' />
				</button>

				<ul className='h-full flex flex-col justify-center items-center gap-y-8  font-bold text-3xl text-black'>
					<li>
						<Link href='/o-mnie'>About</Link>
					</li>
					<li>
						<Link href='/portfolio'>Portfolio</Link>
					</li>
					<li>
						<Link href='/kontakt'>Contact</Link>
					</li>
				</ul>
			</motion.div>
		</nav>
	)
}
