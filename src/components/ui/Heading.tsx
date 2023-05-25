import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

interface HeadingProps {
    children: React.ReactNode
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    size: string
    kind: string
}

const KIND: { [key: string]: string } = {
    primary: 'text-blue-400',
    accent: 'text-orange-600',
    gray: 'text-gray-400',
    black: 'text-black/90',
}

const SIZE: { [key: string]: string } = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl',
}

const Heading = ({ children, as: As, kind, size }: HeadingProps) => {

    const classNames = `${playfair.className} ${KIND[kind]} ${SIZE[size]}`

    return (
        <>
            <As className={`${playfair.className} ${classNames} `} >
                {children}
            </As>
            <div className={`${KIND[kind].replace('text', 'bg')} h-1 w-8  rounded-full mb-5`} ></div>
        </>
    )
}

export default Heading