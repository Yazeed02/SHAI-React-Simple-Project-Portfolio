export default function Footer() {
  return (
    <footer className="py-4 border-top border-secondary text-center">
      <div className="container-fluid">
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a
            href="mailto:yazeed.mwafi2002@gmail.com"
            className="text-white fs-4"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
          <a
            href="https://github.com/Yazeed02"
            className="text-white fs-4"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yazeedmwafi/"
            className="text-white fs-4"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <p className="text-secondary small mb-0">
          © 2025 Yazeed Mwafi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
