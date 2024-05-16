'use client'

import { AnimatePresence } from 'framer-motion'
import React from 'react'


export default function Template({ children }) {
	return (
		<AnimatePresence initial={true}  mode='wait'>
			{children}
		
			
		</AnimatePresence>
	)
}

