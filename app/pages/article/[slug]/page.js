"use client"

import { course1 } from '@/assets/images'
import article from "@/assets/images/article.webp"
import { fetchDataFromApi } from '@/utils/api'
import Image from 'next/image'
import Link from 'next/link'
//import RelatedProducts from '@/components/RelatedProducts'
import React, { useEffect, useState } from 'react'

//Redux
import { useDispatch } from 'react-redux'
import { addToCart } from '@/store/cartSlice'

//React-Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactMarkdown from 'react-markdown'



const CourseDetails = ({ params }) => {

    const dispatch = useDispatch();

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchArticleDetails();
    }, [])


    const fetchArticleDetails = async () => {
        const article = await fetchDataFromApi(`/api/blogs?populate=*&[filters][slug][$eq]=${params.slug}`);

        setData({ ...article });
    }


    const notify = () => {
        toast.success('Success. Check your cart!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }


    return (
        // <div className="w-full mt-28 md:py-20 max-w-[1280px] px-5 md:px-10 mx-auto">

        //     {data && (
        //         <div className="flex flex-col md:px-10 gap-[50px] lg:gap-[100px]">

        //             <div className="flex-[1] py-3">
        //                 {/* PRODUCT TITLE */}
        //                 <div className="text-[34px] font-semibold mb-2 leading-tight">
        //                     {data.data[0].attributes.title}
        //                 </div>

        //                 {/* PRODUCT PRICE */}
        //                 <div className="flex items-center">
        //                     <p className="mr-2 text-lg text-coral-red font-semibold">
        //                         MRP : ${data.data[0].attributes.price}
        //                     </p>

        //                 </div>

        //                 <div className="text-md font-medium text-black/[0.5]">
        //                     incl. of taxes
        //                 </div>
        //                 <div className="text-md font-medium text-black/[0.5] mb-12">
        //                     {`(Also includes all applicable duties)`}
        //                 </div>



        //                 <div className='mt-10'>
        //                     <div className="text-lg font-bold mb-5">
        //                         article Content:
        //                     </div>
        //                     <div className="markdown text-md mb-5">
        //                         Be cool. Stay cool. The AJ-6 &quot;&quot;Cool Grey&quot;&quot; lets your style take flight with a colourway rooted to Jordan Brand DNA. MJ wore &apos;em when he claimed his first championship and you&apos;ll be wearing &apos;em for—well, whatever you want. Laden with sleek features like dynamic design lines and an iced outsole, these sneakers bring speed and class to any &apos;fit. After all, they were famously inspired by Jordan&apos;s (wait for it) COOL sports car. So lace up and let your kicks do the rest.

        //                         <br />
        //                         Colour Shown: White/Cool Grey/Medium Grey Style: CT8529-100
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* right column end */}


        //         </div>
        //     )}

        //     {/* <RelatedProducts /> */}

        // </div >

        <div className='w-full pb-10 bg-[#f9f9f9] rounded-2xl max-md:rounded-none mt-32 max-sm:mt-24 mb-28 max-sm:mb-0 max-w-[1280px] px-5 md:px-10 mx-auto'>

            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
    md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-14 max-sm:pt-10 ss:pt-20 text-black justify-center'>

                <div className='col-span-2 max-md:col-span-1'>
                    <Image className='h-56 w-full object-cover' src={article} width={1000} height={1000} />
                    <h1 className='font-bold text-3xl my-1 pt-5 leading-8'>{'How do you change your personality'}</h1>
                    <div className='pt-5'><ReactMarkdown className='line-break'>{`Free Node.js hosting platforms to deploy your app
Ok, let’s cut the rant and get to deploying a demo application. For this illustration I will use A node.js Express API that talks with a PostgreSQL database on ElephantSQL.

This is a simple quotes API and you can find the code open-source on Github. Time to see this app hosted for free on Render.

Render
Render is a relatively new company that used to provide only static hosting for free. Now it provides an array of free servcies including Node.js and Docker hosting. The pricing page lists static site, services, PostgreSQL and Redis for free. There is a catch for PostgreSQL though, it runs free for 90 days only`}</ReactMarkdown></div>

                </div>

                <div className='max-md:mt-10 items-center w-full bg-white rounded-xl drop-shadow-md py-5 max-h-[250px]'>
                    <div>
                        <Image className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={article} width={200} height={200} />
                        <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{'Parul Siddiqui'}</h1>
                        <p className='text-center text-gray-900 font-medium'>{'Author, Founder'}</p>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default CourseDetails