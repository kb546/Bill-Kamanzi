'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { getAllProjects, getProjectsByCategory } from '@/lib/data/projectsReal'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const categories = [
  'All',
  'Social Media Marketing',
  'Web Development',
  'WordPress Development',
  'SEO & Digital Marketing',
]

export default function ProjectGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const projects = getProjectsByCategory(selectedCategory)

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => {
            const hasBackgroundImage = !!project.backgroundImage
            const displayLogo = project.cardLogo || project.logo

            return (
              <Link key={project.id} href={`/projects/${project.slug}`}>
                <motion.div
                  className="relative h-[400px] sm:h-[450px] md:h-[480px] lg:h-[520px] overflow-hidden cursor-pointer group rounded-3xl shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                >
                  {/* Background */}
                  {hasBackgroundImage ? (
                    <>
                      <Image
                        src={project.backgroundImage!}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-white" />
                  )}

                  {/* Content */}
                  <div className="absolute inset-0 p-5 min-[375px]:p-6 sm:p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      {hasBackgroundImage && displayLogo ? (
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-2xl p-2 sm:p-2.5 md:p-3 shadow-lg">
                          <Image
                            src={displayLogo}
                            alt={`${project.title} logo`}
                            width={64}
                            height={64}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      ) : !hasBackgroundImage && displayLogo ? (
                        <div className="w-full flex justify-center mt-2 min-[375px]:mt-4 sm:mt-6 md:mt-8">
                          <div className="w-24 h-24 min-[375px]:w-28 min-[375px]:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 relative">
                            <Image
                              src={displayLogo}
                              alt={`${project.title} logo`}
                              width={160}
                              height={160}
                              className="object-contain"
                            />
                          </div>
                        </div>
                      ) : null}
                      
                      <motion.div
                        className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`
                        }}
                      >
                        <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </motion.div>
                    </div>

                    <div>
                      <h3 className={`text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 ${
                        hasBackgroundImage ? 'text-white' : 'text-gray-900'
                      }`}>
                        {project.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                        {project.category.slice(0, 2).map((cat) => (
                          <span
                            key={cat}
                            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full ${
                              hasBackgroundImage
                                ? 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      <p className={`text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2 ${
                        hasBackgroundImage ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {project.description}
                      </p>

                      {project.results.length > 0 && (
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                          hasBackgroundImage
                            ? 'bg-white/20 backdrop-blur-sm border border-white/30'
                            : 'bg-gradient-to-r from-primary-600 to-primary-500'
                        }`}>
                          <span className={`text-lg font-bold ${
                            hasBackgroundImage ? 'text-white' : 'text-white'
                          }`}>
                            {project.results[0].value}
                          </span>
                          <span className={`text-sm ${
                            hasBackgroundImage ? 'text-white/80' : 'text-white/90'
                          }`}>
                            {project.results[0].metric}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

