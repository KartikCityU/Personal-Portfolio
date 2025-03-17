"use client";

import {motion} from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub} from "react-icons/bs"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        num: '01',
        category: 'fullstack',
        title: 'HandyHive',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsam quis eum sed quam sapiente eveniet aut rerum, exercitationem consequuntur et, recusandae distinctio esse! Provident eveniet eligendi ad nam id.",
        stack: [
            {name: "ReactJs" },
            {name: "NodeJs" },
            {name: "MySQL"}
        ],
        image: '/assets/work/thumb1.png',
        live: '',
        github: ''
    },

    {
        num: '02',
        category: 'fullstack',
        title: "Don't Throw Me (DTM)",
        description: "A platform to make it easier for you to buy, sell, swap, donate, and much more.",
        stack: [
            {name: "VueJs" },
            {name: "PHP" },
            {name: "CodeIgnitor"},
            {name: "MySQL"}
        ],
        image: '/assets/work/thumb1.png',
        live: 'https://dontthrowme.com/en/about-us',
        github: ''
    },

    {
        num: '03',
        category: 'fullstack',
        title: 'Karven - Ultimate Banking Solution',
        description: "Built with Next.js, Karven is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
        stack: [
            {name: "Next.js" },
            {name: "TypeScript" },
            {name: "Appwrite"},
            {name: "Plaid" },
            {name: "Dwolla" },
            {name: "React Hook Form"},
            {name: "Zod" },
            {name: "TailwindCSS" },
            {name: "Chart.js"},
            {name: "ShadCN"}
        ],
        image: '/assets/work/thumb1.png',
        live: '',
        github: '',
    },
];

const Work = () => {
   const [project, setProject] = useState(projects[0]);

   const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;

        setProject(projects[currentIndex]);
   };

   return (
        <motion.section 
            intial = {{opacity:0}}
            animate = {{opacity:1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                             {/* stack */}
                             <ul className="flex gap-4">
                                {project.stack.map((item, index) =>{
                                    return (
                                <li key = {index} className="text-xl text-accent">
                                    {item.name}
                                    {index !== project.stack.length - 1 && ","}
                                </li>
                                );
                                })}
                            </ul>
                            {/* Border */}
                            <div className = "border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration = {100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center item-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration = {100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center item-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>    
                        </div> 
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project,index)=> {
                                return <SwiperSlide key = {index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        <div className="relative w-full h-full">
                                            <Image src={project.image} fill className="object-cover" alt=""/>
                                        </div>
                                    </div>
                                </SwiperSlide>;
                            })}
                            <WorkSliderBtns></WorkSliderBtns>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
   )
}

export default Work;