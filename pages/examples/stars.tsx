import React from 'react'
import StarsScene from '../../components3D/StarsScene'

const Stars = ({ stars }: { stars: number }) => {
  return <StarsScene count={300}></StarsScene>
}

export default Stars
