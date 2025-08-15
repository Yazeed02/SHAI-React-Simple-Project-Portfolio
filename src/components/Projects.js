import Card from "./shared/Card";
import SectionTitle from "./shared/SectionTitle";

export default function Projects() {
  const projects = [
    {
      title: "Car Rental System",
      description: "Vehicle booking platform with admin controls",
      details:
        "ASP.NET MVC application with SQL Server backend for car rentals, bookings, and management.",
      githubLink: "https://github.com/Yazeed02/CarRentalSystem",
    },
    {
      title: "Geta3.com",
      description: "Online marketplace for vehicle parts",
      details:
        "MERN stack platform for buying/selling car parts with inventory management tools.",
      githubLink: "https://github.com/Yazeed02/Geta3.com",
    },
    {
      title: "Gaming Store",
      description: "E-commerce platform for gaming products",
      details:
        "ASP.NET Core MVC application with product search, cart, orders, and admin panel.",
      githubLink: "https://github.com/Yazeed02/GamingStore",
    },
    {
      title: "Color Picker",
      description: "Interactive color selection tool",
      details:
        "HTML/CSS application that dynamically changes navbar color based on user selection.",
      githubLink: "https://github.com/Yazeed02/JYIF-Color-Picker",
    },
    {
      title: "HTML & CSS Exercises",
      description: "Front-end development practice exercises",
      details:
        "Collection of exercises covering forms, selectors, and responsive layouts.",
      githubLink: "https://github.com/Yazeed02/HTML-And-CSS-Exercises",
    },
    {
      title: "Newspaper Project",
      description: "Digital newspaper layout implementation",
      details:
        "HTML/CSS project replicating newspaper design with responsive elements.",
      githubLink: "https://github.com/Yazeed02/JYIF-Capstone-Project-Newspaper",
    },
    {
      title: "ToDoList App",
      description: "Task management application",
      details:
        "ASP.NET Core MVC app with dark mode and priority-based task organization.",
      githubLink: "https://github.com/Yazeed02/ToDoListApp",
    },
    {
      title: "Coffee Shop POS",
      description: "Point of sale system for cafes",
      details:
        "C# WPF application for order processing, receipts, and user management.",
      githubLink: "https://github.com/Yazeed02/CoffeeShopManagementSystem",
    },
    {
      title: "Face Mask Detection",
      description: "IoT-based safety monitoring system",
      details:
        "Python/OpenCV application with Arduino integration for mask detection alerts.",
      githubLink: "https://github.com/Yazeed02/FaceMaskDetectionSystem",
    },
  ];

  return (
    <section className="py-4 py-md-5 bg-black" id="projects">
      <div className="container">
        <SectionTitle>Projects</SectionTitle>
        <div className="row g-3 g-md-4">
          {projects.map((project, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <Card className="h-100 bg-dark border-secondary">
                <div className="d-flex flex-column h-100">
                  <div>
                    <h5 className="text-white mb-2">{project.title}</h5>
                    <p className="text-light mb-2">{project.description}</p>
                    <p className="text-secondary small mb-3">
                      {project.details}
                    </p>
                  </div>
                  <a
                    href={project.githubLink}
                    className="btn btn-outline-light btn-sm mt-auto align-self-start my-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-github me-1"></i> View Code
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
