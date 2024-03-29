"use client"

import CourseCard from '@/components/CourseCard'
import { fetchDataFromApi } from '@/utils/api'
import React, { useEffect, useState } from 'react'



const Courses = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchCourses();

        window.scrollTo(0, 0);
    }, [])


    const fetchCourses = async () => {
        const courses = await fetchDataFromApi(`/api/courses?populate=*`);

        setData({ ...courses });
    }


    return (
        <div className="w-full lg:mt-16 md:mt-12 max-md:mt-28 md:py-20 relative max-w-[1280px] px-5 md:px-10 mx-auto">
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                <div className="text-[28px] md:text-[34px] mb-5 font-bold leading-tight">
                    Our Courses
                </div>
            </div>

            {/* products grid start */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">

                {data?.data.map((course) => {
                    return (
                        <>
                            <CourseCard key={course.id} data={course} />
                            <CourseCard key={course.id} data={course} />
                            <CourseCard key={course.id} data={course} />
                            <CourseCard key={course.id} data={course} />
                            <CourseCard key={course.id} data={course} />
                            <CourseCard key={course.id} data={course} />
                        </>
                    )
                })}

            </div>
            {/* products grid end */}
        </div>
    )
}

export default Courses