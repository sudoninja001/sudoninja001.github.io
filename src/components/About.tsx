import React from 'react';
import { Terminal, Briefcase, GraduationCap, Award } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, icon }) => {
  return (
    <div className="flex gap-4 mb-8">
      <div className="flex flex-col items-center">
        <div className="bg-emerald-500 p-3 rounded-full text-black">
          {icon}
        </div>
        <div className="w-px h-full bg-gray-700 mt-3"></div>
      </div>
      <div>
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-emerald-900/40 text-emerald-400 rounded-full mb-2">
          {year}
        </span>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const timelineItems = [
    {
      year: "2023 - Present",
      title: "Senior Security Consultant at CyberShield Solutions",
      description: "Leading penetration testing initiatives for Fortune 500 companies, focusing on critical infrastructure and financial services sectors.",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      year: "2020 - 2023",
      title: "Security Engineer at SecureNet Technologies",
      description: "Conducted vulnerability assessments and penetration tests for cloud-based applications and infrastructure, identifying critical security flaws.",
      icon: <Terminal className="w-5 h-5" />
    },
    {
      year: "2018 - 2020",
      title: "Cybersecurity Analyst at TechDefenders",
      description: "Performed security audits and assisted in developing robust security policies for mid-sized businesses across various industries.",
      icon: <Terminal className="w-5 h-5" />
    },
    {
      year: "2016 - 2018",
      title: "MSc in Cybersecurity, University of Technology",
      description: "Specialized in offensive security techniques and advanced penetration testing methodologies with a focus on critical infrastructure.",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  return (
    <section id="about" className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            About <span className="text-emerald-500">Me</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            My journey in cybersecurity and penetration testing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">My Background</h3>
            <p className="text-gray-300 mb-6">
              With over 8 years of experience in cybersecurity, I specialize in identifying and exploiting security vulnerabilities before malicious actors can. My approach combines technical expertise with strategic thinking to provide comprehensive security solutions.
            </p>
            <p className="text-gray-300 mb-6">
              I've helped organizations across various sectors—from finance and healthcare to government and technology—strengthen their security posture through rigorous testing and actionable recommendations. My work has prevented potential data breaches affecting millions of users.
            </p>
            <p className="text-gray-300">
              My philosophy is that security is not just about finding vulnerabilities but about understanding the business context and providing practical, prioritized solutions that balance security with operational needs.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="text-3xl font-bold text-emerald-500 mb-2">150+</div>
                <div className="text-sm text-gray-300">Security Audits Completed</div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="text-3xl font-bold text-emerald-500 mb-2">40+</div>
                <div className="text-sm text-gray-300">Critical Vulnerabilities Found</div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="text-3xl font-bold text-emerald-500 mb-2">25+</div>
                <div className="text-sm text-gray-300">Industries Serviced</div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="text-3xl font-bold text-emerald-500 mb-2">5+</div>
                <div className="text-sm text-gray-300">Industry Certifications</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Professional Journey</h3>
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;