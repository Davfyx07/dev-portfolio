import { useState, useEffect, useRef } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const isClickScrolling = useRef(false);
  const navRef = useRef(null);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About Me' }
  ];

  // Detectar scroll para cambiar sección activa
  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;

      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Actualizar posición del indicador deslizante
  useEffect(() => {
    const activeLink = navRef.current?.querySelector(`[data-section="${activeSection}"]`);
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeSection]);

  const handleClick = (section) => {
    isClickScrolling.current = true;
    setActiveSection(section);

    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <nav 
        ref={navRef}
        className="relative flex items-center gap-1 px-3 py-2 bg-card-dark/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50"
      >
        {/* Indicador deslizante (píldora animada) */}
        <div 
          className="absolute top-2 bottom-2 bg-primary rounded-full transition-all duration-500 ease-out"
          style={indicatorStyle}
        />

        {/* Links de navegación */}
        {sections.map((section) => (
          <button
            key={section.id}
            data-section={section.id}
            onClick={() => handleClick(section.id)}
            className={`relative z-10 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeSection === section.id 
                ? 'text-white' 
                : 'text-slate-400 hover:text-white hover:scale-105'
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
