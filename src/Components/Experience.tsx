import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa'
import { SiJavascript, SiMongodb, SiMysql, SiScrumalliance, SiTailwindcss, SiTypescript } from 'react-icons/si'
import reactLogo from '../public/reactLoogo.svg'
import nodejsLogo from '../public/nodejs.png'

const Experience = () => {
  return (
    <div className='justify-center items-center'>
        <h1 className='text-center pb-10'>Technologies and Skills</h1>

        <div>
            <div className='items-center flex gap-5 justify-center '>
            {/* <FaReact width={550}/>
            <FaNodeJs/>
            <SiJavascript/>
            <BsGithub/>
            <SiTypescript/>
            <SiMongodb/>
            <FaDocker />
            <SiMysql/>
            {/* <GrGraphQl/> */}
            <SiScrumalliance />
            <SiTailwindcss className=''/>
            <img src={reactLogo} alt="" width={30} className='bg-none' />
            <img src={nodejsLogo} alt="" width={25}/>

            </div>
        </div>
    </div>
  )
}

export default Experience