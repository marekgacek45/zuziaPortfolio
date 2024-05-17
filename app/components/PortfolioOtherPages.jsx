import Link
 from "next/link"
export default function PortfolioOtherPages({children}) {
  return (
    <section className='pt-20 max-w-screen-sm xl:max-w-screen-xl mx-auto'>
    <h3 className='text-[50px] sm:text-[54px] md:text-5xl leading-[120%] tracking-[-0.05em] mb-2 text-center'>Zobacz więcej</h3>

    <div className='grid sm:grid-cols-2 xl:grid-cols-4 pt-12 gap-y-8 sm:gap-y-0'>
      {children}
    </div>
</section>
  )
}
