'use client'
import Link from 'next/link';
import { IDCardIcon } from '../icons/id-card';
import { MegaphoneIcon } from '../icons/megaphone-icon';
import { ReactElement } from 'react';


const LINKS = [
  { href: '/portal/contacto', label: 'Información básica', icon: 'id-card' },
  { href: '/portal/presentacion', label: 'Presentacion', icon: 'megaphone' },
  { href: '/portal/conocimientos-y-educacion', label: 'Conocimientos y educación', icon: 'megaphone' },
  { href: '/portal/idomas', label: 'Idomas', icon: 'megaphone' },
  { href: '/portal/experiencia-laboral', label: 'Experiencia laboral', icon: 'megaphone' },
  { href: '/perfil/:id', label: 'Previsualizar curriculum', icon: 'megaphone' },
]

type IconMapType = {
  [key: string]: ReactElement
}


const ICON_MAP: IconMapType = {
  'megaphone': <MegaphoneIcon />,
  'id-card': <IDCardIcon />,
}

export const NavbarLat = () => {

  return (
    <div className='fixed w-2/12' >

      <nav className="p-3 w-full">
        <div className='font-black text-ij-white text-3xl mb-5' >
          <Link href='/'>
            JOSE
          </Link>
        </div>
        <h6 className="text-primary-l4 opacity-60 border-b border-white/40 pb-3 font-semibold uppercase tracking-widest " >Tu perfil</h6>
        <div className='mt-3' >
          {
            LINKS.map(({ href, label, icon }: { href: string, label: string, icon: keyof IconMapType }) => {
              const path = href.includes(':id') ? href.replace(':id', '123') : href;
              return (
                <div key={`${path}${label}`} className="text-ij-white" >
                  <Link href={path} className={`appearance-none cursor-pointer py-1 px-0 font-light hover:text-ij-black w-full flex items-center gap-1 text-sm`}>
                    {ICON_MAP[icon]}
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
