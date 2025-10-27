'use client'

import { motion } from 'framer-motion'
import { Globe, FileText, Github, Linkedin, Instagram, Music, Youtube, Twitter, Facebook } from 'lucide-react'
import type { Project } from '@/lib/data/projectsReal'

interface ProjectSocialLinksProps {
  project: Project
}

export default function ProjectSocialLinks({ project }: ProjectSocialLinksProps) {
  if (!project.links) return null

  const socialLinks = []

  if (project.links.website) {
    socialLinks.push({
      name: 'Website',
      url: project.links.website,
      icon: Globe,
      bgColor: 'bg-gradient-to-r from-blue-600 to-cyan-500'
    })
  }

  if (project.links.blog) {
    socialLinks.push({
      name: 'Blog',
      url: project.links.blog,
      icon: Globe,
      bgColor: 'bg-gradient-to-r from-green-600 to-emerald-500'
    })
  }

  if (project.links.github) {
    socialLinks.push({
      name: 'GitHub',
      url: project.links.github,
      icon: Github,
      bgColor: 'bg-[#181717]'
    })
  }

  if (project.links.linkedin) {
    socialLinks.push({
      name: 'LinkedIn',
      url: project.links.linkedin,
      icon: Linkedin,
      bgColor: 'bg-[#0A66C2]'
    })
  }

  if (project.links.instagram) {
    socialLinks.push({
      name: 'Instagram',
      url: project.links.instagram,
      icon: Instagram,
      bgColor: 'bg-gradient-to-br from-[#405DE6] via-[#E1306C] to-[#FFDC80]'
    })
  }

  if (project.links.tiktok) {
    socialLinks.push({
      name: 'TikTok',
      url: project.links.tiktok,
      icon: Music,
      bgColor: 'bg-[#000000]'
    })
  }

  if (project.links.youtube) {
    socialLinks.push({
      name: 'YouTube',
      url: project.links.youtube,
      icon: Youtube,
      bgColor: 'bg-[#FF0000]'
    })
  }

  if (project.links.twitter) {
    socialLinks.push({
      name: 'X',
      url: project.links.twitter,
      icon: Twitter,
      bgColor: 'bg-[#000000]'
    })
  }

  if (project.links.facebook) {
    socialLinks.push({
      name: 'Facebook',
      url: project.links.facebook,
      icon: Facebook,
      bgColor: 'bg-[#1877F2]'
    })
  }

  if (socialLinks.length === 0) return null

  return (
    <div className="border-t border-gray-200 pt-6 mt-6">
      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">
        Connect
      </h3>
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${link.bgColor}`}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label={link.name}
            >
              <Icon className="w-5 h-5 text-white" />
            </motion.a>
          )
        })}
      </div>
    </div>
  )
}

