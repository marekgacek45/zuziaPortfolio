import Link from 'next/link'

// import { motion } from 'framer-motion'
// import { transition } from '../transition'

import AboutSection from '../components/AboutSection'
import LinkBtn from '../components/LinkBtn'
import Footer from '../components/Footer'

export default function About() {
	return (
		<>
			<main className='main'>
				{/* container */}
				<div className='flex flex-col justify-center items-center gap-12  md:gap-24 max-w-screen-xl  mx-auto px-10 '>
					{/* FIRST */}
					<AboutSection
						order={'order-1 md:order-none'}
						imgAttributes={{
							src: '/img/zuzanna_matyja-o_mnie.webp',
							alt: 'Zuzanna Matyja - fotografia i wideo',
							width: 600,
							height: 600,
						}}>
						<h2 className=' heading '>O mnie</h2>
						<div className='space-y-6 max-w-sm'>
							<p className='text-2xl '>
								Hej! Mam na imię Zuzanna <br></br>
							</p>
							<p>
								Zakochuję się w fotografii już od najmłodszych lat łącząc piękno świata z moim własnym osobistym filtrem
								na otoczenie. <strong className='font-semibold'>Eksperymentuję z różnymi stylami</strong> i gatunkami w
								fotografii.
							</p>
							<p>
								Na swoim Instagramie prezentuję{' '}
								<strong className='font-semibold'>charakteryzującą mnie różnorodność</strong> przez autoportrety, sesje
								wizerunkowe, fotografię kulinarną, uliczną jak i produktową.<br></br> Nie zamykam się na żaden z tych
								obszarów, jestem otwarta na nowe.
							</p>
						</div>
					</AboutSection>

					{/* SECOND */}
					<AboutSection
						order={'order-1'}
						imgAttributes={{
							src: '/img/zuzanna_matyja-o_mnie2.webp',
							alt: 'Zuzanna Matyja - fotografia i wideo',
							width: 600,
							height: 600,
						}}>
						<div className='space-y-6 max-w-sm'>
							<p>
								Lubię uwydatniać emocje i historię płynącą z każdego człowieka, z każdej chwili, gry światła czy ruchu.
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

						<LinkBtn href="/portfolio">Portfolio</LinkBtn>
					</AboutSection>
				</div>
			</main>
			<Footer />
		</>
	)
}
