import React from 'react'
import Link from 'next/link'

export default function About() {
	return (
		<main className='main'>
			{/* container */}
			<div className='flex flex-col justify-center items-center pt-[200px] gap-24  max-w-screen-lg mx-auto'>
				{/* FIRST */}
				<div className='flex  justify-center  '>
					{/* text */}
					<div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
						<h2 className='heading'>O mnie</h2>
						<div className='space-y-6 max-w-sm'>
							<p className='text-2xl '>
								Hej! Mam na imię Zuzanna <br></br>
							</p>
							<p>
								Zakochuję się w fotografii już od najmłodszych lat łącząc piękno świata z moim własnym osobistym filtrem
								na otoczenie. <strong className='font-semibold'>Eksperymentuję z różnymi stylami</strong> i gatunkami w fotografii.
							</p>
							<p>
								Na swoim Instagramie prezentuję <strong className='font-semibold'>charakteryzującą mnie różnorodność</strong> przez autoportrety, sesje
								wizerunkowe, fotografię kulinarną, uliczną jak i produktową.<br></br> Nie zamykam się na żaden z tych obszarów,
								jestem otwarta na nowe.
							</p>
						</div>

						
					</div>

					{/* img */}
					<div className='w-1/2 max-h-[500px] '>
						<img src='/img/home.jpg' alt='' className='h-full w-full object-cover' />
					</div>
				</div>
				{/* SECOND */}
				<div className='flex  justify-center '>
					{/* img */}
					<div className='w-1/2 max-h-[500px] '>
						<img src='/img/home.jpg' alt='' className='h-full w-full object-cover' />
					</div>
					{/* text */}
					<div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start ml-24'>
                    <div className='space-y-6 max-w-sm'>
							<p>
                            Lubię uwydatniać emocje i historię płynącą z każdego człowieka, z każdej chwili, gry światła czy ruchu.<br/>
                            Niezależnie od tego, czego potrzebujesz lub oczekujesz postaram się <strong className='font-semibold'>maksymalnie wykorzystać potencjał</strong> moich zdolności i kreatywności.
							</p>
						
							<p>
							Uważam, że nie ma czegoś takiego jak 'nie fotogeniczność' i staram się to udowadniać tworząc portrety, w których <strong className='font-semibold'>skupiam się na pięknie każdego z nas.</strong>
							</p>
						</div>

						<Link href='/portfolio' className='btn mt-12'>
Portfolio						</Link>
					</div>
				</div>
			</div>
		</main>
	)
}
