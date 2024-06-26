import { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import Box from '../../components3D/Box'

const Cubes: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="React animated Logo component" />
      </Head>

      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[0, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </>
  )
}

export default Cubes
