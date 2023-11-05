"use client"

import {
  CustomerReviews, Footer, Hero, PopularCourses, LatestBlogs, Services,
  SpecialOffer, OurMission, Subscribe
} from '../sections'


const Home = () => (
  <main className="relative">
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularCourses />
    </section>
    <section className="padding bg-pale-blue">
      <OurMission />
    </section>
    {/* <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">2
      <SpecialOffer />
    </section> */}
    <section className="padding">
      <CustomerReviews />
    </section>
    <section className="padding bg-pale-blue">
      <LatestBlogs />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
  </main>
)

export default Home;