import React from 'react' 
import CodeLogo from '../public/CodeIcon.svg'
import ProjectLogo from '../public/ProjectsIcon.svg'
import DesignLogo from '../public/DesignIcon.svg'


const Project = () => {
  return (
    <div>
            <h1>Portfolio</h1>
        <div>
            <p>List of Projects Completed</p>
            <div>
                <div>
                    <img src={DesignLogo} alt="" />
                    <span>UI Design</span>
                </div>
                <div>
                    <img src={ProjectLogo} alt="" />
                    <span>UI Design</span>
                </div>
                <div>
                    <img src={CodeLogo} alt="" />
                    <span>UI Design</span>
                </div>
            </div>
        </div>

        <div>
            <div>
                <p>Move.it</p>
            </div>
        </div>

    </div>
  )
}

export default Project