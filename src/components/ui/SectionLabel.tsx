interface SectionLabelProps {
  children?: React.ReactNode
  className?: string
  light?: boolean
}

export function SectionLabel({ children, className = '', light = false }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="block w-8 h-px bg-brand-gold opacity-80" aria-hidden="true" />
      <span
        className={`font-sans text-[11px] font-semibold tracking-[0.22em] uppercase ${
          light ? 'text-white/60' : 'text-brand-muted'
        }`}
      >
        {children}
      </span>
    </div>
  )
}
