import Image from 'next/image'
import React from 'react'
import banner from '../../assets/images/banner.png'

const Banner = () => {
  return (
    <div>
        <Image src={banner} height={797} width={1728} />
    </div>
  )
}

export default Banner