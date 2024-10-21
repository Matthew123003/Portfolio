"use client";

import {FaJava, FaPython, FaJs, FaNodeJs, FaReact, FaHtml5, FaCss3, FaGithub} from "react-icons/fa";
import {SiSpring, SiSpringboot, SiSpringsecurity, SiMysql, SiTailwindcss, SiNextdotjs, SiHibernate, SiJunit5, SiJasmine, SiJest, SiApachemaven, SiApachekafka, SiSqlite, SiPostman, SiSass, SiBootstrap, SiJquery, SiJson, SiJsonwebtokens, SiDocker, SiIntellijidea, SiVisualstudiocode, SiAndroidstudio, SiExpo, SiWebstorm, SiD3Dotjs} from "react-icons/si";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Back End Development",
    description: "Building and maintaining server-side logic, databases (MySQL, SQL Server), and APIs using Java, Python, Spring Boot, and Node.js.",
    href: "",
  },
  {
    num: "02",
    title: "Front End Development",
    description: "Creating dynamic and responsive user interfaces using React.js, Next.js, Tailwind CSS, HTML, CSS, and D3.js.",
    href: "",
  },
  {
    num: "03",
    title: "Web Development",
    description: "Full-stack web application development using JavaScript, Node.js, React, Next.js, REST APIs, and Docker for deployment.",
    href: "",
  },
  {
    num: "04",
    title: "API Integration & Microservices",
    description: "Designing and integrating APIs, working with JSON, Axios, and implementing microservices architectures with tools like Docker.",
    href: "",
  },
]



const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
        initial={{opacity: 0}} 
        animate={{
          opacity: 1, 
          transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div 
              key={index} 
              className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                  <div className="w-full flex justify-between items-center">
                    <div 
                    className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500"
                    >
                      {service.num}
                    </div>
                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  {/* title */}
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    {service.title}</h2>
                  {/* description */}
                  <p className="text-white/60">{service.description}</p>
                  {/* border */}
                  <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services