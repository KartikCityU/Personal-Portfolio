"use client";

import Link from "next/link";
import { BsArrowDownRight} from "react-icons/bs";

const services = [
    {
        num: "01",
        title: "FullStack Development",
        description : "Passionate and Creative FullStack Developer Focused on Bringing Elegant Digital Experience",
        href : ""
    },
    {
        num: "02",
        title: "Computer Vision",
        description : "Computer Vision Enthusiast With a Focus on Gesture Recognition.",
        href : ""
    },
    {
        num: "03",
        title: "ML/AI",
        description : "Always On top of Latest AI/ML Advancements, A Topic That Fascinates Me The Most",
        href : ""
    },
    {    
        num: "04",
        title: "Data Science",
        description : "Interested In Learning About Turning Raw Data into Actionable Insights",
        href : ""
    },
]

import { motion } from "framer-motion";


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
            {services.map((service, index) => {
            return (
                <div key ={index} 
                className="flex-1 flex flex-col justify-center gap-6 group">
                    <div className="w-full flex justify-between items-center">
                        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                        <Link className = "w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"href={service.href}>
                            <BsArrowDownRight className="text-primary text-3xl"/>
                        </Link>
                    </div>
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                    <p className="text-white/60">{service.description}</p>
                    <div className="border-b border-white/20 w-full"></div>
                </div>
            );
            })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;