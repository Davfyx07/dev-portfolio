function Skills() {
  const skills = [
    { name: 'React.js', color: '#61DAFB' },
    { name: 'Node.js', color: '#68A063' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'Python', color: '#FFD43B' },
    { name: 'Tailwind CSS', color: '#06B6D4' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'PostgreSQL', color: '#4169E1' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'Git', color: '#F05032' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'Next.js', color: '#ffffff' },
  ];

  return (
    <section id="skills" className="py-14 space-y-10">
      <div className="flex items-end justify-between border-b border-border pb-4">
        <div>
          <h2 className="text-foreground text-4xl font-bold tracking-tight">
            Technical Skills
          </h2>
          <p className="text-muted-foreground mt-2">
            Tecnologías con las que trabajo día a día
          </p>
        </div>
        <span className="text-primary font-mono text-sm">./skills --all</span>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="group flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-primary transition-all cursor-default"
          >
            <div 
              className="size-2 rounded-full transition-shadow"
              style={{ 
                backgroundColor: skill.color,
                boxShadow: '0 0 0 rgba(0,0,0,0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 8px ${skill.color}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
              }}
            />
            <span className="text-card-foreground font-medium text-sm">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;