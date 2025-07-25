'use client';

export default function AboutSection() {
  const stats = [
    { number: "50K+", label: "Active Users", color: "text-blue-400" },
    { number: "4+", label: "Years Experience", color: "text-cyan-400" },
    { number: "15+", label: "Apps Delivered", color: "text-purple-400" },
    { number: "99%", label: "Client Satisfaction", color: "text-green-400" }
  ];

  return (
    <section id="about" className="py-20 section relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
              Crafting Digital Excellence in Mobile Development
            </h3>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                With over 4 years of experience in mobile application development, I specialize in creating 
                high-performance, user-centric applications using Flutter and React Native. My journey has 
                been driven by a passion for innovation and a commitment to delivering exceptional user experiences.
              </p>
              
              <p>
                I've had the privilege of working with diverse clients, from startups to established businesses, 
                helping them transform their ideas into successful mobile applications that serve thousands of users worldwide.
              </p>
              
              <p>
                My expertise spans the entire mobile development lifecycle, from initial concept and design 
                to deployment and maintenance, ensuring every project meets the highest standards of quality and performance.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Core Expertise</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Cross-platform Development",
                  "UI/UX Implementation", 
                  "API Integration",
                  "Performance Optimization",
                  "Code Architecture",
                  "Team Leadership"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="glass-effect p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}