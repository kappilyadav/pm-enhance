"use client"
import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"
import Image from "next/image"


const Footer = () => {
    return (
        <footer className="max-container">

            <div className="flex justify-between items-start
            gap-20 flex-wrap max-lg:flex-col">

                <div className="flex flex-col items-start">

                    <a href="/">
                        {/* <Image src={footerLogo} alt="footerLogo"
                            width={150} height={46} /> */}
                        <h1 className='text-3xl text-white font-bold'>SneakerHub</h1>
                    </a>

                    <p className="mt-6 test-base leading-7
                    font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest SneakerHub store. Find Your perfect Size In Store. Get Rewards</p>

                    <div className="flex items-center gap-5 mt-8">
                        {socialMedia.map((icon) => (
                            <div className="flex justify-center items-center
                            w-12 h-12 bg-white rounded-full cursor-pointer">
                                <Image src={icon.src} alt={icon.alt}
                                    width={24} height={24} />
                            </div>
                        ))}
                    </div>
                </div>


                <div className="flex flex-1 justify-between lg:gap-10 
                gap-20 flex-wrap">
                    {footerLinks.map((section) => (
                        <div key={section}>
                            <h4 className="text-white font-montserrat
                            text-2xl leading-normal font-medium
                            mb-6">{section.title}</h4>
                            <ul>
                                {section.links.map((link) => (
                                    <li key={link.name}
                                        className="mt-3 text-white-400
                                    font-montserrat text-base
                                    leading-normal hover:text-slate-gray
                                    cursor-pointer">
                                        <a>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>


            <div className="flex justify-between font-montserrat text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                    <Image src={copyrightSign} alt="copyright sign"
                        width={20} height={20}
                        className="rounded-full m-0" />

                    <p>Copyright. All rights reserved.</p>
                </div>
                <p className="cursor-pointer">Terms & Conditions</p>
            </div>
        </footer>
    )
}

export default Footer