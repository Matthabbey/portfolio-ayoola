import React from 'react'
import HeadIcon from '../public/theHead.svg'
import {BsInstagram, BsGithub,BsLinkedin } from 'react-icons/bs'

const Home = () => {
  return (
    <div>
        <div>
            <h1>Akinpelu Abiodun Matthew</h1>
            <p>Full-Stack Developer </p>
            <ul>
                <li><BsLinkedin/></li>
                <li><BsGithub/></li>
                <li><BsInstagram/></li>
            </ul>
        </div>
        <img src={HeadIcon} alt="" />

        <div>
            <h3>
            Whatsapp Instant Chat
            </h3>
        </div>
    </div>
  )
}

export default Home