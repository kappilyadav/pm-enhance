"use client"
import Link from "next/link"
import PopularCourseCard from "../components/PopularCourseCard"
import { products } from "../constants"
import Button from "@/components/Button"
import { fetchDataFromApi } from "@/utils/api"
import { useEffect, useState } from "react"



const PopularCourses = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchCourses();
    }, [])

    const fetchCourses = async () => {
        const courses = await fetchDataFromApi(`/api/courses?populate=*`);

        setData({ ...courses });
    }



    return (
        <section className="max-container max-sm:mt-12">

            <div className="flex flex-col justify-start gap-5">

                <h2 className="text-4xl font-palanquin font-bold text-black">Our <span className="text-gray-600">Best-selling</span> Courses</h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.</p>
            </div>

            <div className="lg:mt-11 mt-6"><Link href="/courses"><Button label="Explore All" backgroundColor={"bg-black"} textColor={"text-white"} /></Link></div>

            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                {data?.data.map((course) => (
                    <Link href={`/pages/course/${course.attributes.slug}`} key={course.id}>
                        <PopularCourseCard data={course} />
                    </Link>
                ))}
                {data?.data.map((course) => (
                    <Link href={`/pages/course/${course.attributes.slug}`} key={course.id}>
                        <PopularCourseCard data={course} />
                    </Link>
                ))}
                {data?.data.map((course) => (
                    <Link href={`/pages/course/${course.attributes.slug}`} key={course.id}>
                        <PopularCourseCard data={course} />
                    </Link>
                ))}
                {data?.data.map((course) => (
                    <Link href={`/pages/course/${course.attributes.slug}`} key={course.id}>
                        <PopularCourseCard data={course} />
                    </Link>
                ))}

            </div>
        </section>
    )
}

export default PopularCourses