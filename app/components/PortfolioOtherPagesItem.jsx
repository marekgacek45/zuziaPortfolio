import Image from "next/image"
import Link
 from "next/link"
 
 
 export default function PortfolioOtherPagesItem({href,src,alt,title}) {
  return (
    <Link  href={href} className='flex flex-col justify-center items-center gap-2'>
    <div className='w-[250px] h-[250px] overflow-hidden'>
        <Image src={src} alt={alt} width={250} height={250} loading="lazy" className='w-full h-full img-hover object-cover' />
    </div>
    <h2 className='text-2xl'>{title}</h2>
</Link>
  )
}
