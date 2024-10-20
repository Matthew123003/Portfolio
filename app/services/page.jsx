"use client";

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
    description: "Designing and integrating APIs, working with JSON, Axios, and implementing microservices architectures with tools like Docker and Kubernetes.",
    href: "",
  },
]



const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
        >
          
        </motion.div>
      </div>
    </section>
  )
}

export default Services