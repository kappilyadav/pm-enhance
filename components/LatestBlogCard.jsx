"use client"

import { star } from "../assets/icons"
import { man } from "../assets/images"
import download from "../assets/images/download.jpeg"
import article from "../assets/images/article.webp"
import Image from "next/image"


const LatestBlogCard = ({ imgURL, name, price }) => {
    return (
        // <div className="flex flex-1 flex-col w-full max-sm:w-full justify-center items-center rounded-sm border">
        //     <Image src={article} width={1000} height={500} alt={name}
        //         className="rounded-md object-cover w-[280px] h-[280px] sm:h-auto sm:mt-8 md:hover:scale-105 md:duration-300 cursor-pointer" />

        //     {/* <div className="mt-8 flex justify-start gap-2.5">
        //         <Image src={star} alt="rating" width={24} height={24} />
        //     </div> */}

        //     <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">{'How do you change your personality'}</h3>
        //     <p className="font-montserrat text-md leading-normal text-slate-gray">(How do you change your personality how do you change your personality)</p>
        //     {/* <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p> */}
        // </div >

        <div className='bg-white rounded-xl overflow-hidden drop-shadow-sm mr-4'>
            <Image className='h-56 w-full object-cover' src={article} />
            <div className='p-4'>
                <h3 className='font-montserrat font-bold text-xl my-1'>{'How do you change your personality'}</h3>
                <p className='font-palanquin text-gray-600 text-lg'>{'blog.attributes.blogTitle'}</p>
            </div>
        </div>
    )
}

export default LatestBlogCard