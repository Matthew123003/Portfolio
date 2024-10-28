"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
      num: "01",
      category: "full stack",
      title: "Morgan Bank",
      description: "Responsive full stack banking application that encompasses all aspects of modern banking, including a chatbox for frequently asked questions.",
      stack: [ { name: "React.js" }, { name: "Spring" }, { name: "Java" }, { name: "MySQL" } ],
      image: "/assets/work/MorganBank01.png",
      live: "",
      github: "https://github.com/Matthew123003/MoneyManagementApp",
    },
    {
      num: "02",
      category: "backend",
      title: "Java Labs",
      description: "With around 80 labs, I demonstrate comprehensive knowledge and skills in Java programming, covering everything from unit testing to developing full-scale backend applications.",
      stack: [ { name: "Java" }, { name: "Spring" }, { name: "Hibernate" }, { name: "MySQL" } ],
      image: "/assets/icons/06JAVA.png",
      live: "",
      github: "https://github.com/Matthew123003?tab=repositories",
    },
    {
      num: "03",
      category: "backend",
      title: "Extract Transform Load",
      description: "ETL program that extracts data from a MySQL database, transforms it using a Java backend, and sends it to a Kafka topic using the Spring framework.",
      stack: [ { name: "Kafka" }, { name: "Spring" }, { name: "Java" }, { name: "MySQL" } ],
      image: "/assets/work/ETL01.png",
      live: "",
      github: "https://github.com/Matthew123003/ExtractTransformLoad",
    },
    {
      num: "04",
      category: "full stack",
      title: "FreeCodeCamp Course Work",
      description: "A complete library of all coursework and projects completed to obtain my multiple certifications. University of Michigan coursework can be found here as well.",
      stack: [ { name: "React.js" }, { name: "Redux" }, { name: "SASS" }, { name: "BootStrap" }, { name: "jQuery" }, { name: "JavaScript" }, { name: "Python" }, { name: "HTML" }, { name: "CSS" }, { name: "D3.js" }, { name: "SVG" }, ],
      image: "/assets/work/FCC01.png",
      live: "",
      github: "https://github.com/Matthew123003/FCC.org-Cert-Work",
    },
    {
      num: "05",
      category: "full stack",
      title: "SmartWake",
      description: "Full stack Alarm clock application that utilizes binaural audio to wake you more naturally from a nights sleep.",
      stack: [ { name: "React.js" }, { name: "Spring" }, { name: "Java" }, { name: "MySQL" } ],
      image: "/assets/work/SmartWake01.png",
      live: "",
      github: "https://github.com/Matthew123003/SmartWake",
    },
    {
      num: "06",
      category: "full stack",
      title: "WorkTrack",
      description: "A full stack application to track all job applications and the status of each, from application submission to final interviews.",
      stack: [ { name: "Expo" }, { name: "React Native" }, { name: "Spring" }, { name: "Java" }, { name: "MySQL" }, { name: "Android Studio" } ],
      image: "/assets/work/WorkTrack01.png",
      live: "",
      github: "https://github.com/Matthew123003/WorkTrack",
    },
    {
      num: "07",
      category: "frontend",
      title: "Portfolio",
      description: "My portfolio, showcasing my skills in dynamic web design and commitment to making excellent applications.",
      stack: [ { name: "Next.js" }, { name: "TailwindCSS" }, { name: "Framer Motion" } ],
      image: "/assets/work/MattPortfolio01.png",
      live: "",
      github: "https://github.com/Matthew123003/Portfolio",
    },
];



const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
  // get current slide index
  const currentIndex = swiper.activeIndex;
  // update project state based on current slide index
  setProject(projects[currentIndex]);
  };

  return (
    <motion.section 
    initial={{ opacity: 0 }} 
    animate={{ 
    opacity: 1, 
    transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} 
    }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project category */}
              <h3 className="text-[28px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h3>
              {/* project description */}
              <p className="text-white/60">
                {project.description}
              </p>
              {/* stack */}
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => {
                  return <li key={index} className="text-xl text-accent">
                            {item.name}
                            {/* removes the last comma */}
                            {index !== project.stack.length -1 && ","}
                          </li>
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
               {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
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
              {projects.map((project, index) => {
                return ( <SwiperSlide 
                        key={index} 
                        className="w-full" 
                        >
                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        {/* overlay */}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        {/* image */}
                        <div className="relative w-full h-full">
                          <Image src={project.image} fill className="object-cover" alt="" />
                        </div>
                        </div>
                       </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" 
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
};

export default Work