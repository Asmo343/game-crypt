import { GithubIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const actualYear = new Date().getFullYear();
const Footer = () => {
  return (
    <div className='bg-dark-100 p-4'>
        <div className='pl-2 pr-2 flex'>
            <p className='text-white text-[1rem]'>© 2024-{actualYear} <Link href="https://asmocore.eu" className="text-blue-700 hover:text-blue-800">AsmoCore</Link>. All rights reserved.</p>
            <div className='flex-grow' />
            <Link href='https://github.com/Asmo343/game-crypt'>
                <GithubIcon className='text-white'/>
            </Link>
        </div>
    </div>
  )
}

export default Footer
