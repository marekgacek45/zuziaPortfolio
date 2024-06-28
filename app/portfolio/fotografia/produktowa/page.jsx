import Link from 'next/link'

import PortfolioGallery from '../../../components/PortfolioGallery'
import PortfolioGalleryItem from '../../../components/PortfolioGalleryItem'
import PortfolioOtherPages from '../../../components/PortfolioOtherPages'
import PortfolioOtherPagesItem from '../../../components/PortfolioOtherPagesItem'
import Footer from '../../../components/Footer'

export default function Product() {
	

	return (
		<>
			<main className='main '>
				<PortfolioGallery bgi="bg-[url('/img/produktowa/produktowa-4.webp')]">
					{{
						heading: (
							<>
								pro
								<br />
								duk <br />
								to <br />
								wa
							</>
						),
						gallery: (
							<>
								<PortfolioGalleryItem
									imgThumb={'/img/produktowa/produktowa-1--thumb.webp'}
									imgBig={'/img/produktowa/produktowa-1.webp'}
									alt={'zdjęcie przedstawiające fotografię produktową autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/produktowa/produktowa-2--thumb.webp'}
									imgBig={'/img/produktowa/produktowa-2.webp'}
									alt={'zdjęcie przedstawiające fotografię produktową autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/produktowa/produktowa-3--thumb.webp'}
									imgBig={'/img/produktowa/produktowa-3.webp'}
									alt={'zdjęcie przedstawiające fotografię produktową autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/produktowa/produktowa-4--thumb.webp'}
									imgBig={'/img/produktowa/produktowa-4.webp'}
									alt={'zdjęcie przedstawiające fotografię produktową autorstwa Zuzanna Matyja'}
								/>
							</>
						),
					}}
				</PortfolioGallery>
<PortfolioOtherPages>
	<PortfolioOtherPagesItem href={'/portfolio/fotografia/kulinarna'} src={'/img/kulinarna/kulinarna-6--thumb.webp'} alt={'zdjęcie przedstawiające fotografię kulinarną autorstwa Zuzanna Matyja'} title={'Fotografia Kulinarna'}/>
	<PortfolioOtherPagesItem href={'/portfolio/fotografia/uliczna'} src={'/img/uliczna/uliczna-1--thumb.webp'} alt={'zdjęcie przedstawiające fotografię uliczną autorstwa Zuzanna Matyja'} title={'Fotografia Uliczna'}/>
	<PortfolioOtherPagesItem href={'/portfolio/fotografia/reportazowa'} src={'/img/reportazowa/reportazowa-5--thumb.webp'} alt={'zdjęcie przedstawiające fotografię reportażową autorstwa Zuzanna Matyja'} title={'Fotografia Reportażowa'}/>
	<PortfolioOtherPagesItem href={'/portfolio/fotografia/wizerunkowa'} src={'/img/wizerunkowa/wizerunkowa-3--thumb.webp'} alt={'zdjęcie przedstawiające fotografię wizerunkową autorstwa Zuzanna Matyja'} title={'Fotografia Wizerunkowa'}/>
</PortfolioOtherPages>
				
			</main>
			<Footer />
		</>
	)
}

