'use client'
import { motion } from 'motion/react'

export const Animation = ({ children }) => {
  return (
    <motion.section
      className='relative z-50'
      initial={{ opacity: .7, scale: .9}}
      whileInView={{ opacity: 1, scale: 1.0 }}
      viewport={{ amount: 0.1, once: true }}
      transition={{ duration: 0.4, once: true }}
    >
      {children}
    </motion.section>
  )
}
