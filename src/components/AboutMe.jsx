function AboutMe() {
  return (
    <section id="about" className="py-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-foreground text-3xl font-bold tracking-tight">
            Sobre Mí
          </h2>
          <p className="text-muted-foreground">
            Un poco más acerca de quién soy
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Imagen */}
          <div className="lg:col-span-1">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-primary/30">
                <img 
                  src="https://i.pravatar.cc/400?img=33" 
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <p className="text-card-foreground leading-relaxed">
                ¡Hola!  Soy un desarrollador Full Stack apasionado por crear soluciones tecnológicas 
                que realmente impacten. Con experiencia en desarrollo web moderno, siempre busco aprender 
                nuevas tecnologías y mejorar mis habilidades.
              </p>
              
              <p className="text-card-foreground leading-relaxed">
                Me especializo en construir aplicaciones escalables y eficientes, desde el frontend hasta 
                el backend. Disfruto trabajando en equipo y enfrentando nuevos desafíos que me permitan 
                crecer profesionalmente.
              </p>

              <div className="pt-4 border-t border-border">
                <h3 className="text-foreground font-bold mb-3">¿Qué me motiva?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Resolver problemas complejos con código elegante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Aprender constantemente y compartir conocimiento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>Crear productos que mejoren la vida de las personas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats rápidos */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-primary">3+</p>
                <p className="text-xs text-muted-foreground mt-1">Años Experiencia</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-primary">20+</p>
                <p className="text-xs text-muted-foreground mt-1">Proyectos</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-xs text-muted-foreground mt-1">Tecnologías</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;