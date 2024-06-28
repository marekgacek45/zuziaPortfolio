import Link from 'next/link'

import PortfolioGallery from '../../../components/PortfolioGallery'
import PortfolioGalleryItem from '../../../components/PortfolioGalleryItem'
import PortfolioOtherPages from '../../../components/PortfolioOtherPages'
import PortfolioOtherPagesItem from '../../../components/PortfolioOtherPagesItem'
import Footer from '../../../components/Footer'

export default function Reportage() {
	return (
		<>
			<main className='main '>
				<PortfolioGallery bgi="bg-[url('/img/reportazowa/reportazowa-1.webp')]">
					{{
						heading: (
							<>
								re
								<br />
								por <br />
								ta <br />
								żo <br />
								wa
							</>
						),
						gallery: (
							<>
								{' '}
								<PortfolioGalleryItem
									imgThumb={'/img/reportazowa/reportazowa-1--thumb.webp'}
									imgBig={'/img/reportazowa/reportazowa-1.webp'}
									alt={'zdjęcie przedstawiające fotografię reportażową autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/reportazowa/reportazowa-2--thumb.webp'}
									imgBig={'/img/reportazowa/reportazowa-2.webp'}
									alt={'zdjęcie przedstawiające fotografię reportażową autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/reportazowa/reportazowa-3--thumb.webp'}
									imgBig={'/img/reportazowa/reportazowa-3.webp'}
									alt={'zdjęcie przedstawiające fotografię reportażową autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/reportazowa/reportazowa-4--thumb.webp'}
									imgBig={'/img/reportazowa/reportazowa-4.webp'}
									alt={'zdjęcie przedstawiające fotografię reportażową autorstwa Zuzanna Matyja'}
								/>
							</>
						),
					}}
				</PortfolioGallery>
				<PortfolioOtherPages>
					<PortfolioOtherPagesItem
						href={'/portfolio/fotografia/produktowa'}
						src={'/img/produktowa/produktowa-2--thumb.webp'}
						alt={'zdjęcie przedstawiające fotografię produktową autorstwa Zuzanna Matyja'}
						title={'Fotografia Produktowa'}
					/>
					<PortfolioOtherPagesItem
						href={'/portfolio/fotografia/kulinarna'}
						src={'/img/kulinarna/kulinarna-6--thumb.webp'}
						alt={'zdjęcie przedstawiające fotografię kulinarną autorstwa Zuzanna Matyja'}
						title={'Fotografia Kulinarna'}
					/>
					<PortfolioOtherPagesItem
						href={'/portfolio/fotografia/uliczna'}
						src={'/img/uliczna/uliczna-1--thumb.webp'}
						alt={'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja'}
						title={'Fotografia Uliczna'}
					/>

					<PortfolioOtherPagesItem
						href={'/portfolio/fotografia/wizerunkowa'}
						src={'/img/wizerunkowa/wizerunkowa-3--thumb.webp'}
						alt={'zdjęcie przedstawiające fotografię wizerunkową autorstwa Zuzanna Matyja'}
						title={'Fotografia Wizerunkowa'}
					/>
				</PortfolioOtherPages>
			</main>
			<Footer />
		</>
	)
}
