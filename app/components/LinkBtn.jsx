import Link from 'next/link'

export default function LinkBtn({ children, href }) {
	return (
		<Link href={href} className='mt-6 sm:mt-12 py-4 px-12 bg-secondary  font-semibold uppercase text-white hover:bg-gray-700 duration-500'>
			{children}
		</Link>
	)
}
