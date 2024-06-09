import { Montserrat, Prata,Lora } from 'next/font/google'

import './globals.css'
import Header from './components/Header'

const prata = Prata({ subsets: ['latin'], weight: '400' })
const montserrat = Montserrat({ subsets: ['latin'], weight: '300' })
const lora = Lora({ subsets: ['latin'], weight: '400' })

export const metadata = {
	title: 'Zuzanna Matyja - fotografia & wideo',
	description:
		'Odkryj świat widziany przez mój obiektyw: od autoportretów, przez sesje wizerunkowe, po fotografię uliczną i produktową. Historie uchwycone w kadrze, pełne emocji i ruchu.',
}

export default function RootLayout({ children }) {
	return (
		<html lang='pl'>
			<body className={montserrat.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
