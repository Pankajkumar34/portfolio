"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from '../assets/logo/plogo.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const pathname = usePathname()
    return (
        <header className='main_header flex items-center my-2 h-[200px]'>
            <div className='container'>
                <div className='main_header1 flex justify-between items-center'>
                    <div className='logo'>
                        <Image src={logo} className='w-[100px] ' />
                    </div>
                    <div className='menus sm:hidden lg:block flex items-center'>
                        <ul className='flex gap-1 p-3 '>
                            <li className={` ${pathname === '/' ? 'active' : ''} cursor-pointer px-[40px]`}><Link href="/">Home</Link></li>
                            <li className='cursor-pointer px-[40px]'><Link href="/about">About</Link></li>
                            <li className='cursor-pointer px-[40px]'><Link href="/Resume">Resume</Link></li>
                            <li className='cursor-pointer px-[40px]'><Link href="/Skills">Skills</Link></li>
                            <li className='cursor-pointer px-[40px]'><Link href="/Exprience">Exprience</Link></li>
                        </ul>
                        <div>
                            <h2>Phone</h2>
                        </div>
                    </div>
                    <div className='relative  z-[99999] '>
                     
                        <FontAwesomeIcon icon={faBars} className='text-[30px]' />
                    </div>

                </div>

            </div>

        </header>
    )
}

export default Navbar