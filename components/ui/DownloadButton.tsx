'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

interface DownloadButtonProps {
  href: string
  filename: string
  label?: string
}

export default function DownloadButton({ href, filename, label = 'Download Presentation' }: DownloadButtonProps) {
  return (
    <motion.a
      href={href}
      download={filename}
      className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 shadow-lg hover:shadow-xl transition-all duration-200"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Download className="w-5 h-5" />
      <span>{label}</span>
    </motion.a>
  )
}


