import Link from 'next/link'

import PortfolioGallery from '../../../components/PortfolioGallery'
import PortfolioGalleryItem from '../../../components/PortfolioGalleryItem'
import PortfolioOtherPages from '../../../components/PortfolioOtherPages'
import PortfolioOtherPagesItem from '../../../components/PortfolioOtherPagesItem'
import Footer from '../../../components/Footer'

export default function Street() {
	return (
		<>
			<main className='main '>
				<PortfolioGallery bgi="bg-[url('/img/uliczna/uliczna-10.webp')]">
					{{
						heading: (
							<>
								u
								<br />
								licz <br />
								na <br />
							</>
						),
						gallery: (
							<>
								<PortfolioGalleryItem
									imgThumb={'/img/uliczna/uliczna-1--thumb.webp'}
									imgBig={'/img/uliczna/uliczna-1.webp'}
									alt={'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/uliczna/uliczna-2--thumb.webp'}
									imgBig={'/img/uliczna/uliczna-2.webp'}
									alt={'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/uliczna/uliczna-3--thumb.webp'}
									imgBig={'/img/uliczna/uliczna-3.webp'}
									alt={'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/uliczna/uliczna-4--thumb.webp'}
									imgBig={'/img/uliczna/uliczna-4.webp'}
									alt={'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/uliczna/uliczna-5--thumb.webp'}
									imgBig={'/img/uliczna/uliczna-5.webp'}
									alt={'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/uliczna/uliczna-6--thumb.webp'}
									imgBig={'/img/uliczna/uliczna-6.webp'}
									alt={'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/uliczna/uliczna-7--thumb.webp'}
									imgBig={'/img/uliczna/uliczna-7.webp'}
									alt={'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/uliczna/uliczna-8--thumb.webp'}
									imgBig={'/img/uliczna/uliczna-8.webp'}
									alt={'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/uliczna/uliczna-9--thumb.webp'}
									imgBig={'/img/uliczna/uliczna-9.webp'}
									alt={'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/uliczna/uliczna-10--thumb.webp'}
									imgBig={'/img/uliczna/uliczna-10.webp'}
									alt={'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/uliczna/uliczna-11--thumb.webp'}
									imgBig={'/img/uliczna/uliczna-11.webp'}
									alt={'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/uliczna/uliczna-12--thumb.webp'}
									imgBig={'/img/uliczna/uliczna-12.webp'}
									alt={'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/uliczna/uliczna-13--thumb.webp'}
									imgBig={'/img/uliczna/uliczna-13.webp'}
									alt={'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/uliczna/uliczna-14--thumb.webp'}
									imgBig={'/img/uliczna/uliczna-14.webp'}
									alt={'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/uliczna/uliczna-15--thumb.webp'}
									imgBig={'/img/uliczna/uliczna-15.webp'}
									alt={'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja'}
								/>
							</>
						),
					}}
				</PortfolioGallery>
				<PortfolioOtherPages>
				<PortfolioOtherPagesItem
						href={'/portfolio/fotografia/produktowa'}
						src={'/img/produktowa/produktowa-1--thumb.webp'}
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
						href={'/portfolio/fotografia/reportazowa'}
						src={'/img/reportazowa/reportazowa-5--thumb.webp'}
						alt={'zdjęcie przedstawiające fotografię reportażową autorstwa Zuzanna Matyja'}
						title={'Fotografia Reportażowa'}
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
