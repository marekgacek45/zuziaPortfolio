"use client"

import React,{useEffect,useState} from 'react'
import Link from 'next/link'

import Socials from './Socials'
import MobileNav from './MobileNav'

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
		  if (window.scrollY > 100) {
			setIsScrolled(true);
		  } else {
			setIsScrolled(false);
		  }
		};
	
		window.addEventListener('scroll', handleScroll);
	
		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	  }, []);

	return (
		<header className={`fixed w-full px-4 xs:px-6 md:px-12 lg:px-24 z-50 py-6 flex items-center transition-colors duration-500 ${isScrolled ? 'bg-primary-100' : ''}`}>
			<div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
				<Link href='/'>
					<h1 className=' text-4xl'>Zuzanna Matyja</h1>
				</Link>
				<nav className='hidden xl:flex gap-12 font-semibold'>
			
					<Link href='/o-mnie' className='link'>
						O mnie
					</Link>
					<Link href='/portfolio' className='link'>
						Portfolio
					</Link>
					<Link href='/kontakt' className='link'>
						Kontakt
					</Link>
				</nav>
			</div>
			<Socials />
            <MobileNav/>
		</header>
	)
}
