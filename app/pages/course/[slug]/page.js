"use client"

import { course1 } from '@/assets/images'
//import CourseDetailsCarousel from '@/components/CourseDetailsCarousel'
import Image from 'next/image'
//import RelatedProducts from '@/components/RelatedProducts'
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'


const Course = ({ params }) => {
    return (
        <div className="w-full mt-28 md:py-20 max-w-[1280px] px-5 md:px-10 mx-auto">

            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                {/* left column start */}
                <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                    {/* <CourseDetailsCarousel /> */}

                    <Image src={course1} height={550} alt='course image' />
                </div>
                {/* left column end */}

                {/* right column start */}
                <div className="flex-[1] py-3">
                    {/* PRODUCT TITLE */}
                    <div className="text-[34px] font-semibold mb-2 leading-tight">
                        Scaled Scrum Master Certified Course
                    </div>

                    {/* PRODUCT SUBTITLE */}
                    <div className="text-lg font-semibold mb-5">
                        Sacled Scrum Certification
                    </div>

                    {/* PRODUCT PRICE */}
                    <div className="flex items-center">
                        <p className="mr-2 text-lg text-coral-red font-semibold">
                            MRP : &#8377;19,695.00
                        </p>

                    </div>

                    <div className="text-md font-medium text-black/[0.5]">
                        incl. of taxes
                    </div>
                    <div className="text-md font-medium text-black/[0.5] mb-12">
                        {`(Also includes all applicable duties)`}
                    </div>

                    {/* PRODUCT SIZE RANGE START */}

                    <div className="mb-10">
                        {/* HEADING START */}
                        {/* <div className="flex justify-between mb-2">
                            <div className="text-md font-semibold">
                                Select Size
                            </div>
                            <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                Select Guide
                            </div>
                        </div> */}
                        {/* HEADING END */}

                        {/* SIZE START */}
                        {/* <div id="sizesGrid" className="grid grid-cols-3 gap-2" >
                            <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                UK 6
                            </div>
                            <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                UK 7
                            </div>
                            <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                UK 8
                            </div>
                            <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                UK 9
                            </div>
                            <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50'>
                                UK 10
                            </div>
                        </div> */}
                        {/* SIZE END */}

                        {/* SHOW ERROR START */}

                        {/* <div className="text-red-600 mt-1">
                            Size selection is required
                        </div> */}

                        {/* SHOW ERROR END */}
                    </div>

                    {/* PRODUCT SIZE RANGE END */}


                    {/* ADD TO CART BUTTON START */}
                    <button
                        className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                    >
                        Add to cart
                    </button>
                    {/* ADD TO CART BUTTON END */}

                    {/* WHISHLIST BUTTON START */}
                    {/* <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                        Whishlist
                        <IoMdHeartEmpty size={20} />
                    </button> */}
                    {/* WHISHLIST BUTTON END */}

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

            {/* <RelatedProducts /> */}

        </div >
    )
}

export default Course