'use client'
import Link from 'next/link';
import { ReactElement } from 'react';
import { IDCardIcon } from '../icons/id-card';
import { MegaphoneIcon } from '../icons/megaphone-icon';
import { GraduationIcon } from '../icons/graduation';
import { IconTranslate } from '../icons/translate';
import { IconSuitcaseFill } from '../icons/suitcase';
import { IconEye } from '../icons/eye';
import { LogoInfoJobs } from '../icons/Logo';


const LINKS = [
  { href: '/portal/contacto', label: 'Información básica', icon: 'id-card' },
  { href: '/portal/presentacion', label: 'Presentacion', icon: 'megaphone' },
  { href: '/portal/conocimientos-y-educacion', label: 'Conocimientos y educación', icon: 'graduation' },
  { href: '/portal/idiomas', label: 'Idomas', icon: 'translate' },
  { href: '/portal/experiencia-laboral', label: 'Experiencia laboral', icon: 'suitcase' },
  { href: '/perfil/:id', label: 'Previsualizar curriculum', icon: 'eye' },
]

type IconMapType = {
  [key: string]: ReactElement
}


const ICON_MAP: IconMapType = {
  'megaphone': <MegaphoneIcon />,
  'id-card': <IDCardIcon />,
  'graduation': <GraduationIcon className="w-6" />,
  'translate' : <IconTranslate className="w-5" />,
  'suitcase': <IconSuitcaseFill className="w-5" />,
  'eye' : <IconEye className="w-5" />
}

export const NavbarLat = () => {

  return (
    <div className='fixed w-2/12 bg-primary mi-h-screen' >

      <nav className="w-full">
        <div className='font-black text-ij-white text-3xl mb-5 bg-white p-5' >
          <Link href='/'>
            <LogoInfoJobs className="w-8 h-8"  />
          </Link>
        </div>
        <div className='px-5 bg-primary'>
        <h6 className="text-primary-l4 opacity-60 border-b border-white/40 pb-3 font-semibold uppercase tracking-widest " >Tu perfil</h6>
        <div className='mt-3' >
          {
            LINKS.map(({ href, label, icon }: { href: string, label: string, icon: keyof IconMapType }) => {
              const path = href.includes(':id') ? href.replace(':id', '123') : href;
              return (
                <div key={`${path}${label}`} className="text-ij-white" >
                  <Link href={path} className={`appearance-none cursor-pointer py-2 px-0 font-light hover:text-ij-black w-full flex items-center gap-1 text-sm`}>
                    {ICON_MAP[icon]}
                    <span>{label}</span>
                  </Link>
                </div>
              )
            })
          }
        </div>
        </div>


      </nav>
    </div>

  )
}
