import React from 'react'
import ProfileLogo from '../public/favicon_io/ProfilePic.png'

const Cards = () => {
  return (
    <div className='flex gap-20'>
      <div>
        <img src={ProfileLogo} alt="" />
      </div>
      <div>
        <h4>About me!</h4>
        <h1>Akinpelu Abiodun MAtthew</h1>
        <p className="[content:'\1F44B']">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad obcaecati inventore natus sed repudiandae temporibus, dignissimos maxime delectus suscipit consequatur sequi magni laboriosam, deserunt dolores debitis itaque numquam illum.</p>     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad obcaecati inventore natus sed repudiandae temporibus, dignissimos maxime delectus suscipit consequatur sequi magni laboriosam, deserunt dolores debitis itaque numquam illum.</p>     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad obcaecati inventore natus sed repudiandae temporibus, dignissimos maxime delectus suscipit consequatur sequi magni laboriosam, deserunt dolores debitis itaque numquam illum.</p>     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad obcaecati inventore natus sed repudiandae temporibus, dignissimos maxime delectus suscipit consequatur sequi magni laboriosam, deserunt dolores debitis itaque numquam illum.</p>
      </div>
    </div>
  )
}

export default Cards