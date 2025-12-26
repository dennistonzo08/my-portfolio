import React, { useState } from 'react';
import { Home, Search, User, Briefcase, Code, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function SpotifyPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online shopping solution",
      tech: "React, Node.js, MongoDB",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=300&h=300&fit=crop"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool",
      tech: "React, Firebase, Tailwind",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=300&fit=crop"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking application",
      tech: "React, API Integration, Charts",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=300&h=300&fit=crop"
    },
    {
      title: "Social Media Analytics",
      description: "Performance tracking and insights",
      tech: "React, D3.js, REST API",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop"
    }
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "CSS/Tailwind", level: 88 },
    { name: "MongoDB", level: 70 }
  ];

  const handleSubmit = () => {
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 bg-black p-6 flex-col border-r border-zinc-800">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-green-500">Portfolio</h1>
        </div>

        <nav className="flex-1">
          <button
            onClick={() => setActiveSection('home')}
            className={`flex items-center w-full p-3 rounded-md mb-2 transition ${
              activeSection === 'home' ? 'bg-zinc-800' : 'hover:bg-zinc-900'
            }`}
          >
            <Home size={20} className="mr-3" />
            Home
          </button>
          <button
            onClick={() => setActiveSection('about')}
            className={`flex items-center w-full p-3 rounded-md mb-2 transition ${
              activeSection === 'about' ? 'bg-zinc-800' : 'hover:bg-zinc-900'
            }`}
          >
            <User size={20} className="mr-3" />
            About
          </button>
          <button
            onClick={() => setActiveSection('projects')}
            className={`flex items-center w-full p-3 rounded-md mb-2 transition ${
              activeSection === 'projects' ? 'bg-zinc-800' : 'hover:bg-zinc-900'
            }`}
          >
            <Briefcase size={20} className="mr-3" />
            Projects
          </button>
          <button
            onClick={() => setActiveSection('skills')}
            className={`flex items-center w-full p-3 rounded-md mb-2 transition ${
              activeSection === 'skills' ? 'bg-zinc-800' : 'hover:bg-zinc-900'
            }`}
          >
            <Code size={20} className="mr-3" />
            Skills
          </button>
          <button
            onClick={() => setActiveSection('contact')}
            className={`flex items-center w-full p-3 rounded-md mb-2 transition ${
              activeSection === 'contact' ? 'bg-zinc-800' : 'hover:bg-zinc-900'
            }`}
          >
            <Mail size={20} className="mr-3" />
            Contact
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-900 to-black">
        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-800 z-50">
          <div className="flex justify-around p-4">
            <button
              onClick={() => setActiveSection('home')}
              className={`flex flex-col items-center ${
                activeSection === 'home' ? 'text-green-500' : 'text-gray-400'
              }`}
            >
              <Home size={24} />
              <span className="text-xs mt-1">Home</span>
            </button>
            <button
              onClick={() => setActiveSection('about')}
              className={`flex flex-col items-center ${
                activeSection === 'about' ? 'text-green-500' : 'text-gray-400'
              }`}
            >
              <User size={24} />
              <span className="text-xs mt-1">About</span>
            </button>
            <button
              onClick={() => setActiveSection('projects')}
              className={`flex flex-col items-center ${
                activeSection === 'projects' ? 'text-green-500' : 'text-gray-400'
              }`}
            >
              <Briefcase size={24} />
              <span className="text-xs mt-1">Projects</span>
            </button>
            <button
              onClick={() => setActiveSection('skills')}
              className={`flex flex-col items-center ${
                activeSection === 'skills' ? 'text-green-500' : 'text-gray-400'
              }`}
            >
              <Code size={24} />
              <span className="text-xs mt-1">Skills</span>
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className={`flex flex-col items-center ${
                activeSection === 'contact' ? 'text-green-500' : 'text-gray-400'
              }`}
            >
              <Mail size={24} />
              <span className="text-xs mt-1">Contact</span>
            </button>
          </div>
        </div>

        {activeSection === 'home' && (
          <div className="p-4 md:p-8 pb-24 md:pb-8">
            <div className="bg-gradient-to-r from-green-900 to-zinc-900 rounded-lg p-6 md:p-12 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <img
                  src="./img/pro.jpg"
                  alt="Profile"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-green-500 shadow-2xl"
                />
                <div className="text-center md:text-left">
                  <p className="text-xs md:text-sm font-semibold mb-2">DEVELOPER</p>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">Dennis John Tonzo</h1>
                  <p className="text-base md:text-lg text-gray-300 mb-4">Full Stack Developer | LLM Systems Specialist</p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <Github className="cursor-pointer hover:text-green-500 transition" />
                    <Linkedin className="cursor-pointer hover:text-green-500 transition" />
                    <Mail className="cursor-pointer hover:text-green-500 transition" />
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.slice(0, 4).map((project, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition cursor-pointer group"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-500 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                  <p className="text-xs text-green-500">{project.tech}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="p-4 md:p-8 pb-24 md:pb-8">
            <div className="bg-gradient-to-r from-purple-900 to-zinc-900 rounded-lg p-6 md:p-12 mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">About Me</h1>
              <p className="text-lg md:text-xl text-gray-300">Passionate Developer & Problem Solver</p>
            </div>

            <div className="bg-zinc-900 rounded-lg p-8 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-green-500">My Story</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate full-stack developer with a love for creating beautiful, functional web applications. 
                With years of experience in modern web technologies, I specialize in building scalable solutions 
                that make a difference.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I believe in writing clean, maintainable code 
                and creating exceptional user experiences.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-green-500">Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Junio Software Developer</h3>
                  <p className="text-green-500 text-sm mb-2">Inriver Philippines • 2023 - 2025</p>
                  <p className="text-gray-400">Mainly focus on Python Systems and Web Scraping cron jobs</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Video Editor / Social Media Manager</h3>
                  <p className="text-green-500 text-sm mb-2">MarkZ IT Solutions OPC • 2022 - 2023</p>
                  <p className="text-gray-400">Managing Social Media Pages while creating the video content at the same time</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Freelance Software Developer</h3>
                  <p className="text-green-500 text-sm mb-2">AltaVista Beach Resort • 2023</p>
                  <p className="text-gray-400">Created a system (Reservation and POS) for productivity of their employees</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Freelance Software Developer</h3>
                  <p className="text-green-500 text-sm mb-2">Agro-Industrial Foundation College of the Philippines • 2021 - 2022</p>
                  <p className="text-gray-400">Created a system for the compliance for ISO certification</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Junior Software Developer</h3>
                  <p className="text-green-500 text-sm mb-2">Davao Medical School Foundation • 2019 - 2023</p>
                  <p className="text-gray-400">A vital role to maintain in-house softwares related to medical systems</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Intern and Web Developer</h3>
                  <p className="text-green-500 text-sm mb-2">Commission on Higher Education Department – Region XI • 2018 - 2019</p>
                  <p className="text-gray-400">A support role to maintain web systems in the goverment</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'projects' && (
          <div className="p-4 md:p-8 pb-24 md:pb-8">
            <div className="bg-gradient-to-r from-blue-900 to-zinc-900 rounded-lg p-6 md:p-12 mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">My Projects</h1>
              <p className="text-lg md:text-xl text-gray-300">Showcasing my best work</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition group"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-green-500 transition flex items-center">
                      {project.title}
                      <ExternalLink size={20} className="ml-2 opacity-0 group-hover:opacity-100 transition" />
                    </h3>
                    <p className="text-gray-400 mb-3">{project.description}</p>
                    <p className="text-sm text-green-500 font-semibold">{project.tech}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'skills' && (
          <div className="p-4 md:p-8 pb-24 md:pb-8">
            <div className="bg-gradient-to-r from-red-900 to-zinc-900 rounded-lg p-6 md:p-12 mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Skills & Expertise</h1>
              <p className="text-lg md:text-xl text-gray-300">Technologies I work with</p>
            </div>

            <div className="bg-zinc-900 rounded-lg p-8">
              <div className="space-y-6">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-lg font-semibold">{skill.name}</span>
                      <span className="text-green-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-3">
                      <div
                        className="bg-green-500 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-zinc-900 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">30+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="p-4 md:p-8 pb-24 md:pb-8">
            <div className="bg-gradient-to-r from-green-900 to-zinc-900 rounded-lg p-6 md:p-12 mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h1>
              <p className="text-lg md:text-xl text-gray-300">Let's work together</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-green-500">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="mr-4 text-green-500" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-400">dennistonzo08@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Github className="mr-4 text-green-500" />
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <p className="text-gray-400">github.com/dennistonzo08</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="mr-4 text-green-500" />
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <p className="text-gray-400">linkedin.com/in/dtonzo/</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-green-500">Send a Message</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button 
                    onClick={handleSubmit}
                    className="w-full bg-green-500 text-black font-bold py-3 rounded-full hover:bg-green-400 transition"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}