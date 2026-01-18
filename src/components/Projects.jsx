import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function Projects() {
  const projects = [
    {
      title: 'Quantum Analytics Engine',
      description: 'Visualización de datos en tiempo real procesando 10M+ eventos diarios con Kafka.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['REACT', 'AWS LAMBDA'],
      github: 'https://github.com/tuusuario/proyecto1',
      demo: 'https://proyecto1.com'
    },
    {
      title: 'CloudGuard Sentinel',
      description: 'Auditoría de seguridad automática para cuentas AWS multi-región con Terraform.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      tags: ['GO', 'TERRAFORM'],
      github: 'https://github.com/tuusuario/proyecto2',
      demo: 'https://proyecto2.com'
    },
    {
      title: 'Neural Content Studio',
      description: 'Generador de contenido usando IA. Crea textos e imágenes automáticamente.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      tags: ['PYTHON', 'OPENAI'],
      github: 'https://github.com/tuusuario/proyecto3',
      demo: 'https://proyecto3.com'
    },
    {
      title: 'RealTime Pulse',
      description: 'Dashboard de métricas en tiempo real para monitoreo de sistemas distribuidos.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['NODE.JS', 'REDIS'],
      github: 'https://github.com/tuusuario/proyecto4',
      demo: 'https://proyecto4.com'
    },
    {
      title: 'Weather Insights',
      description: 'App del clima con pronóstico de 7 días y alertas personalizadas.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      tags: ['REACT', 'API'],
      github: 'https://github.com/tuusuario/proyecto5',
      demo: 'https://proyecto5.com'
    }
  ];

  return (
    <section id="projects" className="py-24 space-y-10">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-white text-3xl font-bold tracking-tight">
          Proyectos Destacados
        </h2>
        <p className="text-slate-500">
          Algunos de mis trabajos más recientes
        </p>
      </div>

      {/* Carrusel con shadcn */}
      <div className="max-w-5xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <Card className="bg-card-dark border-white/10">
                  <CardContent className="p-0">
                    {/* Imagen */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-800 rounded-t-xl">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-card-dark/20 to-transparent" />
                      
                      {/* Icono esquina */}
                      <div className="absolute top-4 right-4 size-8 bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-lg flex items-center justify-center">
                        <span className="text-primary text-sm">🔗</span>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-white text-xl font-bold hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Botones */}
                      <div className="flex gap-3 pt-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-sm font-semibold transition-all"
                        >
                          <span>Code</span>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary/90 rounded-lg text-white text-sm font-semibold transition-all"
                        >
                          <span>Demo</span>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-card-dark border-white/10 text-white hover:bg-primary hover:text-white" />
          <CarouselNext className="bg-card-dark border-white/10 text-white hover:bg-primary hover:text-white" />
        </Carousel>
      </div>

      {/* Botón Ver Todos */}
      <div className="text-center pt-6">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-semibold transition-all hover:translate-y-[-2px]"
        >
          <span>Ver Todos los Proyectos</span>
          <span>→</span>
        </a>
      </div>
    </section>
  );
}

export default Projects;