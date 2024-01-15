'use client'
import { ChevronDown, Menu } from 'lucide-react';
import Image from 'next/image';
import { Logo } from './Logo';
import { useEffect, useState } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface UserProps {
  name: string;
  userImage: string | StaticImport;
}

export function Header() {
  const [user, setUser] = useState<UserProps>({ name: '', userImage: '' })

  useEffect(() => {
    const storedUserData = window.localStorage.getItem('user')

    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      setUser(parsedData)
    }
  }, [])
  return (
    <header className='w-full flex items-center justify-between py-4 px-4 sm:px-8 bg-gray-lightmode-800'>
      <div className='flex items-center gap-4'>
        <Menu width={40} height={40} color='white'/>
        <Logo colorDetail='white'/>
      </div>
      <div className='flex items-center gap-4'>
        {user.userImage && <Image className='rounded-full' width={40} height={40} src={user.userImage} alt="image-user" />}
        <span className='flex  items-center gap-4 text-white text-xs'>
          {user?.name}
          <ChevronDown width={20} height={20} />
        </span>
      </div>
    </header>
  )
}