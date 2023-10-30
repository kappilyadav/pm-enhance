"use client"
import Link from "next/link"
import LatestBlogCard from "../components/LatestBlogCard"
import { articles } from "../constants"
import Button from "@/components/Button"
import { fetchDataFromApi } from "@/utils/api"
import { useEffect, useState } from "react"



const LatestBlogs = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchBlogs();
    }, [])

    const fetchBlogs = async () => {
        const blogs = await fetchDataFromApi(`/api/blogs?populate=*`);

        setData({ ...blogs });
    }

    return (
        <section className="max-container max-sm:mt-12">

            <div className="flex flex-col justify-start gap-5">

                <h2 className="text-4xl font-palanquin font-bold text-black">Our <span className="text-gray-600">Latest</span> Articles</h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.</p>
            </div>

            <div className="lg:mt-11 mt-6"><Link href="/articles"><Button label="Explore All" backgroundColor={"bg-black"} textColor={"text-white"} /></Link></div>

            <div className="mt-16 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-16">
                {data?.data.map((article) => (
                    <Link href={`/pages/article/${article.attributes.slug}`}>
                        <LatestBlogCard key={article.id} data={article} />
                    </Link>
                ))}
                {data?.data.map((article) => (
                    <Link href={`/pages/article/${article.attributes.slug}`}>
                        <LatestBlogCard key={article.id} data={article} />
                    </Link>
                ))}
                {data?.data.map((article) => (
                    <Link href={`/pages/article/${article.attributes.slug}`}>
                        <LatestBlogCard key={article.id} data={article} />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default LatestBlogs