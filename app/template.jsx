'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function Template({ children }) {
	return (
		<motion.div
			initial={{  opacity: 0 }}
			animate={{  opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 1.5 }}>
			{children}
		</motion.div>
	)
}
