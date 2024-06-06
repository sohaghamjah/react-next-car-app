import React from 'react'
import Image from 'next/image'
import Logo from '@/public/logo.svg'
import { footerLinks } from '@/constants'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-200'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-center gap-6'>
          <Image src={Logo} width={118} height={18} alt='Logo' />
          <p className='text-base text-gray-700'>
            Carhub 2024 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className='footer__links'>
          {footerLinks.map((link) => (
            <div key={link.title} className='footer__link'>
              <h3 className='fontBold'>{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} className='text-gray-500'>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between items-center flex-wrap mt-10  border-t border-gray-200 sm:px-16 px-6 py-5'>
        <p className='text-gray-500'>
          @2024 CarHub. All Rights Reserved
        </p>
        <div className='footer__copyrights-link'>
          <Link href="/" className='text-gray-500'>Privacy Policy</Link>
          <Link href="/" className='text-gray-500'>Termis Of Use</Link>
        </div>
      </div>
    </footer>
  )
}
