'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimateProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'none'
}

export function Animate({ children, className = '', delay = 0, direction = 'up' }: AnimateProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const fromClass =
    direction === 'up' ? 'translate-y-8 opacity-0' :
    direction === 'left' ? 'translate-x-6 opacity-0' :
    'opacity-0'

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'translate-y-0 translate-x-0 opacity-100' : fromClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function AnimateGroup({ children, className = '', stagger = 100 }: { children: React.ReactNode[]; className?: string; stagger?: number }) {
  return (
    <div className={className}>
      {(children as React.ReactNode[]).map((child, i) => (
        <Animate key={i} delay={i * stagger}>
          {child}
        </Animate>
      ))}
    </div>
  )
}
