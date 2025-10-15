"use client"
import { useState } from 'react';
import Head from 'next/head';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const services = [
    {
      id: 1,
      title: 'AI-Powered Automation',
      category: 'automation',
      description: 'Our intelligent automation solutions streamline your workflows and eliminate repetitive tasks.',
      fullDescription: '123printsetupandhelp provides cutting-edge AI automation that learns from your patterns to optimize business processes. Our solution reduces manual work by up to 80% while maintaining 99.9% accuracy. Perfect for data entry, customer service, and operational workflows.',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      features: ['Process automation', 'Machine learning', '24/7 operation', 'API integrations'],
      price: 'From $499/mo'
    },
    {
      id: 2,
      title: 'Smart Data Analytics',
      category: 'analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics platform.',
      fullDescription: 'Our analytics service provides real-time business intelligence with customizable dashboards and predictive modeling. Track KPIs, identify trends, and make data-driven decisions with confidence. Includes automated reporting and anomaly detection alerts.',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      price: 'From $399/mo'
    },
    {
      id: 3,
      title: 'Intelligent Customer Support',
      category: 'support',
      description: '24/7 AI-powered customer service that improves with every interaction.',
      fullDescription: 'Our virtual support agents handle customer inquiries with human-like understanding. The system continuously learns from interactions to provide more accurate responses over time. Includes sentiment analysis, multilingual support, and seamless handoff to human agents when needed.',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      features: ['Chatbots & voice assistants', 'Ticket routing', 'Knowledge base integration', 'Sentiment analysis'],
      price: 'From $599/mo'
    },
    {
      id: 4,
      title: 'Cloud Integration Suite',
      category: 'integration',
      description: 'Seamlessly connect all your business applications in one unified platform.',
      fullDescription: 'Our integration service connects your CRM, ERP, marketing tools, and other business applications into a cohesive ecosystem. Automate data flows between systems with customizable workflows and transformation rules. Includes pre-built connectors for 100+ popular business applications.',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      features: ['100+ pre-built connectors', 'Custom API development', 'Data transformation', 'Real-time sync'],
      price: 'From $699/mo'
    },
    {
      id: 5,
      title: 'Predictive Maintenance',
      category: 'iot',
      description: 'Anticipate equipment failures before they happen with our IoT solution.',
      fullDescription: 'Combine IoT sensor data with our AI algorithms to predict maintenance needs and prevent downtime. Our solution monitors equipment health in real-time, identifies patterns leading to failures, and schedules maintenance at optimal times. Reduces maintenance costs by up to 40% and downtime by 70%.',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      features: ['IoT monitoring', 'Failure prediction', 'Maintenance scheduling', 'Equipment analytics'],
      price: 'Custom pricing'
    },
    {
      id: 6,
      title: 'Security Monitoring',
      category: 'security',
      description: 'Advanced threat detection and prevention for your digital assets.',
      fullDescription: 'Our AI-powered security service monitors your systems 24/7 for potential threats and vulnerabilities. Uses behavioral analysis to detect anomalies and prevent breaches before they happen. Includes automated incident response, compliance reporting, and security awareness training for staff.',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance management'],
      price: 'From $799/mo'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <Head>
        <title>Our Services - 123printsetupandhelp
</title>
        <meta name="description" content="Discover our smart solutions for your business" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="block">Smart Solutions by</span>
            <span className="block text-indigo-600">123printsetupandhelp

</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered services can transform your business operations and drive growth.
          </p>
        </div>

        {/* Services Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'all' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            All Services
          </button>
          <button
            onClick={() => setActiveTab('automation')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'automation' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Automation
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'analytics' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Analytics
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'support' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Customer Support
          </button>
          <button
            onClick={() => setActiveTab('integration')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'integration' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Integrations
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'security' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            Security
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${expandedService === service.id ? 'transform scale-105 shadow-xl' : 'hover:shadow-md'}`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                {expandedService === service.id && (
                  <div className="mt-4 space-y-4">
                    <p className="text-gray-700">{service.fullDescription}</p>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2">
                      <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {service.price}
                      </span>
                    </div>
                  </div>
                )}
                
                <button
                  onClick={() => toggleService(service.id)}
                  className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
                >
                  {expandedService === service.id ? (
                    <>
                      Show less
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Learn more
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-indigo-700 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
            Our team at 123printsetupandhelp
is ready to help you implement the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-gray-100 transition duration-200">
              Request a Demo
            </button>
            <button className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-indigo-600 transition duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;