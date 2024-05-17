import { Titillium_Web, Old_Standard_TT } from 'next/font/google'

import './globals.css'
import Header from './components/Header'

const oldStandard = Old_Standard_TT({ subsets: ['latin'], weight: '400' })
const titilliumWeb = Titillium_Web({ subsets: ['latin'], weight: '300' })

export const metadata = {
	title: 'Zuzanna Matyja - fotografia & wideo',
	description:
		'Odkryj świat widziany przez mój obiektyw: od autoportretów, przez sesje wizerunkowe, po fotografię uliczną i produktową. Historie uchwycone w kadrze, pełne emocji i ruchu.',
}

export default function RootLayout({ children }) {
	return (
		<html lang='pl'>
			<body className={titilliumWeb.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
