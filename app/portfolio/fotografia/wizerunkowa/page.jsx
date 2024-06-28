import Link from 'next/link'

import PortfolioGallery from '../../../components/PortfolioGallery'
import PortfolioGalleryItem from '../../../components/PortfolioGalleryItem'
import PortfolioOtherPages from '../../../components/PortfolioOtherPages'
import PortfolioOtherPagesItem from '../../../components/PortfolioOtherPagesItem'
import Footer from '../../../components/Footer'

export default function Image() {
	return (
		<>
			<main className='main '>
				<PortfolioGallery bgi="bg-[url('/img/wizerunkowa/wizerunkowa-1.webp')]">
					{{
						heading: (
							<>
								wi
								<br />
								ze <br />
								run <br />
								ko
								<br />
								wa
							</>
						),
						gallery: (
							<>
								<PortfolioGalleryItem
									imgThumb={'/img/wizerunkowa/wizerunkowa-2--thumb.webp'}
									imgBig={'/img/wizerunkowa/wizerunkowa-2.webp'}
									alt={'zdjęcie przedstawiające fotografię wizerunkową autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/wizerunkowa/wizerunkowa-3--thumb.webp'}
									imgBig={'/img/wizerunkowa/wizerunkowa-3.webp'}
									alt={'zdjęcie przedstawiające fotografię wizerunkową autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/wizerunkowa/wizerunkowa-4--thumb.webp'}
									imgBig={'/img/wizerunkowa/wizerunkowa-4.webp'}
									alt={'zdjęcie przedstawiające fotografię wizerunkową autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/wizerunkowa/wizerunkowa-5--thumb.webp'}
									imgBig={'/img/wizerunkowa/wizerunkowa-7.webp'}
									alt={'zdjęcie przedstawiające fotografię wizerunkową autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/wizerunkowa/wizerunkowa-6--thumb.webp'}
									imgBig={'/img/wizerunkowa/wizerunkowa-6.webp'}
									alt={'artystyczne zdjęcie croissantów maczanych w kawie autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/wizerunkowa/wizerunkowa-7--thumb.webp'}
									imgBig={'/img/wizerunkowa/wizerunkowa-7.webp'}
									alt={'zdjęcie przedstawiające fotografię wizerunkową autorstwa Zuzanna Matyja'}
								/>

								<PortfolioGalleryItem
									imgThumb={'/img/wizerunkowa/wizerunkowa-8--thumb.webp'}
									imgBig={'/img/wizerunkowa/wizerunkowa-8.webp'}
									alt={'zdjęcie przedstawiające fotografię wizerunkową autorstwa Zuzanna Matyja'}
								/>

								<PortfolioGalleryItem
									imgThumb={'/img/wizerunkowa/wizerunkowa-9--thumb.webp'}
									imgBig={'/img/wizerunkowa/wizerunkowa-9.webp'}
									alt={'zdjęcie przedstawiające fotografię wizerunkową autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/wizerunkowa/wizerunkowa-1--thumb.webp'}
									imgBig={'/img/wizerunkowa/wizerunkowa-1.webp'}
									alt={'zdjęcie przedstawiające fotografię wizerunkową autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/wizerunkowa/wizerunkowa-10--thumb.webp'}
									imgBig={'/img/wizerunkowa/wizerunkowa-10.webp'}
									alt={'zdjęcie przedstawiające fotografię wizerunkową autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/wizerunkowa/wizerunkowa-11--thumb.webp'}
									imgBig={'/img/wizerunkowa/wizerunkowa-11.webp'}
									alt={'zdjęcie przedstawiające fotografię wizerunkową autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/wizerunkowa/wizerunkowa-12--thumb.webp'}
									imgBig={'/img/wizerunkowa/wizerunkowa-12.webp'}
									alt={'zdjęcie przedstawiające fotografię wizerunkową autorstwa Zuzanna Matyja'}
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
						href={'/portfolio/fotografia/reportazowa'}
						src={'/img/reportazowa/reportazowa-5--thumb.webp'}
						alt={'zdjęcie przedstawiające fotografię reportażową autorstwa Zuzanna Matyja'}
						title={'Fotografia Reportażowa'}
					/>
				</PortfolioOtherPages>
			</main>
			<Footer />
		</>
	)
}
