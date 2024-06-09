import React from 'react'

export default function Socials() {
	return (
		<div className='hidden xl:flex ml-24'>
			<ul className='flex gap-x-4'>
				<li>
					<a href='https://www.instagram.com/multi_freak.action' target='_blank' rel='nofollow'>
						<img src='/icons/instagram.svg' alt='logo mojego instagrama' width={20} height={20} className='social-link'/>
					</a>
				</li>
				<li>
					<a href='https://pinterest.com' target='_blank' rel='nofollow'>
						<img src='/icons/pinterest.svg' alt='logo mojego pinteresta' width={20} height={20} className='social-link'/>
					</a>
				</li>
			</ul>
		</div>
	)
}
