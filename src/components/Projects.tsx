import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AutoDealPro',
    description: 'A modern and responsive car dealership app built with Next.js and TypeScript. It showcases car listings with images, integrates interactive charts for financial insights, and features a functional sidebar for navigation.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    tech: ['Next.js', 'TypeScript', 'HTML5', 'CSS3', 'Git'],
    github: 'https://github.com',
    live: 'https://polite-bublanina-2d779c.netlify.app'
  },
  {
    title: 'NeuroPulse AI Dashboard',
    description: 'A cutting-edge AI monitoring and analytics dashboard built with Next.js, TypeScript, Tailwind CSS, and Radix UI to help users track and analyze AI model performance effectively.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Git'],
    github: 'https://github.com/nav-commits/AIDashboard',
    live: 'https://thunderous-tulumba-9f99bf.netlify.app'
  },
  {
    title: 'NFT Marketplace',
    description: 'A simple and visually appealing NFT marketplace built with Next.js and TypeScript. Users can browse listed NFTs and add their own. The app integrates MetaMask for wallet authentication and uses modern HTML5 and CSS for styling.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80',
    tech: ['Next.js', 'TypeScript', 'CSS3', 'HTML5', 'Git'],
    github: 'https://github.com',
    live: 'https://candid-cactus-19d4a1.netlify.app/'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600">Some of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-purple-600"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-purple-600"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;