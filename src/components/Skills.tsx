import React, { useEffect, useRef } from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
  color: string;
  delay: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage, color, delay }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && progressRef.current) {
          setTimeout(() => {
            if (progressRef.current) {
              progressRef.current.style.width = `${percentage}%`;
              progressRef.current.style.opacity = '1';
            }
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (progressRef.current) {
      observer.observe(progressRef.current);
    }
    
    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [percentage, delay]);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-white">{skill}</span>
        <span className="text-sm font-medium text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          ref={progressRef}
          className="h-2.5 rounded-full transition-all duration-1000 ease-out opacity-0"
          style={{ width: '0%', backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

interface TechBadgeProps {
  name: string;
  icon: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name, icon }) => {
  return (
    <div className="flex items-center justify-center flex-col bg-gray-800 rounded-lg p-4 transition-all duration-300 hover:bg-gray-700">
      <div className="text-2xl mb-2">{icon}</div>
      <span className="text-sm text-gray-300">{name}</span>
    </div>
  );
};

const Skills: React.FC = () => {
  const skills = [
    { skill: "Network Penetration Testing", percentage: 95, color: "#10b981" },
    { skill: "Web Application Security", percentage: 90, color: "#06b6d4" },
    { skill: "Wireless Network Auditing", percentage: 85, color: "#3b82f6" },
    { skill: "Mobile Application Security", percentage: 80, color: "#8b5cf6" },
    { skill: "Cloud Security", percentage: 88, color: "#ec4899" },
    { skill: "Social Engineering", percentage: 92, color: "#f59e0b" }
  ];
  
  const technologies = [
    { name: "Metasploit", icon: "🛡️" },
    { name: "Wireshark", icon: "🦈" },
    { name: "Burp Suite", icon: "🔍" },
    { name: "Nmap", icon: "🔎" },
    { name: "Kali Linux", icon: "🐉" },
    { name: "OWASP ZAP", icon: "⚡" },
    { name: "Aircrack-ng", icon: "📡" },
    { name: "HashCat", icon: "🔑" }
  ];
  
  const certifications = [
    "Certified Ethical Hacker (CEH)",
    "Offensive Security Certified Professional (OSCP)",
    "Certified Information Systems Security Professional (CISSP)",
    "CompTIA Security+",
    "Certified Penetration Tester (CPT)"
  ];

  return (
    <section id="skills" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Technical <span className="text-emerald-500">Expertise</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized skills and proficiencies in cybersecurity and penetration testing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-700">Core Skills</h3>
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                skill={skill.skill}
                percentage={skill.percentage}
                color={skill.color}
                delay={index * 200}
              />
            ))}
          </div>
          
          <div>
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-700">Tools & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <TechBadge
                    key={index}
                    name={tech.name}
                    icon={tech.icon}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-700">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;