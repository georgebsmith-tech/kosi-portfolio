const skills = [
  {
    icon: "◈",
    title: "Data Science & ML",
    items: ["Data Analysis & Wrangling", "Machine Learning", "Statistical Methods", "Data Visualization", "Pandas & NumPy", "Scikit-learn"],
  },
  {
    icon: "❖",
    title: "Backend Development",
    items: ["Python", "FastAPI", "REST API Design", "Authentication & JWT"],
  },
  {
    icon: "✶",
    title: "Databases",
    items: ["PostgreSQL", "SQLite", "SQL & Complex Queries", "Database Modeling"],
  },
  {
    icon: "✦",
    title: "Tools & Workflow",
    items: ["Git & GitHub", "Jupyter Notebooks", "pgAdmin", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section__header reveal">
        <span className="section__number">02</span>
        <h2 className="section__title">Skills &amp; Tools</h2>
        <div className="section__line" />
      </div>

      <div className="skills__grid">
        {skills.map((skill) => (
          <div className="skill-card reveal" key={skill.title}>
            <div className="skill-card__icon">{skill.icon}</div>
            <h3 className="skill-card__title">{skill.title}</h3>
            <ul className="skill-card__list">
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
