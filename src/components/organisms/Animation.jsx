'use client'
import { motion } from 'motion/react'

export const Animation = ({ children }) => {
  return (
    <motion.section
      className='relative z-50 w-full'
      initial={{ opacity: .3}}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.4}}
    >
      {children}
    </motion.section>
  )
}
