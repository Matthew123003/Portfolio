"use client";

import {FaJava, FaPython, FaJs, FaNodeJs, FaReact, FaHtml5, FaCss3, FaGithub, FaSchool, FaLaptop, FaLaptopCode} from "react-icons/fa";
import {SiSpring, SiSpringboot, SiSpringsecurity, SiMysql, SiTailwindcss, SiNextdotjs, SiHibernate, SiJunit5, SiJasmine, SiJest, SiApachemaven, SiApachekafka, SiSqlite, SiPostman, SiSass, SiBootstrap, SiJquery, SiJson, SiJsonwebtokens, SiDocker, SiIntellijidea, SiVisualstudiocode, SiAndroidstudio, SiExpo, SiWebstorm, SiD3Dotjs, SiZsh} from "react-icons/si";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


// about data
const about = {
    title: "About me",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos incidunt praesentium accusantium exercitationem est officiis.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Matt Kramer",
      },
      {
        fieldName: "Phone",
        fieldValue: "(302) 476-0430",
      },
      {
        fieldName: "Experience",
        fieldValue: "1 Year",
      },
      {
        fieldName: "Email",
        fieldValue: "Matthew123003@gmail.com",
      },
      {
        fieldName: "Github",
        fieldValue: "Matthew123003",
      },
      {
        fieldName: "Nationality",
        fieldValue: "American",
      },
      {
        fieldName: "Languages",
        fieldValue: "English",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
    ],
};

// experience data
const experience = {
    icon: <FaLaptopCode />,
    title: "My Experience",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos incidunt praesentium accusantium exercitationem est officiis.",
    items: [
      {
        company: "Zip Code Wilmington",
        position: "Junior Full Stack Developer",
        duration: "Jan 2024 - Present",
      },
      {
        company: "Target",
        position: "Maintenance Technician III",
        duration: "Jul 2022 - Dec 2023",
      },
      {
        company: "CBRE",
        position: "Automation Technician III",
        duration: "Mar 2021 - Jun 2022",
      },
      {
        company: "Entegris Inc.",
        position: "Lead Electrical and Instrumentation Technician",
        duration: "Jan 2020 - Feb 2021",
      },
      {
        company: "Wilmington Pharmatech",
        position: "Lead Electrical and Instrumentation Technician",
        duration: "Jan 2018 - Dec 2019",
      },
      {
        company: "Dassault Falcon Jet",
        position: "Avionics Technician",
        duration: "Feb 2015 - Nov 2017",
      },
      {
        company: "Total Trax",
        position: "Electronics Technician",
        duration: "Jan 2013 - Dec 2013",
      },
      {
        company: "Astec Inc.",
        position: "Field Service Technician",
        duration: "July 2007 - Dec 2008",
      },
      {
        company: "United States Air Force",
        position: "F-15 C/D Flight Line Avionics Journeyman",
        duration: "Jul 2003 - Jul 2007",
      },
    ]
};

// education data
const education = {
  icon: <FaSchool />,
  title: "My Education",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos incidunt praesentium accusantium exercitationem est officiis.",
  items: [
    {
      institution: "FreeCodeCamp.org",
      degree: "Front End Development Libraries Certification",
      duration: "Aug 2024 - Present",
    },
    {
      institution: "FreeCodeCamp.org",
      degree: "Data Visualization Certification",
      duration: "Jul 2024",
    },
    {
      institution: "FreeCodeCamp.org",
      degree: "Responsive Web Design Certification",
      duration: "Jul 2024",
    },
    {
      institution: "FreeCodeCamp.org",
      degree: "Advanced JavaScript Certification",
      duration: "Jun 2024",
    },
    {
      institution: "FreeCodeCamp.org",
      degree: "Legacy JavaScript Certification",
      duration: "Jun 2024",
    },
    {
      institution: "Code.org",
      degree: "Java Computer Science A Course",
      duration: "Jun 2024",
    },
    {
      institution: "Zip Code Wilmington",
      degree: "Full Stack Java Developer Certification",
      duration: "Feb 2024 - May 2024",
    },
    {
      institution: "Delaware Technical and Community College",
      degree: "Electronics/Computer Engineering | 60 hours",
      duration: "Jan 2008 - Aug 2011",
    },
    {
      institution: "Community College of the Air Force",
      degree: "AAS Avionics Systems Technology | 50 hours",
      duration: "Jul 2003 - Jul 2007",
    },
  ]
};

// skills data
const skills = {
    title: "My Skills",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos incidunt praesentium accusantium exercitationem est officiis.",
    skillList: [
        {
          icon: <FaJava />,
          name: "Java",
        },
        {
          icon: <FaPython />,
          name: "Python",
        },
        {
          icon: <FaJs />,
          name: "JavaScript",
        },
        {
          icon: <SiJson />,
          name: "JSON",
        },
        {
          icon: <SiJsonwebtokens />,
          name: "JWT",
        },
        {
          icon: <SiJunit5 />,
          name: "JUnit",
        },
        {
          icon: <SiJasmine />,
          name: "Jasmine",
        },
        {
          icon: <SiJest />,
          name: "Jest",
        },
        {
          icon: <SiApachemaven />,
          name: "Maven",
        },
        {
          icon: <SiApachekafka />,
          name: "Kafka",
        },
        {
          icon: <SiSpring />,
          name: "Spring",
        },
        {
          icon: <SiSpringboot />,
          name: "Spring Boot",
        },
        {
          icon: <SiHibernate />,
          name: "Hibernate",
        },
        {
          icon: <SiMysql />,
          name: "MySQL",
        },
        {
          icon: <SiZsh />,
          name: "Shell Scripting",
        },
        {
          icon: <FaNodeJs />,
          name: "Node.js",
        },
        {
          icon: <SiExpo />,
          name: "Expo",
        },
        {
          icon: <SiNextdotjs />,
          name: "Next.js",
        },
        {
          icon: <FaReact />,
          name: "React.js",
        },
        {
          icon: <FaHtml5 />,
          name: "HTML",
        },
        {
          icon: <FaCss3 />,
          name: "CSS",
        },
        {
          icon: <SiSass />,
          name: "SASS",
        },
        {
          icon: <SiBootstrap />,
          name: "Bootstrap",
        },
        {
          icon: <SiJquery />,
          name: "jQuery",
        },
        {
          icon: <SiTailwindcss />,
          name: "TailwindCSS",
        },
        {
          icon: <SiD3Dotjs />,
          name: "d3.js",
        },
        {
          icon: <FaGithub />,
          name: "Github",
        },
        {
          icon: <SiPostman />,
          name: "Postman",
        },
        {
          icon: <SiDocker />,
          name: "Docker",
        },
    ],
};


const Resume = () => {
  return (
    <div>
        resumepage
    </div>
  )
}

export default Resume;