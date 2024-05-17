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
				<PortfolioGallery bgi={"bg-[url('/img/home.jpg')]"}>
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
									imgThumb={'/img/kulinarna-1.jpg'}
									imgBig={'/img/kulinarna-1.jpg'}
									alt={'zdjęcie makaronu'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/kulinarna-2.jpg'}
									imgBig={'/img/kulinarna-2.jpg'}
									alt={'zdjęcie makaronu'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/kulinarna-3.jpg'}
									imgBig={'/img/kulinarna-3.jpg'}
									alt={'zdjęcie makaronu'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/kulinarna-4.jpg'}
									imgBig={'/img/kulinarna-4.jpg'}
									alt={'zdjęcie makaronu'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/kulinarna-4.jpg'}
									imgBig={'/img/kulinarna-4.jpg'}
									alt={'zdjęcie makaronu'}
								/>
								<PortfolioGalleryItem
									imgThumb={'/img/kulinarna-4.jpg'}
									imgBig={'/img/kulinarna-4.jpg'}
									alt={'zdjęcie makaronu'}
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

