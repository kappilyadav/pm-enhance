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
        fetchCourseDetails();

        window.scrollTo(0, 0);
    }, [])


    const fetchCourseDetails = async () => {
        const course = await fetchDataFromApi(`/api/courses?populate=*&[filters][slug][$eq]=${params.slug}`);

        setData({ ...course });
    }


    const notify = () => {
        toast.success('Success. Check your cart!', {
            position: "bottom-left",
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

            <ToastContainer />

            {data && (
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">

                    {/* left column start */}
                    <div className="w-full md:w-auto flex-[0.75] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        {/* <CourseDetailsCarousel /> */}

                        <Image src={course1} height={550} alt={data.data[0].attributes.name} />
                    </div>
                    {/* left column end */}


                    {/* right column start */}
                    <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            {data.data[0].attributes.name}
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            {data.data[0].attributes.subname}
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


                        {/* ADD TO CART BUTTON START */}

                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                            onClick={() => {
                                dispatch(addToCart({
                                    ...data.data[0]
                                }));

                                notify();
                            }}
                        >
                            Add to cart
                        </button>

                        {/* ADD TO CART BUTTON END */}



                        <div className='mt-10'>
                            <div className="text-lg font-bold mb-5">
                                Course Details:
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