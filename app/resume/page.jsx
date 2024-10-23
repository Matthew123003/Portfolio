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
    description: "A motivated and resourceful software developer committed to excellence in building intricate, aesthetic applications.",
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
    description: "With 2700 certified coding hours, I specialize in delivering efficient solutions across front-end and back-end technologies, databases, and APIs, using Agile and testing practices for reliable software.",
    items: [
      {
        company: "Freelance",
        position: "Junior Full Stack Developer",
        duration: "Jun 2024 - Present",
      },
      {
        company: "Zip Code Wilmington",
        position: "Junior Full Stack Developer",
        duration: "Jan 2024 - May 2024",
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
        position: "Lead E&I Technician",
        duration: "Jan 2020 - Feb 2021",
      },
      {
        company: "Wilmington Pharmatech",
        position: "Lead E&I Technician",
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
  description: "Through multiple certifications, I have built a solid foundation in full stack software development and computer science, with expertise in both front-end and back-end technologies.",
  items: [
    {
      institution: "FreeCodeCamp.org",
      degree: "Front End Development Libraries Certification",
      duration: "Aug 2024 - Present",
    },
    {
      institution: "FreeCodeCamp.org",
      degree: "Advanced Python Certification",
      duration: "Oct 2024",
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
    description: "Proficient in a diverse range of skills, including Java, JavaScript, Python, React, Node.js, and MySQL, with expertise in building scalable applications. Strong in front-end and back-end technologies, testing frameworks like JUnit and Jest, and experienced with tools like Docker, Git, and Postman for efficient development.",
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
        {
          icon: <SiIntellijidea />,
          name: "IntelliJ IDEA",
        },
        {
          icon: <SiVisualstudiocode />,
          name: "VS Code",
        },
        {
          icon: <SiAndroidstudio />,
          name: "Android Studio",
        },
    ],
};


const Resume = () => {
  return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{
      opacity: 1, 
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
      }} 
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0" 
    >
      <div className="container mx-auto">
        <Tabs 
         defaultValue="experience" 
         className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
             {/* experience */}
             <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li 
                            key={index} 
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
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
             
             
             {/* education */}
             <TabsContent value="education" className="w-full">
             <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li 
                            key={index} 
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
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
             
             
             {/* skills */}
             <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}</p>
                  </div>
                  <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                    {skill.icon}
                                  </div>
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
                  </ScrollArea>
                </div>
             </TabsContent>
             
             
             {/* about me */}
             <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                          <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
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
      </div>
    </motion.div>
  )
}

export default Resume;