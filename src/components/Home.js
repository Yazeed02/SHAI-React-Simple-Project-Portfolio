import personalImage from "../assets/personal.JPG";
import SocialButton from "./shared/SocialButton";

export default function Home() {
  return (
    <section className="py-4 py-md-5 bg-black" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
            <img
              src={personalImage}
              alt="Yazeed Mwafi"
              className="rounded-circle shadow"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-12 col-md-8">
            <h1
              className="text-white fw-bold mb-3"
              style={{ fontSize: "2rem" }}
            >
              Yazeed Mwafi
            </h1>
            <p className="text-light mb-3" style={{ fontSize: "1.25rem" }}>
              Full-Stack Developer | ASP.NET Core | React | SQL
            </p>
            <p className="text-light mb-4">
              Aspiring full-stack developer with hands-on experience in ASP.NET
              Core MVC, Web APIs, and React. Passionate about building
              efficient, user-focused web applications.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <SocialButton
                icon="envelope-fill"
                href="mailto:yazeed.mwafi2002@gmail.com"
                label="Email Me"
              />
              <SocialButton
                icon="github"
                href="https://github.com/Yazeed02"
                label="GitHub"
              />
              <SocialButton
                icon="linkedin"
                href="https://www.linkedin.com/in/yazeed-mwafi-aaba972b8/"
                label="LinkedIn"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
