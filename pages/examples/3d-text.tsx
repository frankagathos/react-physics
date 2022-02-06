import { NextPage } from 'next'
import React from 'react'
import Text3d from './../../components/Text3d';

const Text: NextPage = () => {

    return (
        <Text3d fontSize={20} textCopy='This is just text, This is just a text.' />
    )
}


export default Text