import SectionTitle from "./shared/SectionTitle";
import Card from "./shared/Card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C#", "C++", "Python", "HTML", "CSS", "JavaScript", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "ASP.NET MVC",
        "ASP.NET Web APIs",
        "React",
        "Bootstrap",
        "jQuery",
        "Entity Framework",
      ],
    },
    {
      title: "Tools & Databases",
      skills: [
        "SQL Server",
        "MySQL",
        "MongoDB",
        "Git",
        "GitHub",
        "Visual Studio",
        "Linux",
        "VMware",
        "Arduino",
      ],
    },
  ];

  return (
    <section className="py-4 py-md-5 bg-black" id="skills">
      <div className="container">
        <SectionTitle>Skills</SectionTitle>
        <div className="row g-3 g-md-4">
          {skillCategories.map((category, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <Card className="h-100">
                <h5 className="text-white mb-3">{category.title}</h5>
                <ul className="list-unstyled mb-0">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="mb-2 d-flex align-items-center">
                      <span className="text-light">• {skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
