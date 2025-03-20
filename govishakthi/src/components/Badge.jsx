import "../styles/components/badge.css"

function Badge({ children, variant = "default", className = "", ...props }) {
  return (
    <span className={`badge badge-${variant} ${className}`} {...props}>
      {children}
    </span>
  )
}

export default Badge

