

import PortfolioSection from '../components/PortfolioSection'
import PortfolioSectionRight from '../components/PortfolioSectionRight'
import PortfolioItem from '../components/PortfolioItem'

import Footer from '../components/Footer'

export default function Portfolio() {
	return (
		<>
			<main className='main relative'>
				{/* PHOTO */}
				<PortfolioSection title={'Moja'} titleSecond={'Fotografia'}>
					<PortfolioItem
						href={'/portfolio/fotografia/produktowa'}
						imgAttributes={{ src: '/img/produktowa/produktowa-3--thumb.webp', alt: 'zdjęcie przedstawiające fotografię produktową autorstwa Zuzanna Matyja', width: '225', height: '250' }}
						title={'Produktowa'}
					/>
					<PortfolioItem
						href={'/portfolio/fotografia/kulinarna'}
						imgAttributes={{ src: '/img/kulinarna/kulinarna-7--thumb.webp', alt: 'zdjęcie przedstawiające fotografię kulinarną autorstwa Zuzanna Matyja', width: '225', height: '250' }}
						title={'Kulinarna'}
					/>
					<PortfolioItem
						href={'/portfolio/fotografia/uliczna'}
						imgAttributes={{ src: '/img/uliczna/uliczna-13--thumb.webp', alt: 'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja', width: '225', height: '250' }}
						title={'Uliczna '}
					/>
					<PortfolioItem
						href={'/portfolio/fotografia/reportazowa'}
						imgAttributes={{ src: '/img/reportazowa/reportazowa-5.webp', alt: 'zdjęcie przedstawiające fotografię reportażową autorstwa Zuzanna Matyja', width: '225', height: '250' }}
						title={'Reportażowa'}
					/>
					<PortfolioItem
						href={'/portfolio/fotografia/wizerunkowa'}
						imgAttributes={{ src: '/img/wizerunkowa/wizerunkowa-2.webp', alt: 'zdjęcie przedstawiające fotografię wizerunkową autorstwa Zuzanna Matyja', width: '225', height: '250' }}
						title={'Wizerunkowa'}
					/>
				</PortfolioSection>

				{/* WIDEO
			<PortfolioSectionRight title={'Moje'} titleSecond={'Wideo'} className={'mt-32'}>
			<PortfolioItem
						href={'/portfolio/wideo/kulinarne'}
						imgAttributes={{ src: '/img/home.jpg', alt: 'opis', width: '1', height: '1' }}
						title={'Kulinarne'}
					/>
			<PortfolioItem
						href={'/portfolio/wideo/produktowe'}
						imgAttributes={{ src: '/img/home.jpg', alt: 'opis', width: '1', height: '1' }}
						title={'Produktowe'}
					/>
			</PortfolioSectionRight> */}
			</main>
			<Footer />
		</>
	)
}
