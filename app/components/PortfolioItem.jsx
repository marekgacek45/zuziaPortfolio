import Link from 'next/link'

export default function PortfolioItem({href,imgAttributes,title}) {
  return (
  

    <Link href='{href' className='flex gap-6 group w-[275px] xs:w-[300px] mobile:w-[400px] sm:w-[450px]  md:w-[600px] lg:w-auto'>
    <div className='w-[150px] mobile:w-[225px] md:w-[300px] lg:w-[200px] xl:w-[225px] h-[150px] mobile:h-[250px] md:h-[300px] lg:h-[200px] xl:h-[250px] object-cover overflow-hidden'>
        <img {...imgAttributes} className='w-full h-full group-hover:scale-110 duration-500' />
    </div>
    <h3 className='text-xl mobile:text-3xl md:text-5xl lg:text-3xl xl:text-4xl mt-4 group-hover:translate-y-20 duration-500'>{title}</h3>
</Link>
  
  )
}
