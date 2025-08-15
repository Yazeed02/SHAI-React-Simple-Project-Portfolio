import SectionTitle from "./shared/SectionTitle";
import Card from "./shared/Card";

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      subtitle: "SHAI for AI",
      date: "Amman, Jordan | July 2025 - Present",
      badgeText: "Internship",
      badgeColor: "success",
      points: [
        "Developing responsive web applications using modern frontend technologies (HTML, CSS, JavaScript, React)",
        "Building backend systems with PHP and Laravel framework",
        "Implementing RESTful APIs to connect frontend and backend systems",
        "Learned how to use version control (Git/GitHub)",
        "Participating in code reviews",
        "Debugging and optimizing existing web applications",
      ],
    },
    {
      title: "Technical Support Engineer",
      subtitle: "Professional Telecommunications Incorporation (Protei)",
      date: "Wasfi At-Tall St - Amman | January 2025 - March 2025",
      badgeText: "Full-time",
      badgeColor: "primary",
      points: [
        "Deployed, configured, and troubleshooted telecom systems on-site and remotely",
        "Conducted User Acceptance Testing (UAT) to ensure systems met client requirements",
        "Utilized Linux systems and VMware for system performance enhancement",
        "Diagnosed and resolved technical issues using telecom protocols (SIP, SS7)",
        "Maintained effective communication with clients and team members in English",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      subtitle: "Future Advanced Internet Solutions",
      date: "Khalda-Amman | June 2024 - September 2024",
      badgeText: "Internship",
      badgeColor: "success",
      points: [
        "Developed and maintained web applications, contributing to both front-end and back-end development",
        "Managed databases using SQL Server Management Studio",
        "Designed interactive user interfaces with HTML, CSS, and JavaScript",
        "Worked on key projects including a car rental website and Bookshop online store",
      ],
    },
  ];

  return (
    <section className="py-4 py-md-5 bg-black" id="experience">
      <div className="container">
        <SectionTitle>Experience</SectionTitle>
        <div className="row g-4 justify-content-center">
          {experiences.map((exp, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <Card
                title={exp.title}
                subtitle={exp.subtitle}
                date={exp.date}
                badgeText={exp.badgeText}
                badgeColor={exp.badgeColor}
                className="h-100"
              >
                <ul className="text-light mt-3 mb-0">
                  {exp.points.map((point, i) => (
                    <li key={i} className="mb-2">
                      {point}
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
