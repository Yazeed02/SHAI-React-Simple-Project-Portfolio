import Card from "./shared/Card";
import SectionTitle from "./shared/SectionTitle";

export default function Contact() {
  return (
    <section className="py-5 bg-black" id="contact">
      <div className="container">
        <SectionTitle>Contact Me</SectionTitle>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <Card className="bg-black">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control bg-dark text-white border-secondary"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control bg-dark text-white border-secondary"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button className="btn btn-outline-light w-100" type="submit">
                  Send Message
                </button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
