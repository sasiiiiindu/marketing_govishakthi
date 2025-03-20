import "../styles/components/button.css"

function Button({ children, variant = "primary", size = "medium", className = "", ...props }) {
  return (
    <button className={`button button-${variant} button-${size} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button

