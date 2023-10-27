"use client"

import { star } from "../assets/icons"
import { man } from "../assets/images"
import download from "../assets/images/download.jpeg"
import Image from "next/image"


const LatestBlogCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <Image src={download} width={''} height={''} alt={name}
                className="w-[280px] h-[280px] sm:h-auto sm:mt-8 md:hover:scale-105 md:duration-300 cursor-pointer" />

            {/* <div className="mt-8 flex justify-start gap-2.5">
                <Image src={star} alt="rating" width={24} height={24} />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
            </div> */}

            <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">{'How do you change your personality'}</h3>
            {/* <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p> */}
        </div >
    )
}

export default LatestBlogCard