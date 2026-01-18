import Navbar from './components/navbar'
import './App.css'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen mesh-bg text-white">
      <Navbar />
      
      <main className="px-6 lg:px-40 max-w-[1200px] mx-auto w-full space-y-24">
        <Hero />
        <Skills />
        <Projects />
        <AboutMe />
      </main>
      <Footer />
    </div>
  )
}

export default App