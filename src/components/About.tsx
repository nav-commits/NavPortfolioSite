import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Smartphone } from 'lucide-react';

const skills = [
  {
    icon: <Code size={24} />,
    title: 'Frontend Development',
    description: 'Expert in React, TypeScript, and modern CSS frameworks'
  },
  {
    icon: <Server size={24} />,
    title: 'Backend Integration',
    description: 'Experience with RESTful APIs and server-side integration'
  },
  {
    icon: <Layout size={24} />,
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces'
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Responsive Design',
    description: 'Mobile-first approach for all screen sizes'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-purple-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 text-lg">
            I'm a passionate front-end developer with a keen eye for design and a commitment to creating seamless user experiences. With expertise in modern web technologies, I bring ideas to life through clean, efficient code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-gray-600 mb-4">
                With several years of experience in web development, I've worked on various projects ranging from small business websites to large-scale applications. I'm constantly learning and adapting to new technologies to deliver the best possible solutions.
              </p>
              <p className="text-gray-600">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                alt="Workspace"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;