import React from 'react'

import Footer from './components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <>
    <main className='main md:h-[88vh] px-10 xl:px-0 flex flex-col justify-center items-center gap-12 text-center'>
        <h2 className='text-5xl md:text-7xl md:mt-24 2xl:mt-0'>Nie znaleziono strony ...</h2>
        <Image src="/img/404.webp" alt="zdjęcie aparatu" className='w-[400px]' width={400} height={350} />
        <Link href={'/'} className='link'>Powrót do strony głównej</Link>
    </main>
    <Footer/>
    </>
  )
}
