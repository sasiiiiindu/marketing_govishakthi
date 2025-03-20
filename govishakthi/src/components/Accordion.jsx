"use client"

import { useState } from "react"
import "../styles/components/accordion.css"

function AccordionItem({ value, trigger, children, className = "", ...props }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""} ${className}`} {...props}>
      <button className="accordion-trigger" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        {trigger}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="accordion-icon"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div className="accordion-content">{children}</div>
    </div>
  )
}

function Accordion({ children, className = "", ...props }) {
  return (
    <div className={`accordion ${className}`} {...props}>
      {children}
    </div>
  )
}

export { Accordion, AccordionItem }

