import Link from 'next/link'

import PortfolioGallery from '../../../components/PortfolioGallery'
import PortfolioGalleryItem from '../../../components/PortfolioGalleryItem'
import PortfolioOtherPages from '../../../components/PortfolioOtherPages'
import PortfolioOtherPagesItem from '../../../components/PortfolioOtherPagesItem'
import Footer from '../../../components/Footer'

export default function Culinary() {
	

	return (
		<>
			<main className='main '>
				<PortfolioGallery bgi="bg-[url('/img/kulinarna/kulinarna-5.webp')]">
					{{
						heading: (
							<>
								ku
								<br />
								li <br />
								nar <br />
								na
							</>
						),
						gallery: (
							<>
								<PortfolioGalleryItem
									imgThumb={'/img/kulinarna/kulinarna-1--thumb.webp'}
									imgBig={'/img/kulinarna/kulinarna-1.webp'}
									alt={'artystyczne zdjęcie makaronu autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/kulinarna/kulinarna-2--thumb.webp'}
									imgBig={'/img/kulinarna/kulinarna-2.webp'}
									alt={'artystyczne zdjęcie fig autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/kulinarna/kulinarna-3--thumb.webp'}
									imgBig={'/img/kulinarna/kulinarna-3.webp'}
									alt={'artystyczne zdjęcie makaronu autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/kulinarna/kulinarna-4--thumb.webp'}
									imgBig={'/img/kulinarna/kulinarna-4.webp'}
									alt={'artystyczne zdjęcie soku autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/kulinarna/kulinarna-5--thumb.webp'}
									imgBig={'/img/kulinarna/kulinarna-7.webp'}
									alt={'artystyczne zdjęcie croissantów autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/kulinarna/kulinarna-6--thumb.webp'}
									imgBig={'/img/kulinarna/kulinarna-6.webp'}
									alt={'artystyczne zdjęcie croissantów maczanych w kawie autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/kulinarna/kulinarna-7--thumb.webp'}
									imgBig={'/img/kulinarna/kulinarna-7.webp'}
									alt={'artystyczne zdjęcie croissantów  autorstwa Zuzanna Matyja'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/kulinarna/kulinarna-8--thumb.webp'}
									imgBig={'/img/kulinarna/kulinarna-8.webp'}
									alt={'artystyczne zdjęcie jabłek autorstwa Zuzanna Matyja'}
								/>
							</>
						),
					}}
				</PortfolioGallery>
<PortfolioOtherPages>
	<PortfolioOtherPagesItem href={'/portfolio/fotografia/produktowa'} src={'/img/home.jpg'} alt={'opis'} title={'Fotografia Produktowa'}/>
	<PortfolioOtherPagesItem href={'/portfolio/fotografia/uliczna'} src={'/img/home.jpg'} alt={'opis'} title={'Fotografia Uliczna'}/>
	<PortfolioOtherPagesItem href={'/portfolio/fotografia/reportazowa'} src={'/img/home.jpg'} alt={'opis'} title={'Fotografia Reportażowa'}/>
	<PortfolioOtherPagesItem href={'/portfolio/fotografia/wizerunkowa'} src={'/img/home.jpg'} alt={'opis'} title={'Fotografia Wizerunkowa'}/>
</PortfolioOtherPages>
				
			</main>
			<Footer />
		</>
	)
}

