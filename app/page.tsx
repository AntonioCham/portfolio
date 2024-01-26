"use client"

import personal from "@portfolio/data/personal.json"
import { ReactTyped } from "react-typed";
import * as ReactIcons from "react-icons/si";
import { motion } from "framer-motion"
import { Metadata } from "next";
import Image from "next/image";

export default function Home(){

    type GetIconProps = {
      icon: string;
    };
  
    const getIcon = ({ icon }: GetIconProps) => {
      const TagName = ReactIcons[icon as keyof typeof ReactIcons];
      if (TagName) {
        return <TagName className="text-4xl" />;
      } else {
        console.error(`Invalid icon: ${icon}`);
        return null;
      }
    };

    const aboutContent = personal.aboutSection.content.map((info,infoIndex) => {
        return(
            <motion.div key={infoIndex} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="m-12 p-12 border border-black rounded-xl drop-shadow-md shaow-lg leading-8">
                <div className="text-center">
                <p className="text-xl">{info.title}</p>
                <p>{info.company}</p>
                <p>{info.date}</p>
                </div>
                <div className="py-4">
                <ul className="list-disc text-md leading-8 py-2">
                {info.description.map((desc, descIndex) => {
                    return(
                        <li className="text-md" key={descIndex}>{desc}</li>
                    )
                })}
                </ul>
                </div>
                <h4 className="text-lg py-6">Stack</h4>
                <div className="flex flex-wrap gap-6 justify-center">
                {info.stack.map((item, itemIndex) => {
                    return(
                        <div className="flex flex-col items-center basis-1/12" key={itemIndex}>
                            {getIcon({icon: item.icon})}
                            <p className="text-md text-center">{item.name}</p>
                        </div>
                    )
                })}
                </div>
            </motion.div>
        );
    })

    const projectContent = personal.projectSection.content.map((project, projectIndex) => {
      return(
        <motion.div key={projectIndex} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="m-4 mx-auto rounded-xl drop-shadow-md shaow-lg basis-1/3 text-center">
        <a href={project.githubLink} target="_blank">
          <Image src={project.picture} alt={project.projectName} width={500} height={500} className="w-full rounded-lg"></Image>
        </a>
        <p className="text-lg py-4">{project.projectName}</p>
        </motion.div>
      )
    })

    return(
        <main className="bg-gradient-to-t from-gray-300">  
        <section className="min-h-screen">
            <div className="text-center p-12 h-screen w-screen flex flex-col justify-center items-center">
            <div>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="">
                <video className="mx-auto w-60 h-60 lg:w-80 lg:h-80 rounded-full size-1/6 my-4 bg-gradient-to-b from-gray-200 hidden lg:block" autoPlay loop muted>
                        <source src="Antonio.webm" type="video/webm"/>
                </video>
                </motion.div>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="relative">
                <Image src="/assets/antonio.png" alt="antonio" width={200} height={200} className="mx-auto w-60 h-60 lg:w-80 lg:h-80 rounded-full size-1/6 my-4 bg-gradient-to-b from-gray-200 lg:hidden object-contain" />
                </motion.div>
                <h2 className="text-4xl lg:text-6xl py-2">
                    { personal.CTASection.name }
                </h2>
                <p className="text-2xl lg:text-4xl py-2">
                    I&apos;m a {" "}
                    <ReactTyped strings={ personal.CTASection.selfwords}
                    typeSpeed={100}
                    loop
                    backSpeed={20}
                    cursorChar=">"
                    showCursor={true} />
                </p>
                <div className="py-5">
                    { personal.CTASection.description.map((desc, descIndex) => {
                        return(
                            <p key={descIndex} className="text-md hidden lg:block leading-8 text-grey-800">{desc}</p>
                        )
                    })}
                </div>
            </div>
            <div className="flex justify-center text-4xl gap-16 m-4">
                <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="text-3xl lg:text-5xl drop-shadow-md" href="https://www.linkedin.com/in/antoniocham/" target="_blank"><ReactIcons.SiLinkedin /></motion.a>
                <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="text-3xl lg:text-5xl drop-shadow-md" href="https://github.com/antoniocham" target="_blank"><ReactIcons.SiGithub /></motion.a>
                <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="text-3xl lg:text-5xl drop-shadow-md" href="mailto:antoniowlcham2@gmail.com" target="_blank"><ReactIcons.SiGmail /></motion.a>
            </div>
            <motion.button className="border-solid rounded-lg border-black border-2 p-4 m-6" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                <a href="#" download="AntonioCham_Resume.pdf">My Resume</a>
            </motion.button>
            </div>
        </section>
        <section className="p-1 lg:p-12">
            <h3 className="text-3xl py-1 text-center">{personal.aboutSection.header}</h3>
            <div className="lg:flex gap-10">
                {aboutContent}
            </div>
        </section>
        <section className="p-10 lg:p-12">
            <h3 className="text-3xl py-1 text-center">{personal.projectSection.header}</h3>
            <div className="flex flex-col gap-10 py-10 items-center lg:flex-row lg:flex-wrap">
              {projectContent}
            </div>
        </section>
        <section className="p-12 text-center">
            <p> 2024 © Antonio Cham</p>
        </section>
        </main>
    )
}
