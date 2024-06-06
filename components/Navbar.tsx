import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '@/public/logo.svg'
import CustomButton from './CustomButton'

export default function Navbar() {
  return (
    <header className='w-full absolute z-10'>
      <nav className='container mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href="/" className='flex justify-center items-center'>
          <Image 
            src={Logo}
            width={118}
            height={18}
            className='object-contain'
            alt="Logo"
          />
        </Link>
        <CustomButton
          title='Sign In'
          containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
          btnType="button"
        />
      </nav>
    </header>
  )
}
