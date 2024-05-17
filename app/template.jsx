'use client'

import { motion } from 'framer-motion'
import {transition} from './transition'

export default function Template({ children }) {
	return (
		<motion.div
			initial={{  opacity: 0 }}
			animate={{  opacity: 1 }}
			exit={{opacity:0}}
			transition={transition}>
			{children}
		</motion.div>
	)
}
