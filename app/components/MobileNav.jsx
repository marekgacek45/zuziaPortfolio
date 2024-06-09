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
		<nav className='text-primary xl:hidden '>
			<button onClick={() => setIsOpen(true)} type='button' aria-label='otworz menu' className=' cursor-pointer'>
				<img src='/icons/hamburger.svg' alt='' width={36} height={40} className='w-10 pt-1' />
			</button>
			<motion.div
				variants={menuVariants}
				initial='hidden'
				animate={isOpen ? 'show' : ''}
				className='bg-primary-200 shadow-2xl w-full fixed top-0 right-0  h-screen z-20 flex justify-center items-center'>
				<button
					onClick={() => setIsOpen(false)}
					type='button'
					aria-label='zamknij menu'
					className='text-4xl absolute z-30 right-8 top-8 text-primary cursor-pointer w-6'>
					<img src='/icons/close.svg' alt='' />
				</button>
<div className='flex flex-col justify-center items-center gap-24'>

				<h1 className=' text-4xl'>Zuzanna Matyja</h1>

				<ul className='h-full flex flex-col justify-center items-center gap-y-8  font-bold text-3xl text-black'>
					<li>
						<Link onClick={() => setIsOpen(false)} href='/o-mnie' className='link'>O mnie</Link>
					</li>
					<li>
						<Link onClick={() => setIsOpen(false)} href='/portfolio' className='link'>Portfolio</Link>
					</li>
					<li>
						<Link onClick={() => setIsOpen(false)} href='/kontakt' className='link'>Kontakt</Link>
					</li>
				</ul>

				<ul className='flex gap-x-4'>
				<li>
					<a href='https://www.instagram.com/multi_freak.action' target='_blank' rel='nofollow'>
						<img src='/icons/instagram.svg' alt='logo mojego instagrama' width={20} height={20} className='social-link'/>
					</a>
				</li>
				<li>
					<a href='https://pinterest.com' target='_blank' rel='nofollow'>
						<img src='/icons/pinterest.svg' alt='logo mojego pinteresta' width={20} height={20} className='social-link'/>
					</a>
				</li></ul>
</div>
			</motion.div>
		</nav>
	)
}
