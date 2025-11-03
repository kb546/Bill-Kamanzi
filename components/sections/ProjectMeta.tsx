'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Award } from 'lucide-react'
import type { Project } from '@/lib/data/projectsReal'
import ProjectSocialLinks from './ProjectSocialLinks'
import DownloadButton from '@/components/ui/DownloadButton'

interface ProjectMetaProps {
  project: Project
}

export default function ProjectMeta({ project }: ProjectMetaProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="glass-card p-8 rounded-3xl space-y-6 sticky top-24"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6 }}
    >
      {/* Project Logo - Enlarged */}
      {project.logo && (
        <div className="w-32 h-32 relative mx-auto">
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
      )}

      {/* Quackr-LTV Context Note */}
      {project.slug === 'quackr' && (
        <div className="mt-6 p-4 bg-primary-50 border-l-4 border-primary-500 rounded-lg">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-primary-700">Note:</strong> Quackr is a SaaS product owned by Long Tail Ventures, 
            where I currently work as Performance Content Marketer. This project was part of 
            my role in launching and scaling the product's market presence.
          </p>
        </div>
      )}

      {/* Download Button */}
      {project.downloadLink && (
        <div className="flex justify-center">
          <DownloadButton
            href={project.downloadLink}
            filename={project.downloadFilename || 'presentation'}
          />
        </div>
      )}

      {/* Client */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
          Client
        </h3>
        <p className="text-lg font-bold text-gray-900">{project.client}</p>
      </div>

      {/* Year */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
          Year
        </h3>
        <p className="text-lg font-bold text-gray-900">{project.year}</p>
      </div>

      {/* Certificate */}
      {project.certificate && (
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
            Certificate
          </h3>
          <a
            href={project.certificate.link}
            className="block p-4 rounded-xl bg-gradient-to-r from-primary-50 to-primary-100 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-200">
                  {project.certificate.name}
                </p>
                <p className="text-sm text-gray-600">
                  Issued by {project.certificate.issuer}
                </p>
              </div>
            </div>
          </a>
        </div>
      )}

      {/* My Role */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
          My Role
        </h3>
        <ul className="space-y-2">
          {project.myRole.slice(0, 3).map((role, index) => (
            <li key={index} className="text-sm text-gray-700 leading-relaxed">
              • {role}
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">
          Services
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.services.slice(0, 4).map((service, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <ProjectSocialLinks project={project} />
    </motion.div>
  )
}

