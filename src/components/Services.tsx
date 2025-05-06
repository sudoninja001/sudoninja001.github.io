import React from 'react';
import { Shield, Network, Globe, Server, Lock, Database, FileWarning, BarChart } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-emerald-500/20 hover:translate-y-[-5px]">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-emerald-900/50 text-emerald-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Network Penetration Testing",
      description: "Comprehensive testing of your network infrastructure to identify security gaps and vulnerabilities."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Application Testing",
      description: "Thorough assessment of web applications to uncover security flaws and potential entry points."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Cloud Security Assessment",
      description: "Evaluate your cloud environments for misconfigurations and security weaknesses."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Social Engineering Tests",
      description: "Assess your organization's resilience against human-targeted attacks and phishing attempts."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Security Audits",
      description: "Identify vulnerabilities in database systems and ensure proper data protection measures."
    },
    {
      icon: <FileWarning className="w-6 h-6" />,
      title: "Security Policy Review",
      description: "Comprehensive review of your security policies and procedures to identify gaps and improvements."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Risk Assessment",
      description: "Evaluate and quantify the security risks faced by your organization and digital assets."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Training",
      description: "Custom security awareness training programs for your teams to strengthen your human firewall."
    }
  ];

  return (
    <section id="services" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            <span className="text-emerald-500">Professional</span> Services
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive security assessment and penetration testing services to strengthen your digital defenses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;