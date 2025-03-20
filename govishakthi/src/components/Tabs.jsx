"use client"

import React from "react"

import { useState } from "react"
import "../styles/components/tabs.css"

function Tabs({ children, defaultValue, className = "", ...props }) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  // Clone children and pass activeTab state
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { activeTab, setActiveTab })
    }
    return child
  })

  return (
    <div className={`tabs ${className}`} {...props}>
      {enhancedChildren}
    </div>
  )
}

function TabsList({ children, activeTab, setActiveTab, className = "", ...props }) {
  // Clone children and pass activeTab state
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        isActive: child.props.value === activeTab,
        onClick: () => setActiveTab(child.props.value),
      })
    }
    return child
  })

  return (
    <div className={`tabs-list ${className}`} role="tablist" {...props}>
      {enhancedChildren}
    </div>
  )
}

function TabsTrigger({ children, value, isActive, onClick, className = "", ...props }) {
  return (
    <button
      className={`tabs-trigger ${isActive ? "active" : ""} ${className}`}
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

function TabsContent({ children, value, activeTab, className = "", ...props }) {
  if (value !== activeTab) return null

  return (
    <div className={`tabs-content ${className}`} role="tabpanel" {...props}>
      {children}
    </div>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

