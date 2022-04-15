import React, {useState} from 'react';
import Link from "next/link";
import classNames from 'classnames';
import ButtonToGo from '../components/ButtonToGo';

const menuItems = require('../config/nav.json');

export default function Nav () {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const showMenu = ()=> {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <div className = {classNames(
    'w-full fixed top-0 left-0 md:h-20',
    'bg-backgroundP/80 bg-opacity-80',  
    'py-2 px-6 md:px-20 h-14',
    )}
    >
      <div className={classNames(
      'flex justify-between items-start',
      'md:mt-2',
      isMenuOpen ? 
      'w-screen' 
      : '' 
      )}
      >
        <Link href={'/'}>
          <img src='/icons/logo.png' alt='Logotipo mappearte' 
          className={classNames(
            'w-32 md:w-40 lg:w-44',
            'cursor-pointer'
          )}
          />
        </Link>
        <button className='' onClick={showMenu}>
          <img 
          src="/icons/menu.png" 
          alt="Icono de menu" 
          className={classNames(
            'absolute right-8 mt-2', 
            'cursor-pointer justify-center',
            'md:hidden',
          )}
          />
        </button>  
      <div className={classNames(
      'flex flex-col md:flex-row items-center',
      isMenuOpen ? 
      'mt-12 pt-4 md:pt-0 bg-backgroundP/60 backdrop-blur-md w-full' 
      : ''
      )}
      >
        <ul className={classNames(
        'ml-3 md:ml-0',
        'items-start md:items-center', 
        'list-none', 
        'h-auto w-60 md:w-80',
        'md:flex md:flex-row',
        isMenuOpen ? 'block md:hidden' : 'hidden md:block'
        )}>
          <Link href={'/test'}>
            <img 
            src="/icons/nofotocolor.png" 
            alt="" 
            className={classNames(
              'cursor-pointer',
              'ml-2', 
              'block md:hidden' 
            )}
            />     
          </Link> 
          <ButtonToGo
          bgColor='Cyan'
          borderColor='Cyan'
          className={classNames(
            'cursor-pointer',
            'text-xs px-2 py-2 mr-4',
            'w-1/3 hidden md:block' 
          )}
          route='/test' 
          >
            Subir Foto
          </ButtonToGo>
          {menuItems.map(({ link, label }, index) => (
            <li
            className={classNames(
              'px-2 py-3 cursor-pointer',
              'hover:underline hover:underline-offset-8'
            )}
            key={`menuItem-${index}`}
            >
              <Link href={link}>
                <a className={classNames(
                  'hover:decoration-lime-400 hover:text-lime-400',
                  'duration-500'
,                )}>{label}</a>
              </Link>
            </li>
          ))}
          <ButtonToGo
          bgColor='Cyan'
          borderColor='Cyan'
          className={classNames(
            'cursor-pointer', 
            'text-xs px-2 py-2',
            'ml-2 mt-3 mb-6 w-1/2',
            'block md:hidden'
            )}
          route='/test' >
            Subir Foto
          </ButtonToGo>
        </ul>
        <Link href={'/test'}>
          <img 
          src="/icons/nofotocolor.png" 
          alt="Imagen de perfil" 
          className={classNames(
            'cursor-pointer',
            'ml-4 ', 
            'hidden md:block' 
          )}
        />
        </Link>
              
       </div>  
      </div>
    </div>
  )
}