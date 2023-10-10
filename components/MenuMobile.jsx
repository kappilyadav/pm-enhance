import Link from 'next/link';
import React from 'react'

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/pages/about" },
    { id: 3, name: "Courses", url: "/courses" },
    { id: 4, name: "Contact", url: "/pages/contact" },
];


const MenuMobile = ({ setMobileMenu }) => {

    return (
        <ul className='flex flex-col lg:hidden font-bold absolute top-[100px] left-0 w-full h-[calc(100vh - 100px)] bg-white border-t
        text-black'>
            {data.map((item) => {
                return (
                    <Link key={item.id} href={item?.url} onClick={() => setMobileMenu(false)}>
                        <li className='py-4 px-8 md:px-16 border-b'>
                            {item.name}
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}

export default MenuMobile