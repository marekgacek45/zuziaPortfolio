import Link from 'next/link'

import Footer from '../components/Footer'

export default function PrivacyPolicy() {
	return (
		<>
			<main className='main  px-10 xl:px-0 flex flex-col max-w-screen-lg mx-auto gap-12 text-left'>
				<h2 className='text-3xl md:text-5xl md:mt-24 2xl:mt-0 text-center'>Polityka Prywatności</h2>

				<p>
					Niniejsza Polityka Prywatności opisuje nasze zasady i procedury dotyczące zbierania, wykorzystywania i
					ujawniania Twoich informacji, gdy korzystasz z tej srtony. Zobowiązujemy się do ochrony Twojej prywatności i
					Twoich danych osobowych.
				</p>
				<div className='space-y-3'>
					<h3 className='text-lg font-semibold'>Zbieranie i Użytkowanie Informacji</h3>
					<p>
						Podczas korzystania z naszej strony możemy prosić Cię o podanie pewnych informacji osobistych, które mogą
						być wykorzystane do kontaktu lub identyfikacji Ciebie. Informacje te obejmują, ale nie ograniczają się do:
					</p>
					<ul className='list-disc list-inside '>
						<li>Adres e-mail (w przypadku korzystania z formularza kontaktowego)</li>
					</ul>
				</div>

				<div className='space-y-3'>
					<h3 className='text-lg font-semibold'>Czcionki Google</h3>
					<p>
						Do poprawy wyglądu naszej strony internetowej korzystamy z czcionek Google Fonts. Korzystając z Google
						Fonts, mogą być przesyłane dane, takie jak adres IP, do serwerów Google. Nie mamy kontroli nad tym, jak
						Google gromadzi i wykorzystuje dane przesyłane w ten sposób.
					</p>
				</div>

				<div className='space-y-3'>
					<h3 className='text-lg font-semibold'>Bezpieczeństwo</h3>
					<p>
						Bezpieczeństwo Twoich danych jest dla nas ważne, ale pamiętaj, że żadna metoda transmisji przez Internet lub
						metoda przechowywania elektronicznego nie jest w 100% bezpieczna. Chociaż dążymy do używania komercyjnie
						akceptowalnych środków ochrony Twoich danych osobowych, nie możemy zagwarantować ich absolutnego
						bezpieczeństwa.
					</p>
				</div>
				<div className='space-y-3'>
					<h3 className='text-lg font-semibold'>Zmiany w Polityce Prywatności</h3>
					<p>
						Możemy aktualizować naszą Politykę Prywatności od czasu do czasu. Powiadomimy Cię o wszelkich zmianach,
						publikując nową Politykę Prywatności na tej stronie. Zalecamy regularne odwiedzanie tej sekcji, aby być na
						bieżąco z wszelkimi zmianami.
					</p>
				</div>
				<div className='space-y-3'>
					<h3 className='text-lg font-semibold'>Kontakt z nami</h3>
					<p>
						Jeśli masz jakiekolwiek pytania dotyczące tej Polityki Prywatności, prosimy o kontakt za pomocą formularza
						na naszej stronie.
					</p>
				</div>
			</main>
			<Footer />
		</>
	)
}
