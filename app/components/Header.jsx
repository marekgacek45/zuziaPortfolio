import React from 'react'
import Link from 'next/link'

import Socials from './Socials'
import MobileNav from './MobileNav'

export default function Header() {
	return (
		<header className=' fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center bg-primary lg:bg-transparent'>
			<div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
				<Link href='/'>
					<h1 className=' text-4xl'>Zuzanna Matyja</h1>
				</Link>
				<nav className='hidden xl:flex gap-12 font-semibold'>
			
					<Link href='/o-mnie' className='nav-link'>
						O mnie
					</Link>
					<Link href='/portfolio' className='nav-link'>
						Portfolio
					</Link>
					<Link href='/kontakt' className='nav-link'>
						Kontakt
					</Link>
				</nav>
			</div>
			<Socials />
            <MobileNav/>
		</header>
	)
}
