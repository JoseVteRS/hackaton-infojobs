'use client'
import Link from 'next/Link';
import { ICONS } from "../icons";


const LINKS = [
  { href: '/contacto', label: 'Información básica', icon: 'id-card' },
  { href: '/presentacion', label: 'Presentacion', icon: 'megaphone' },
  { href: '/conocimientos-y-educacion', label: 'Conocimientos y educación', icon: 'megaphone' },
  { href: '/idomas', label: 'Idomas', icon: 'language' },
  { href: '/experiencia-laboral', label: 'Experiencia laboral', icon: 'briefcase' },
]

const isCurrentPath = (href: string) => {
  if (typeof window !== 'undefined') {
    return window.location.pathname === href
  }
  return false
}

const ICON_MAP = {
  'megaphone': ICONS.megaphone,
  'id-card': ICONS["id-card"],
}

export const NavbarLat = () => {

  return (
    <div className='fixed w-2/12' >

      <nav className="p-3 w-full">
        <div className='font-black text-ij-white text-3xl mb-5' >  INFOJOBS  </div>
        <h6 className="text-primary-l4 opacity-60 border-b border-primary-l4 pb-3 uppercase tracking-widest " >Tu perfil</h6>
        <div className='mt-3' >
          {
            LINKS.map(({ href, label, icon }) => {
              console.log(href, label);

              return (
                <div key={`${href}${label}`} className="text-ij-white" >
                  <Link href={href} className={`appearance-none cursor-pointer py-1 px-0  hover:text-ij-black w-full flex items-center gap-1 text-sm ${isCurrentPath(href) ? 'font-bold' : ''}`}>
                    <span>{label}</span>
                  </Link>
                </div>
              )
            })
          }
        </div>

      </nav>
    </div>

  )
}
