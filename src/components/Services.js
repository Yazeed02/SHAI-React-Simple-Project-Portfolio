import Card from "./shared/Card";
import SectionTitle from "./shared/SectionTitle";

export default function Services() {
  const services = [
    {
      icon: "globe",
      title: "Modern Web Development",
      description: "Complete web applications from frontend to backend",
      features: [
        "ASP.NET Core MVC & Web API development",
        "React.js with TypeScript frontends",
        "Bootstrap responsive designs",
        "JWT authentication & authorization",
      ],
    },
    {
      icon: "database",
      title: "Database Solutions",
      description: "Optimized data storage and management systems",
      features: [
        "SQL Server schema design & optimization",
        "Entity Framework Core implementations",
        "Database migration strategies",
      ],
    },
    {
      icon: "pc-display",
      title: "Desktop Applications",
      description: "Robust Windows desktop solutions",
      features: [
        "WPF applications",
        "Windows service development",
        "Legacy system modernization",
        "Desktop database integration",
      ],
    },
    {
      icon: "cart",
      title: "E-Commerce Solutions",
      description: "Complete online shopping platforms",
      features: [
        "Product catalog management",
        "Shopping cart & checkout systems",
        "Admin dashboard & reporting",
      ],
    },
  ];

  return (
    <section className="py-4 py-md-5 bg-black" id="services">
      <div className="container">
        <SectionTitle icon="code-square">Development Services</SectionTitle>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <Card className="h-100 bg-dark border-secondary p-3">
                <div className="text-center mb-3">
                  <i className={`bi bi-${service.icon} text-danger fs-1`}></i>
                </div>
                <h3 className="text-white text-center mb-3">{service.title}</h3>
                <p className="text-light text-center mb-3">
                  {service.description}
                </p>

                <h6 className="text-white mt-4 mb-3">Features:</h6>
                <ul className="text-light ps-3 mb-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      {feature}
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
