import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiMysql, SiScrumalliance, SiTailwindcss, SiTypescript } from 'react-icons/si'

const Experience = () => {
  return (
    <div className='justify-center items-center'>
        <p className='text-center'>Skills - Experience</p>
        <h1 className='text-center'>Technologies and Skills</h1>

        <div>
            <h3 className='text-center'>Technologies I use daily</h3>
            <div className='items-center font-extrabold flex gap-5'>
            <FaReact className='font-extrabold'/>
            <FaNodeJs/>
            <SiJavascript/>
            <BsGithub/>
            <SiTypescript/>
            <SiMongodb/>
            <FaDocker />
            <SiMysql/>
            {/* <GrGraphQl/> */}
            <SiScrumalliance />
            <SiTailwindcss />

            </div>
        </div>
    </div>
  )
}

export default Experience