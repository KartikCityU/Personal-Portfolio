"use client";

import {FaHtml5,FaCss3,FaJs,FaReact,FaExpress,FaNode } from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs, SiAmazonwebservices, SiPhp } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
    title: 'About me',
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus ut nesciunt unde, saepe doloribus fugiat facere molestias, quo in ab laborum incidunt atque quas omnis dolorum cumque iure cum.",
    info:[
      {
        fieldName : "Name",
        fieldValue : "Kartik Sharma"
      },
      {
        fieldName : "Phone",
        fieldValue : "(+852) 5634 5890"
      },
      {
        fieldName : "Experience",
        fieldValue : "3 Years"
      },
      {
        fieldName : "University",
        fieldValue : "City University of Hong Kong"
      },
      {
        fieldName : "City",
        fieldValue : "Hong Kong"
      },
      {
        fieldName : "Email",
        fieldValue : "kartikrec01@gmail.com"
      },
      {
        fieldName : "Langauges",
        fieldValue : "English, Hindi, French, German"
      },
    ]
}
const skills = {
  title: 'My Skills',
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus ut nesciunt unde, saepe doloribus fugiat facere molestias, quo in ab laborum incidunt atque quas omnis dolorum cumque iure cum.",
  skillList: [
    {
      icon:<FaHtml5/>,
      name: "html 5",
    },
    {
      icon:<FaCss3/>,
      name: "css 3",
    },
    {
      icon:<FaJs/>,
      name: "js",
    },
    {
      icon:<FaReact/>,
      name: "react.js",
    },
    {
      icon:<SiNextdotjs/>,
      name: "next.js",
    }
    ,
    {
      icon:<SiTailwindcss/>,
      name: "tailwind.css",
    },
    {
      icon:<SiAmazonwebservices/>,
      name: "aws",
    },
    {
      icon:<FaNode/>,
      name: "node.js",
    },
    {
      icon:<SiPhp/>,
      name: "node.js",
    }
  ]
};
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus ut nesciunt unde, saepe doloribus fugiat facere molestias, quo in ab laborum incidunt atque quas omnis dolorum cumque iure cum.",
  items: [
    {
      institution: "City University of Hong Kong",
      degree : "BSc Computer Science",
      duration : "2020-2025"
    }
        
  ]
};
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium minus ut nesciunt unde, saepe doloribus fugiat facere molestias, quo in ab laborum incidunt atque quas omnis dolorum cumque iure cum.",
  items: [
    {
      company:"Expando",
      position : "Software Engineering Intern",
      duration : "May 2024 - July 2024"
    },
    {
      company:"Expando",
      position : "Software Engineering Intern",
      duration : "Dec 2023 - Feb 2024"
    },
    {
      company:"CIGP",
      position : "Software Engineering Intern",
      duration : "May 2023 - July 2023"
    },{
      company:"Digiology",
      position : "Software Engineering Intern",
      duration : "May 2022 - May 2023"
    }
  ]
};

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
            <Tabs defaultValue="experience" className = "flex flex-col xl:flex-row gap-[60px]">
              <TabsList className = "flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="about">About me</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              <div className="min-h-[70vh] w-full">
                <TabsContent value = "experience" className = "w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{experience.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                    
                        <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {experience.items.map((item,index) => {
                                    return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
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

                <TabsContent value = "education" className = "w-full">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{experience.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                    
                        <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {education.items.map((item,index) => {
                                    return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.institution}</p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </ScrollArea>
                    </div>
                </TabsContent>

                <TabsContent value = "skills" className = "w-full h-full">
                   <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className="text-4xl font-bold">{skills.title}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                          {skills.description}
                      </p>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 xl-gap-[30px]">
                      {skills.skillList.map((skill,index) =>{
                        return <li key = {index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center
                              group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                         </li>;
                      })}
                    </ul>
                   </div>
                </TabsContent>

                <TabsContent value = "about" className = "w-full text-center xl:text-left">
                    <div className="flex flex-col gap-[30px]">
                      <h3 className="text-4xl font-bold">{about.title}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                        {about.info.map((item,index) =>{
                          return(
                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                              <span className="text-white/60">{item.fieldName}</span>
                              <span className="text-xl">{item.fieldValue}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                </TabsContent>

              </div>
            </Tabs>
          </div>
        </motion.div>
      );
};

export default Resume;