import React, {useState} from 'react';
import Link from "next/link";
import classNames from 'classnames';
import ButtonToGo from '../components/ButtonToGo';

const menuItems = require('../config/nav.json');

export default function Nav () {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const showMenu = ()=> {
    console.log('Esta abierto: ', isMenuOpen)
    setMenuOpen(!isMenuOpen)
  }

  return (
    <div className = {classNames(
    'w-full fixed top-0 left-0 md:h-20 ',
    'bg-backgroundP/80 bg-opacity-80',  
    'py-2 px-6 md:px-20',
    isMenuOpen ? 
      'h-14 ' 
      : 'h-14'
    )}
    >
      <div className={classNames(
      'flex justify-between items-start',
      'md:mt-2',
      )}
      >
        <Link href={'/'}>
          <img src='/icons/logo.png' alt='Logotipo mappearte' 
          className={classNames(
            'min-w-fit mt-2 md:mt-1',
            'md:w-64'
          )}
          />
        </Link>
        <button className='' onClick={showMenu}>
          <img src="/icons/menu.png" alt="Icono de menu" 
          className={classNames(
            'absolute right-8 mt-4 ', 
            'cursor-pointer justify-center',
            'md:hidden',
          )}
          />
        </button>  
      <div className={classNames(
      'flex flex-col md:flex-row items-center',
      isMenuOpen ? 
      'bg-backgroundP/90 divide-y-2 divide-slate-400/25 max-h-full h-auto mt-10 pt-4 md:pt-0 w-64' 
      : 'h-8'
      )}
      >
        <ul className={classNames(
        'ml-3 md:ml-0 md:mt-8',
        'items-start md:items-center', 
        'list-none', 'h-auto w-60 md:w-96',
        'md:flex md:flex-row',
        isMenuOpen ? 'block md:hidden' : 'hidden md:block'
        )}>
          <img src="/icons/nofotocolor.png" alt="" className='ml-4 block md:hidden'/>      
          <ButtonToGo
          bgColor='Cyan'
          borderColor='Cyan'
          className='text-xs px-2 py-2 w-1/3 hidden md:block'
          route='/test' >
            Subir Foto
          </ButtonToGo>
          {menuItems.map(({ link, linkColor, label }, index) => (
            <li
            className={`hover:underline hover:underline-offset-8 px-2 py-3`}
            key={`menuItem-${index}`}
            >
              <Link href={link}>
                <a className={`${linkColor} duration-500`}>{label}</a>
              </Link>
            </li>
          ))}
          <ButtonToGo
          bgColor='Cyan'
          borderColor='Cyan'
          className='text-xs px-2 py-2 ml-4 mt-3 w-1/2 block md:hidden'
          route='/test' >
            Subir Foto
          </ButtonToGo>
        </ul>
        <img src="/icons/nofotocolor.png" alt="" className='ml-4 md:mt-8 invisible md:visible'
        />      
       </div>  
      </div>
    </div>
  )
}