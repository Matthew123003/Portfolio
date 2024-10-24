"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
      num: "01",
      category: "full stack",
      title: "Morgan Bank",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus voluptates officia a in laborum consequatur expedita dicta magni odio voluptatibus facilis ad blanditiis fuga.",
      stack: [ { name: "React.js" }, { name: "Spring" }, { name: "Java" }, { name: "MySQL" } ],
      image: "/assets/work/MorganBank01.png",
      live: "",
      github: "https://github.com/Matthew123003/MoneyManagementApp",
    },
    {
      num: "02",
      category: "full stack",
      title: "",
      description: "",
      stack: [ { name: "React.js" }, { name: "Spring" }, { name: "Java" }, { name: "MySQL" } ],
      image: "",
      live: "",
      github: "",
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
      description: "A complete library of all coursework and projects completed to obtain my multiple certifications.",
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
      stack: [ { name: "Expo" }, { name: "React Native" }, { name: "Spring" }, { name: "Java" }, { name: "MySQL" } ],
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
  return (
    <div>work page</div>
  )
}

export default Work