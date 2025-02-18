// import React, { useState, useEffect, useRef } from 'react';
// import { Beaker, Leaf, Recycle, Award, ChevronDown, Play, Building2, FlaskRound as Flask, Lightbulb, Factory } from 'lucide-react';

// function App() {
//   const [activeSection, setActiveSection] = useState('intro');
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionsRef = useRef<(HTMLElement | null)[]>([]);

//   useEffect(() => {
//     setIsVisible(true);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('.section-animate').forEach((section) => {
//       observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//       setActiveSection(sectionId);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 py-4 px-4">
//         <div className="max-w-6xl mx-auto flex justify-between items-center">
//           <div className="flex items-center space-x-2">
//             <Beaker className="w-6 h-6 text-green-600 animate-float" />
//             <h1 className="text-2xl font-light text-gray-800">Green Chemistry</h1>
//           </div>
//           <nav className="hidden md:flex space-x-8">
//             {['intro', 'principles', 'industry', 'benefits', 'presentation'].map((section) => (
//               <button
//                 key={section}
//                 onClick={() => scrollToSection(section)}
//                 className={`nav-link text-gray-600 hover:text-green-600 transition-colors capitalize ${
//                   activeSection === section ? 'text-green-600' : ''
//                 }`}
//               >
//                 {section}
//               </button>
//             ))}
//           </nav>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-6xl mx-auto px-4 pt-24">
//         {/* Introduction Section */}
//         <section id="intro" className="min-h-screen flex items-center section-animate mb-16">
//           <div className="w-full grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-6xl font-light text-gray-800 mb-8">
//                 The Future of
//                 <span className="block text-green-600 font-normal mt-2">Sustainable Chemistry</span>
//               </h2>
//               <div className="prose prose-lg max-w-2xl">
//                 <p className="text-gray-600 leading-relaxed">
//                   Green Chemistry is revolutionizing the way we think about chemical processes. 
//                   It's not just about making chemistry environmentally friendly—it's about 
//                   designing chemical products and processes that are inherently safer for both 
//                   people and our planet.
//                 </p>
//               </div>
//             </div>
//             <div className="image-card rounded-lg overflow-hidden shadow-lg">
//               <img 
//                 src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
//                 alt="Green Chemistry Lab"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Principles Section */}
//         <section id="principles" className="min-h-screen py-16 section-animate">
//           <h2 className="text-4xl font-light text-gray-800 mb-12">
//             Core Principles
//             <span className="block text-sm text-green-600 mt-2">The foundations of green chemistry</span>
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               "Prevention",
//               "Atom Economy",
//               "Less Hazardous Synthesis",
//               "Safer Design",
//               "Safer Solvents",
//               "Energy Efficiency",
//               "Renewable Feedstocks",
//               "Reduce Derivatives",
//               "Catalysis",
//               "Degradability",
//               "Real-time Analysis",
//               "Accident Prevention"
//             ].map((principle, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:bg-green-50"
//                 style={{ transitionDelay: `${index * 50}ms` }}
//               >
//                 <span className="text-green-600 text-sm font-medium block mb-2">0{index + 1}</span>
//                 <h3 className="text-xl text-gray-800 font-medium">{principle}</h3>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Industry Use Cases Section */}
//         <section id="industry" className="min-h-screen py-16 section-animate">
//           <h2 className="text-4xl font-light text-gray-800 mb-12">
//             Industry Applications
//             <span className="block text-sm text-green-600 mt-2">Real-world implementation</span>
//           </h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="image-card rounded-lg overflow-hidden">
//               <img 
//                 src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
//                 alt="Pharmaceutical Industry"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6 bg-white">
//                 <h3 className="text-xl font-medium text-gray-800 mb-2">Pharmaceutical Industry</h3>
//                 <p className="text-gray-600">Development of greener drug synthesis processes and sustainable manufacturing practices.</p>
//               </div>
//             </div>
//             <div className="image-card rounded-lg overflow-hidden">
//               <img 
//                 src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
//                 alt="Renewable Energy"
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6 bg-white">
//                 <h3 className="text-xl font-medium text-gray-800 mb-2">Renewable Energy</h3>
//                 <p className="text-gray-600">Production of solar cells and energy storage solutions using sustainable methods.</p>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mt-12">
//             <div className="stat-card bg-white p-8 rounded-lg shadow-sm">
//               <Factory className="w-8 h-8 text-green-600 mb-4" />
//               <h4 className="text-2xl font-bold text-gray-800 mb-2">70%</h4>
//               <p className="text-gray-600">Reduction in waste production</p>
//             </div>
//             <div className="stat-card bg-white p-8 rounded-lg shadow-sm">
//               <Lightbulb className="w-8 h-8 text-green-600 mb-4" />
//               <h4 className="text-2xl font-bold text-gray-800 mb-2">40%</h4>
//               <p className="text-gray-600">Energy efficiency improvement</p>
//             </div>
//             <div className="stat-card bg-white p-8 rounded-lg shadow-sm">
//               <Flask className="w-8 h-8 text-green-600 mb-4" />
//               <h4 className="text-2xl font-bold text-gray-800 mb-2">85%</h4>
//               <p className="text-gray-600">Safer chemical processes</p>
//             </div>
//           </div>
//         </section>

