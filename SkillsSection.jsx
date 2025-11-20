export default function SkillsSection() {
  const skills = [
    { id: 1, name: "Generative AI", icon: "🤖" },
    { id: 2, name: "IT Certifications", icon: "💻" },
    { id: 3, name: "Data Science", icon: "📊" },
    { id: 4, name: "Web Development", icon: "🌐" },
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">
          Learn essential career and life skills
        </h2>
        <p className="section-description">
          Udemy helps you build in-demand skills fast and advance your career in
          a changing job market.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
