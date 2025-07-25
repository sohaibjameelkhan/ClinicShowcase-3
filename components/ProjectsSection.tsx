'use client';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Happiness Club",
      description: "A comprehensive wellness app designed to boost mental health and personal growth through guided activities, community support, and progress tracking.",
      tech: ["Flutter", "Firebase", "Stripe"],
      features: ["User Authentication", "Real-time Chat", "Payment Integration", "Progress Analytics"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.happinessclub.app",
      appStoreLink: "https://apps.apple.com/app/happiness-club/id1234567890",
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Racing Eye",
      description: "High-performance racing simulation game with realistic physics, stunning graphics, and multiplayer functionality for mobile gaming enthusiasts.",
      tech: ["Flutter", "Unity", "Firebase"],
      features: ["3D Racing Engine", "Multiplayer Mode", "Leaderboards", "Car Customization"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.racingeye.game",
      appStoreLink: "https://apps.apple.com/app/racing-eye/id0987654321",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Clinic On App",
      description: "Revolutionary healthcare platform connecting patients with medical professionals through video consultations, appointment scheduling, and health records management.",
      tech: ["Flutter", "Node.js", "MongoDB"],
      features: ["Video Consultations", "Appointment Booking", "Health Records", "Prescription Management"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.clinicon.app",
      appStoreLink: "https://apps.apple.com/app/clinic-on-app/id1122334455",
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50 section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Showcasing innovative mobile applications that serve thousands of users worldwide
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Project Header */}
              <div className={`h-32 bg-gradient-to-r ${project.color} p-6 flex items-center justify-center relative overflow-hidden`}>
                <h3 className="text-xl font-bold text-white text-center z-10">{project.title}</h3>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full transform -translate-x-6 translate-y-6"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate-400 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Store Links */}
                <div className="flex gap-3">
                  <a 
                    href={project.playStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    Play Store
                  </a>
                  <a 
                    href={project.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    App Store
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}