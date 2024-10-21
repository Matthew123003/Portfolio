import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import {FaJava, FaPython, FaJs, FaNodeJs, FaReact, FaHtml5, FaCss3, FaGithub} from "react-icons/fa";
import {SiSpring, SiSpringboot, SiSpringsecurity, SiMysql, SiTailwindcss, SiNextdotjs, SiHibernate, SiJunit5, SiJasmine, SiJest, SiApachemaven, SiApachekafka, SiSqlite, SiPostman, SiSass, SiBootstrap, SiJquery, SiJson, SiJsonwebtokens, SiDocker, SiIntellijidea, SiVisualstudiocode, SiAndroidstudio, SiExpo, SiWebstorm, SiD3Dotjs, SiZsh} from "react-icons/si";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";


const Home = () => {
  return (
    <section className="h-full"> 
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center 
        justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Matt Kramer</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            A versatile software developer skilled in Java, Python, and JavaScript, specializing in scalable web apps with React and Node.js. Proficient in Agile, unit testing, MySQL, SQL Server, HTML, CSS, D3.js, Docker, APIs, and CDNs for performance optimization.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
             <a href="/assets/resume/Matt_Resume_Software_FINAL5.47C.pdf" download>
                <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
                </Button>
             </a> 
              <div className="mb-8 xl:mb-0">
                <Social 
                containerStyles="flex gap-6" 
                 iconStyles="w-9 h-9 border border-accent rounded-full 
                 flex justify-center items-center text-accent text-base 
                 hover:bg-accent hover:text-primary hover:transition-all 
                 duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* New icon bar */}
      <div className="w-full bg-primary flex justify-center gap-2">
          <FaJava className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <FaPython className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <FaJs className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiJson className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiJsonwebtokens className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiJunit5 className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiJasmine className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiJest className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiApachemaven className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiApachekafka className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiSpring className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiSpringboot className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiHibernate className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiMysql className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiZsh className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <FaNodeJs className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiExpo className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiNextdotjs className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <FaReact className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <FaHtml5 className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <FaCss3 className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiSass className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiBootstrap className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiJquery className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiTailwindcss className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiD3Dotjs className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <FaGithub className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiPostman className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiDocker className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiIntellijidea className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiVisualstudiocode className="text-white text-2xl hover:text-accent transition-all duration-300" />
          <SiAndroidstudio className="text-white text-2xl hover:text-accent transition-all duration-300" /> 
      </div>
      <Stats />
    </section>
  )
}

export default Home