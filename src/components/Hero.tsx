import React from 'react';
import { ArrowRight, Lock, ShieldAlert, Database } from 'lucide-react';
import MatrixEffect from './MatrixEffect';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <MatrixEffect />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-900/40 text-emerald-400 mb-6">
              <ShieldAlert className="w-4 h-4 mr-2" />
              Ethical Hacker & Security Specialist
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Securing Your Digital <span className="text-emerald-500">Infrastructure</span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-300 max-w-2xl">
              Professional penetration testing services to identify vulnerabilities before malicious actors do. I help businesses strengthen their security posture through comprehensive testing and actionable remediation strategies.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-emerald-500 hover:bg-emerald-400 transition-colors duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#services" 
                className="mt-3 sm:mt-0 sm:ml-4 inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-white hover:bg-gray-800 transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <span className="text-emerald-500 text-2xl font-bold">100+</span>
                <span className="text-gray-400 text-sm">Projects Completed</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-emerald-500 text-2xl font-bold">95%</span>
                <span className="text-gray-400 text-sm">Success Rate</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-emerald-500 text-2xl font-bold">24/7</span>
                <span className="text-gray-400 text-sm">Support</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock className="w-32 h-32 text-emerald-500" />
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg">
                <Database className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg">
                <ShieldAlert className="w-8 h-8 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;