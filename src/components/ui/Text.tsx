import { Titillium_Web } from 'next/font/google'
const titilium = Titillium_Web({subsets: ['latin'],  weight: ['400'],})

interface TextProps {
    children: React.ReactNode
}

export const Text = ({
    children
}: TextProps) => {
  return (
      <p className={`${titilium.className} mb-3 leading-relaxed`} >{children}</p>
  )
}
