"use client"

import { Description } from "@radix-ui/react-dialog";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaRegObjectUngroup,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
    title: "About me",
    Description: "alkdjflafjlkasdjfljasd;lkfj;djf;lasdjf'aljsn00",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Naveen",
        },
        {
            fieldName: "Phone",
            fieldValue: "123456",
        },
        {
            fieldName: "Expericence",
            fieldValue: "12+",
        },
        {
            fieldName: "Email",
            fieldValue: "Naveenn7271@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "active",
        },
        {
            fieldName: "Langiage",
            fieldValue: "Hindi",
        },

    ]
};

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.',
    items: [

        {
            company: "Woodwin Technologies",
            position: "Full Stack Developer ",
            duration: "Sep 2023-Dec 2023",
        },
        {
            company: "KPIT ",
            position: "Associate Software Engineer",
            duration: "Jan 2023-April 2023",
        },
        {
            company: "OSMOSISS",
            position: "Backend Developer",
            duration: "Jun 2022-Dec 2022",
        },

    ]
};

const Education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.',
    items: [
        {
            Institute: "Chandigarh University",
            degree: "Bachelor of Engineering (B.E), Computer Science & Engineering",
            duration: "2019-2023",
        },

    ]
};

const skills = {
    title: "My skills",
    description: "what htbehtbaighkjsdhg",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
    ]
};


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";



const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}

            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience"
                    className="flex felx-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto
                    xl:mx-0 gap-6">
                        <TabsTrigger value="Experiecnce" >Experience</TabsTrigger>
                        <TabsTrigger value="Education" >Education</TabsTrigger>
                        <TabsTrigger value="Skills">Skills</TabsTrigger>
                        <TabsTrigger value="About">About</TabsTrigger>
                    </TabsList>


                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="Experiecnce" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px]
                                                py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="Education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{Education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{Education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {Education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px]
                                                py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.degree}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.Institute}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="Skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-200">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="About" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.Description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            < li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>

            </div >

        </motion.div >


    )
};
export default Resume;