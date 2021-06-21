import React from 'react'
import StarsScene from './../components/StarsScene';


const Stars = ({ stars }: { stars: number }) => {

    return (
        <StarsScene count={10000}></StarsScene>
    )
}

export default Stars