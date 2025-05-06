import React, { useState } from 'react';
import { ExternalLink, Shield, Lock, AlertTriangle } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  results: string[];
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Financial Institution Security Audit",
      category: "Network",
      description: "Conducted a comprehensive security assessment for a major financial institution, identifying critical vulnerabilities in their network infrastructure.",
      image: "https://images.pexels.com/photos/6457521/pexels-photo-6457521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Network Penetration", "Infrastructure", "Financial"],
      results: [
        "Identified 3 critical vulnerabilities that could have led to data breach",
        "Provided detailed remediation strategies",
        "Implemented security monitoring solutions"
      ]
    },
    {
      id: 2,
      title: "E-commerce Platform Assessment",
      category: "Web",
      description: "Performed a thorough penetration test on a high-traffic e-commerce platform, uncovering several security issues in payment processing.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Web Application", "E-commerce", "Payment Systems"],
      results: [
        "Discovered SQL injection vulnerability in checkout process",
        "Identified insecure direct object references",
        "Fixed authentication bypass issues"
      ]
    },
    {
      id: 3,
      title: "Healthcare Provider Data Protection",
      category: "Cloud",
      description: "Assessed cloud infrastructure for a healthcare provider ensuring HIPAA compliance and proper protection of patient data.",
      image: "https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Cloud Security", "Healthcare", "Compliance"],
      results: [
        "Secured patient data storage systems",
        "Implemented encryption protocols",
        "Established access control mechanisms"
      ]
    },
    {
      id: 4,
      title: "Government Agency Red Team Exercise",
      category: "Red Team",
      description: "Led a red team exercise for a government agency to test their security posture against sophisticated attack scenarios.",
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Red Team", "Government", "Advanced Threats"],
      results: [
        "Successfully penetrated network perimeter",
        "Demonstrated potential data exfiltration methods",
        "Provided comprehensive security improvements"
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeFilter.toLowerCase());

  const filters = ['all', 'Network', 'Web', 'Cloud', 'Red Team'];

  return (
    <section id="projects" className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Case <span className="text-emerald-500">Studies</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world examples of security vulnerabilities discovered and remediated for clients.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeFilter === filter
                    ? 'bg-emerald-500 text-black'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {filter === 'all' ? 'All Projects' : filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-emerald-500/20">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-emerald-500 text-black font-medium px-3 py-1 rounded-bl-lg">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-2 flex items-center">
                    <Shield className="w-4 h-4 mr-1" /> Key Results
                  </h4>
                  <ul className="space-y-1">
                    {project.results.map((result, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-start">
                        <span className="text-emerald-500 mr-2">•</span> {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-emerald-500 hover:bg-emerald-400 transition-colors duration-200">
                  View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;