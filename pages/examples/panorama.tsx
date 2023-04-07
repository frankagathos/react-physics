import { NextPage } from 'next'
import React, { useState } from 'react'
import SimplePanorama from '../../components3D/SimplePano'

const Panorama: NextPage = () => {
  const [rotate, setRotate] = useState<boolean>(true)

  return (
    <>
      <button
        style={{ zIndex: 1, right: 25, top: 150, position: 'absolute' }}
        onClick={() => setRotate(!rotate)}
      >
        Rotate toggle
      </button>
      <SimplePanorama autoRotate={rotate} />
    </>
  )
}

export default Panorama
