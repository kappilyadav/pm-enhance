import { course1 } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

course1


const CourseCard = () => {
    return (
        <Link
            href={`/course/1`}
            className="transform overflow-hidden bg-white duration-200 md:hover:scale-105 cursor-pointer"
        >
            <Image
                width={500}
                height={500}
                src={course1}
                alt=""
            />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">Product Name</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        $20
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                        20% off
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;