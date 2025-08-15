const Card = ({
  title,
  subtitle,
  date,
  badgeText,
  badgeColor = "primary",
  children,
  className = "",
}) => {
  return (
    <div className={`card bg-dark border-secondary h-100 ${className}`}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h4 className="card-title text-white">{title}</h4>
            {subtitle && <h6 className="text-secondary">{subtitle}</h6>}
            {date && <p className="text-light small">{date}</p>}
          </div>
          {badgeText && (
            <span className={`badge bg-${badgeColor}`}>{badgeText}</span>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;
