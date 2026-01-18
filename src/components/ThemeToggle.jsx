import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Cargar tema guardado o usar dark por defecto
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-6 z-50 w-12 h-12 rounded-full bg-card-dark/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon className="w-5 h-5 text-blue-400 group-hover:rotate-180 transition-transform duration-500" />
      )}
    </button>
  );
}

export default ThemeToggle;
