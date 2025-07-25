'use client';

export default function ExperienceSection() {
  const experiences = [
    {
      company: "SoftLinks FZCO",
      position: "Senior Mobile Application Developer",
      period: "2021 - Present",
      location: "Dubai, UAE (Remote)",
      description: "Leading mobile development initiatives and architecting scalable Flutter applications for global markets.",
      achievements: [
        "Led development of 5+ enterprise-level mobile applications",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and established coding standards",
        "Achieved 99.5% app uptime with optimized performance"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "AWS", "REST APIs"]
    },
    {
      company: "Various Freelance Projects",
      position: "Mobile Application Developer",
      period: "2020 - 2021",
      location: "Pakistan",
      description: "Delivered custom mobile solutions for startups and small businesses across different industries.",
      achievements: [
        "Successfully delivered 15+ mobile applications",
        "Maintained 95% client satisfaction rate",
        "Specialized in rapid prototyping and MVP development",
        "Built applications serving 50K+ active users"
      ],
      technologies: ["Flutter", "React Native", "Firebase", "SQLite"]
    },
    {
      company: "Learning & Development",
      position: "Mobile Development Student",
      period: "2019 - 2020",
      location: "Pakistan",
      description: "Intensive learning period focusing on mobile development fundamentals and advanced concepts.",
      achievements: [
        "Completed multiple certification courses in Flutter",
        "Built 10+ personal projects and open-source contributions",
        "Participated in hackathons and developer meetups",
        "Developed strong foundation in mobile architecture patterns"
      ],
      technologies: ["Flutter", "Dart", "Android", "iOS", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900 section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            4+ years of dedicated mobile development experience across various industries
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                
                {/* Timeline node */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900"></div>
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-all duration-300">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                      <h4 className="text-lg text-blue-400 mb-1">{exp.company}</h4>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-slate-400">
                        <span>{exp.period}</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-purple-400 mb-2">Key Achievements</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-slate-300 text-sm flex items-start">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-semibold text-green-400 mb-2">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}