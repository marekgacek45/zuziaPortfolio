import React from 'react'

export default function PortfolioGalleryItem({imgThumb,imgBig,alt}) {
  return (
    <a href={imgBig} className='h-[327px] overflow-hidden'>
    <img
        src={imgThumb}
        alt={alt}
        width={1}
        height={1}
        className='w-full h-full object-cover img-hover'
    />
</a>

  )
}
