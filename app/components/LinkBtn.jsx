import Link from 'next/link'

export default function LinkBtn({ children, linkAttributes }) {
	return (
		<Link {...linkAttributes} className='mt-12 py-4 px-12 bg-secondary  font-semibold uppercase text-white hover:bg-gray-700 duration-500'>
			{children}
		</Link>
	)
}
