
const SIZES = {
    sm: 'h-2',
    md: 'h-5',
    lg: 'h-10',
    xl: 'h-20',
}

interface SeparatorProps {
    size: keyof typeof SIZES
}

export const Separator = ({size}: SeparatorProps) => {
  return (
      <div className={SIZES[size]} />
  )
}
