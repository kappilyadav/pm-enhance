"use client"

import {
  CustomerReviews, Footer, Hero, PopularCourses, PopularBlogs, Services,
  SpecialOffer, OurMission, Subscribe
} from '../sections'

import Nav from '../components/Nav'

const Home = () => (
  <main className="relative">
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding bg-[#F5F6FF]">
      <PopularCourses />
    </section>
    <section className="padding">
      <OurMission />
    </section>
    {/* <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">2
      <SpecialOffer />
    </section> */}
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    {/* <section className="padding">
      <PopularBlogs />
    </section> */}
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
  </main>
)

export default Home;