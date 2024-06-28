import Image from 'next/image'
import React from 'react'

export default function PortfolioGalleryItem({imgThumb,imgBig,alt}) {
  return (
    <a href={imgBig} className='h-[327px] overflow-hidden'>
    <Image
        src={imgThumb}
        alt={alt}
        width={354}
        height={327}
        className='w-full h-full object-cover img-hover'
    />
</a>

  )
}