//         {/* Benefits Section */}
//         <section id="benefits" className="min-h-screen py-16 section-animate">
//           <h2 className="text-4xl font-light text-gray-800 mb-12">
//             Impact & Benefits
//             <span className="block text-sm text-green-600 mt-2">Why green chemistry matters</span>
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="p-8 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 hover:-translate-y-2">
//               <Leaf className="w-8 h-8 text-green-600 mb-4" />
//               <h3 className="text-xl font-medium text-gray-800 mb-4">Environmental Impact</h3>
//               <p className="text-gray-600">Significant reduction in pollution and environmental damage through preventive design</p>
//             </div>
//             <div className="p-8 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 hover:-translate-y-2">
//               <Building2 className="w-8 h-8 text-green-600 mb-4" />
//               <h3 className="text-xl font-medium text-gray-800 mb-4">Economic Benefits</h3>
//               <p className="text-gray-600">Improved efficiency and reduced costs through optimized processes and waste reduction</p>
//             </div>
//             <div className="p-8 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-300 hover:-translate-y-2">
//               <Award className="w-8 h-8 text-green-600 mb-4" />
//               <h3 className="text-xl font-medium text-gray-800 mb-4">Safety</h3>
//               <p className="text-gray-600">Enhanced workplace safety and reduced health risks through safer chemical processes</p>
//             </div>
//           </div>
//         </section>

//         {/* Presentation Section */}
//         <section id="presentation" className="min-h-screen py-16 section-animate mb-16">
//           <h2 className="text-4xl font-light text-gray-800 mb-12">
//             Presentation
//             <span className="block text-sm text-green-600 mt-2">Watch and learn</span>
//           </h2>
//           <div className="bg-gray-50 rounded-lg p-8">
//             <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center mb-6 hover:bg-gray-200 transition-all duration-300 group cursor-pointer">
//               <div className="text-center p-12 transform transition-transform group-hover:scale-110">
//                 <Play className="w-16 h-16 text-green-600 mx-auto mb-4" />
//                 <p className="text-gray-600">Video presentation coming soon</p>
//               </div>
//             </div>
//             <div className="text-center">
//               <p className="text-gray-600">Presenter: <span className="text-gray-800 font-medium">Shabul Hussain</span></p>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="py-8 border-t border-gray-100">
//           <p className="text-center text-gray-500">
//             Developed by <span className="text-gray-800 font-medium">Shabul Hussain - WIX</span>
//           </p>
//         </footer>
//       </main>
//     </div>
//   );
// }

// export default App;




import React, { useState, useEffect, useRef } from 'react';
import { Beaker, Leaf, Recycle, Award, ChevronDown, Play, Building2, FlaskRound as Flask, Lightbulb, Factory, Sun, Moon, Menu } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}> 
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-800 backdrop-blur-md z-50 py-4 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Beaker className="w-6 h-6 text-green-600 animate-float" />
            <h1 className="text-2xl font-light">Green Chemistry</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            {['intro', 'principles', 'industry', 'benefits', 'quiz'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link transition-colors capitalize ${activeSection === section ? 'text-green-600' : 'text-gray-600 dark:text-gray-300'}`}
              >
                {section}
              </button>
            ))}
          </nav>
          <div className="flex space-x-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-800 p-4">
            {['intro', 'principles', 'industry', 'benefits', 'quiz'].map((section) => (
              <button
                key={section}
                onClick={() => { scrollToSection(section); setIsMenuOpen(false); }}
                className="block py-2 text-gray-600 dark:text-gray-300 capitalize"
              >
                {section}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Quiz Section */}
      <section id="quiz" className="min-h-screen py-16 section-animate">
        <h2 className="text-4xl font-light mb-12">Test Your Knowledge</h2>
        <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300">What is the primary goal of Green Chemistry?</p>
          <ul className="mt-4 space-y-2">
            <li className="p-4 bg-white dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-green-100 dark:hover:bg-green-700">A) Reduce chemical costs</li>
            <li className="p-4 bg-white dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-green-100 dark:hover:bg-green-700">B) Design safer chemicals and processes</li>
            <li className="p-4 bg-white dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-green-100 dark:hover:bg-green-700">C) Increase production speed</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-700 text-center">
        <p>Developed by <span className="font-medium">Shabul Hussain - WIX</span></p>
      </footer>
    </div>
  );
}

export default App;
