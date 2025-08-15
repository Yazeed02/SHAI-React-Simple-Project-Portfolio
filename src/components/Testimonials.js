import SectionTitle from "./shared/SectionTitle";
import Card from "./shared/Card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mohammad Ali",
      role: "CEO at JYIF",
      content:
        "Yazeed demonstrated exceptional skills during his internship. His work on our web application was professional and delivered ahead of schedule.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "CTO at Protei",
      content:
        "One of the most technically capable developers we've worked with. His problem-solving skills are outstanding.",
      rating: 4,
    },
    {
      name: "David Wilson",
      role: "Project Manager",
      content:
        "Yazeed's attention to detail and clean code practices made our collaboration seamless. Highly recommended!",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <i
          key={i}
          className={`bi bi-star${i < rating ? "-fill" : ""} text-warning`}
        ></i>
      ));
  };

  return (
    <section className="py-4 py-md-5 bg-black" id="testimonials">
      <div className="container">
        <SectionTitle icon="chat-quote">Testimonials</SectionTitle>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <Card className="h-100 bg-dark border-secondary p-4">
                <div className="d-flex justify-content-between mb-3">
                  <div>
                    <h5 className="text-white mb-1">{testimonial.name}</h5>
                    <p className="text-secondary small mb-0">
                      {testimonial.role}
                    </p>
                  </div>
                  <div>{renderStars(testimonial.rating)}</div>
                </div>
                <p className="text-light mb-0">
                  <i className="bi bi-quote text-danger fs-3 me-2"></i>
                  {testimonial.content}
                </p>
              </Card>
            </div>
          ))}
        </div>

        {/* AI Disclosure Note */}
        <div className="text-center text-white mt-4">
          <p className="small">
            <i className="bi bi-info-circle me-2"></i>
            These are representative testimonials generated to showcase
            potential feedback. Actual client testimonials will be added as
            received.
          </p>
        </div>
      </div>
    </section>
  );
}
