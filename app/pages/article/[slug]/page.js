"use client"

import { course1 } from '@/assets/images'
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
        <div className="w-full mt-28 md:py-20 max-w-[1280px] px-5 md:px-10 mx-auto">



            {data && (
                <div className="flex flex-col md:px-10 gap-[50px] lg:gap-[100px]">

                    <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            {data.data[0].attributes.title}
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg text-coral-red font-semibold">
                                MRP : ${data.data[0].attributes.price}
                            </p>

                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-12">
                            {`(Also includes all applicable duties)`}
                        </div>



                        <div className='mt-10'>
                            <div className="text-lg font-bold mb-5">
                                article Content:
                            </div>
                            <div className="markdown text-md mb-5">
                                Be cool. Stay cool. The AJ-6 &quot;&quot;Cool Grey&quot;&quot; lets your style take flight with a colourway rooted to Jordan Brand DNA. MJ wore &apos;em when he claimed his first championship and you&apos;ll be wearing &apos;em for—well, whatever you want. Laden with sleek features like dynamic design lines and an iced outsole, these sneakers bring speed and class to any &apos;fit. After all, they were famously inspired by Jordan&apos;s (wait for it) COOL sports car. So lace up and let your kicks do the rest.

                                <br />
                                Colour Shown: White/Cool Grey/Medium Grey Style: CT8529-100
                            </div>
                        </div>
                    </div>
                    {/* right column end */}


                </div>
            )}

            {/* <RelatedProducts /> */}

        </div >
    )
}

export default CourseDetails