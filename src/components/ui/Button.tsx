
interface ButtonProps {
    children: string
    idDisabled?: boolean
    icon?: React.ReactNode
    onClick?: () => void
}

export const Button = ({
    children,
    ...rest
}: ButtonProps) => {
  return (
      <button 
      type="submit" 
      className="bg-accent p-2 hover:bg-orange-600 rounded border border-transparent text-ij-white tracking-widest uppercase" 
      {...rest}
      >
          {children}
      </button>
  )
}
