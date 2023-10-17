"use client"

import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import { man } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants"
import Image from 'next/image'
import Link from "next/link"


const Hero = () => {

    const [bigShoeImg, setBigShoeImg] = useState(man);

    return (
        <section id="home" className="w-full flex 
        xl:flex-row flex-col justify-center min-h-screen 
        gap-10 max-container">

            <div className="relative lg:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-32">


                <h1 className="mt-3 text-[95px] font-palanquin font-bold max-sm:text-[55px] leading-[80px] max-sm:leading-[60px]">
                    <span className="">Unlocking </span>
                    <span className="text-gray-500">Potential</span>
                    <br />
                    <span className="text-gray-500">& </span>
                    <span className="">Pioneering</span>
                    <span className="text-gray-500"> Growth</span>
                </h1>


                <div className="mt-14 flex gap-4 max-sm:flex-col">
                    <Link href={"./courses"}><Button label="Mentorship" backgroundColor={"bg-black"} textColor={"text-white"} iconURL={arrowRight} /></Link>
                    <Link href={"./pages/about"}><Button label="Learn more" backgroundColor={"bg-white"} /></Link>
                </div>


                <div className="flex justify-start items-start 
                flex-wrap gap-16 w-full mt-20">

                    {statistics.map((stat) => (
                        <div key={stat.id}>
                            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                            <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-cover lg:w-2/5 relative flex justify-end" >

                <Image src={bigShoeImg} alt="Shoe collection"
                    className="object-contain lg:scale-110" />

            </div>
        </section >
    )
}

export default Hero