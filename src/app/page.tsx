'use client'
import { useState } from 'react';
import {ImageCustomizable} from '../components/ImageCustomizable'
import { FormEvent } from 'react'
import { notification } from '@/utils/notification';
import { useRouter } from 'next/navigation'
import { Logo } from '@/components/Logo';
 
export default function Home() {
  const [imageValue, setImageValue] = useState('');
  const router = useRouter()

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string; 

    if(!name || !imageValue) {
      notification({
        title: 'Formulario Incompleto', 
        message: 'Preencha todos os campos do formulário', 
        type: 'error',
      })
      return
    }

    const user = {
      name: name,
      userImage: imageValue
    }

    localStorage.setItem("user", JSON.stringify(user));
    router.push('/pergunta-satisfacao')
  }


  return (
    <main className='w-full h-screen flex items-center justify-center bg-gray-lightmode-800'>
      <div className='w-full max-w-2xl py-10 px-5 rounded-2xl bg-white'>
        <div className='flex items-center justify-center mb-5'>
          <Logo />
        </div>
        <form onSubmit={onSubmit} className='flex flex-col gap-5'>
          <input type="text" name='name' placeholder='Nome' className='w-full bg-gray-100 outline-none py-2 px-3 rounded-lg' />
          <ImageCustomizable imageValue={imageValue} setImageValue={setImageValue}/>
          <button type='submit' className='inline-block w-fit py-4 px-10 rounded-full bg-yellow-lightmode-600 text-black font-bold'>Ir para Pesquisa</button>
        </form>
      </div>
    </main>
  )
}
