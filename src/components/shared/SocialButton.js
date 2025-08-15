const SocialButton = ({ icon, href, label, className = "" }) => {
  return (
    <a
      href={href}
      className={`btn btn-outline-light ${className}`}
      target="_blank"
      rel="noreferrer"
    >
      <i className={`bi bi-${icon} me-2`}></i>
      {label}
    </a>
  );
};

export default SocialButton;
