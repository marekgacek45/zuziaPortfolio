import React from 'react'
import Link from 'next/link'

export default function Footer({className}) {

const currentYear = new Date().getFullYear()

  return (
    <footer className={`md:px-12  py-10  bg-primary-100 ${className} `}>
<div className='flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center max-w-screen-xl mx-auto'>

        <div>
        © <span>{currentYear}</span> Zuzanna Matyja
        </div>
        
        <Link href='/polityka-prywatnosci' className='text-xs link'>Polityka Prywatności</Link>
<div>
   created by <a href="https://marekgacekdev.pl" target='_blank' className='link'>Marek Gacek</a>
</div>
</div>
    </footer>
  )
}
