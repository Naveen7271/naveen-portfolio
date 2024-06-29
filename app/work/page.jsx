"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: 'Weather App',
        title: 'Naveen Portfolio',
        description: 'Weather App using React.js. It allows users to search for the weather conditions of any city in the world and provides current weather information. The app fetches weather data using the SheCodes Weather API.',
        stack: [
            {
                name: "React.js"
            }, {
                name: "HTML"
            }, {
                name: "CSS"
            },
            {
                name: "Weather API"
            }],
        image: "/assets/work/1211.png",
        live: "https://react-weather-app-ten-gules.vercel.app/",
        github: "https://github.com/Naveen7271/React-Weather-App",
    },
    {
        num: '01',
        category: 'Chat Application',
        title: 'Naveen Portfolio',
        description: 'Developed a real-time chat application using Node.js and Socket.io',
        stack: [
            {
                name: "Node.js"
            }, {
                name: "Socket.io"
            }, {
                name: "JavaScript"
            }],
        image: "/assets/work/p1.png",
        live: "https://chatapplication-naveenn7271.b4a.run/",
        github: "https://github.com/Naveen7271/Chat-application",
    },
    {
        num: '02',
        category: 'Car Club',
        title: 'Naveen Portfolio',
        description: 'Designed and developed a car catalog website using Next.js and REST API',
        stack: [
            {
                name: "Next.js"
            }, {
                name: "REST API"
            }
        ],
        image: "/assets/work/p4.png",
        live: "",
        github: "https://github.com/Naveen7271/Car-club",
    },
    {
        num: '03',
        category: 'Globus Learn',
        title: 'Naveen Portfolio',
        description: 'Built a website for an education technology company using PHP',
        stack: [
            {
                name: "PHP"
            }, {
                name: "Codeigniter"
            }
        ],
        image: "/assets/work/b2.png",
        live: "",
        github: "",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col justify-center 
            py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">

                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <h2 className="text-[42px] font-bold leading-none
                            text-white group-hover:text-accent transition-all 
                            duration-500 capitalize">{project.category}</h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">{project.stack.map((item, index) => {
                                return (
                                    <li key={index} className="text-xl text-accent">{item.name}
                                        {index !== project.stack.length - 1 && ","}</li>
                                );
                            })}</ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>LIve project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (<SwiperSlide key={index} className="w-full" >
                                    <div className="h-[480px] relative group flex justify-center items-center bg-pink-50/20">
                                        <div className="absolute top-0 buttom-0 
                                        w-full h-full bg-black/10 z-10"></div>

                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.image}
                                                fill
                                                className="object-cover"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>);

                            })}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>

                </div>
            </div>
        </motion.section>
    )
};
export default Work;