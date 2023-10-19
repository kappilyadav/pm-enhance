import React from "react";
import Link from "next/link";

const About = () => {
    return (
        <div className="min-h-[650px] flex items-center w-full max-w-[1280px] px-5 md:px-10 mx-auto">

            <div className="p-5 max-sm:p-3 relative top-24 mb-44">
                <div className="text-2xl font-bold text-[28px] md:text-[34px] mb-5 text-center leading-tight">
                    About Us
                </div>
                <div className="text-xl font-bold mt-12">
                    Our Vision
                </div>
                <div className="text-base mt-7">
                    At PmEnhance, we envision a corporate landscape where employees are not only skilled but also empowered, where personal development is the cornerstone of professional success. We believe that nurturing the individual&apos;s character and skills leads to better leaders, innovative teams, and thriving organizations.
                </div>

                <div className="text-xl font-bold mt-12">
                    Who We Are
                </div>
                <div className="text-base mt-7">
                    We are a dedicated team of experienced coaches, trainers, and facilitators who are passionate about personal development. Our experts bring a wealth of knowledge and a diverse set of skills to help corporate employees harness their true potential.
                </div>

                <div className="text-xl font-bold mt-12">
                    What We Do
                </div>
                <div className="text-base mt-7">
                    <p>
                        At PmEnhance, we specialize in tailoring transformative programs and coaching services designed exclusively for the corporate world. We offer a comprehensive range of services, including:
                    </p>

                    <br />
                    <p>
                        <b>Executive Coaching:</b> Personalized coaching for leaders and managers to enhance their leadership and decision-making capabilities.
                    </p>

                    <br />
                    <p>
                        <b>Leadership Development:</b> Programs designed to cultivate leadership qualities, team collaboration, and strategic thinking.
                    </p>

                    <br />
                    <p>
                        <b>Communication Mastery:</b> Workshops to elevate communication skills, boost confidence, and foster effective workplace interactions.
                    </p>

                    <br />
                    <p>
                        <b>Conflict Resolution:</b> Training sessions to equip employees with conflict resolution skills, promoting a harmonious work environment.
                    </p>

                    <br />
                    <p>
                        <b>Stress Management:</b> Techniques and strategies to manage workplace stress and improve overall well-being.
                    </p>

                    <br />
                    <p>
                        <b>Emotional Intelligence:</b> Building emotional intelligence for better self-awareness, empathy, and relationship management.
                    </p>

                    <br />
                    <p>
                        <b>Career Advancement:</b> Guiding employees toward career progression through goal-setting and skill development.
                    </p>
                </div>


                <div className="text-xl font-bold mt-12">
                    Why Choose Us
                </div>
                <div className="text-base mt-7">
                    <p>
                        <b>Customized Solutions:</b> We understand that each corporate environment is unique. Our programs are tailored to meet the specific needs and goals of your organization.
                    </p>

                    <br />
                    <p>
                        <b>Experienced Team:</b> Our team of seasoned professionals brings years of experience and expertise to guide you on your personal and professional journey.
                    </p>

                    <br />
                    <p>
                        <b>Proven Results:</b> We measure our success by the success of our clients. Many corporate professionals have transformed their careers and lives with our guidance.
                    </p>

                    <br />
                    <p>
                        <b>Commitment to Excellence:</b> We are committed to fostering a culture of excellence, growth, and continuous improvement.
                    </p>
                </div>


                <div className="text-xl font-bold mt-12">
                    Join Us on the Journey
                </div>
                <div className="text-base mt-7">
                    At PmEnhance, we invite you to embark on a journey of self-discovery and professional advancement. Whether you&apos;re an individual looking to enhance your skills or an organization seeking to empower your workforce, we are here to support you every step of the way.
                </div>
                <div className="text-base mt-5 mb-5">
                    Contact us today to explore how we can work together to unlock your true potential in the corporate world.
                </div>

                <Link href="/" className="font-bold">
                    Continue Shopping
                </Link>
            </div>

        </div>
    );
};

export default About;