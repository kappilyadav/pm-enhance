"use client"

import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import MenuMobile from './MenuMobile'
import { BsCart } from 'react-icons/bs'
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux'


const Nav = ({ cartIcon }) => {

    const { cartItems } = useSelector(state => state.cart);

    const currentPath = usePathname();

    if (currentPath == '/') {
        cartIcon = null;
    }


    const [mobileMenu, setMobileMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setlastScrollY] = useState(0);


    const controlNavbar = () => {
        if (window.scrollY > 200) {

            if (window.scrollY > lastScrollY) {
                setShow("-translate-y-20")
            }
            // else {
            //     setShow("shadow-sm")
            // }
        }
        else {
            setShow("translate-y-0")
        }

        setlastScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);

        return () => {
            window.removeEventListener("scroll", controlNavbar);
        }
    }, [lastScrollY])



    return (
        <header className={`padding-x py-8 max-lg:py-6 absolute top-0 z-10 w-full ${show}`} >
            <nav className='flex justify-between items-center max-container'>
                <Link href="/">
                    {/* <Image src={headerLogo} alt="Logo" height={29} width={130} /> */}
                    <h1 className='text-2xl text-black font-bold'>PmEnhance</h1>
                </Link>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <Link className='font-montserrat leading-normal text-lg text-slate-gray'
                                href={item.href}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className='flex items-center justify-center gap-2'>

                    {cartIcon && <div className='relative w-8 md:w-12 h-8 md:h-12 rounded-full hover:bg-black/[0.05] cursor-pointer flex items-center justify-center'>
                        <Link href={`/cart`}>
                            <BsCart className='text-[20px] md:text-[23px]' />
                            {cartItems.length > 0 &&
                                (
                                    <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]'>
                                        {cartItems.length}
                                    </div>
                                )
                            }
                        </Link>
                    </div>}

                    {/* Mobile Menu start */}

                    <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex lg:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>

                        {mobileMenu ? (
                            <VscChromeClose className='text-[20px]' onClick={() => setMobileMenu(false)} />
                        ) : (
                            <div className='hidden max-lg:block cursor-pointer w-5 h-5' onClick={() => setMobileMenu(true)}>
                                <Image src={hamburger} alt="Hamburger" width={20} height={20} />
                            </div>
                        )}
                    </div>
                </div>
            </nav>


            <div>
                {mobileMenu && <MenuMobile
                    setMobileMenu={setMobileMenu} />}

            </div>

        </header >
    )
}

export default Nav