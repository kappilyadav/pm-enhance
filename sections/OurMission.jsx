"use client"

import { shoe8 } from "../assets/images"
import Button from "../components/Button"
import Image from "next/image"
import { BsPatchCheckFill } from "react-icons/bs"



const OurMission = () => {
    return (
        <section className="flex justify-between lg:items-center
        max-lg:flex-col gap-10 w-full max-container">

            <div className="flex flex-1 flex-col justify-start items-center">

                <div className="">
                    <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg text-black">
                        Our
                        <span className="text-gray-600"> Mission</span>
                    </h2>

                    <p className="mt-4 lg:max-w-lg info-text">
                        Ensuring premium comfort and style, our meticulously crafted footwear
                        is designed to elevate your experience, providing you with unmatched
                        quality, innovation, and a touch of elegance.
                    </p>

                    <div className="lg:mt-11 mt-6"><Button label="View details" backgroundColor={"bg-black"} textColor={"text-white"} /></div>
                </div>
            </div>

            <div className="w-full md:mt-10 flex flex-col flex-1 justify-start items-start lg:justify-start lg:items-center">
                {/* <Image src={shoe8} alt="shoe8"
                    width={570} height={522}
                    className="object-contain" /> */}

                <div className="my-3 flex items-center gap-3 border border-black px-16 py-5 rounded-full">
                    <BsPatchCheckFill className="text-3xl" />
                    <p className="text-md">Personality Development</p>
                </div>
                <div className="my-3 flex items-center gap-3 border border-black px-16 py-5 rounded-full">
                    <BsPatchCheckFill className="text-3xl" />
                    <p className="text-md">Personality Development</p>
                </div>
                <div className="my-3 flex items-center gap-3 border border-black px-16 py-5 rounded-full">
                    <BsPatchCheckFill className="text-3xl" />
                    <p className="text-md">Personality Development</p>
                </div>
                <div className="my-3 flex items-center gap-3 border border-black px-16 py-5 rounded-full">
                    <BsPatchCheckFill className="text-3xl" />
                    <p className="text-md">Personality Development</p>
                </div>

            </div>

        </section>
    )
}

export default OurMission