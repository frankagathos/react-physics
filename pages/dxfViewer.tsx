import { NextPage } from 'next'
import * as THREE from 'three'
// import DxfParser from 'dxf-parser'
import * as ThreeDxf from 'three-dxf'
import DxfParser from 'dxf-parser'
import dxfSample from '../dxfFiles/sample.dxf'
// import dxfErm from '../dxfFiles/ermones.dxf'
import { useEffect } from 'react'
import { Button } from '@chakra-ui/react'

const DxfViewer: NextPage = () => {
  useEffect(() => {
    const parser = new DxfParser()
    const dxf = parser.parse(dxfSample)

    console.log('dxfJson', dxf)
    const cadCanvas = new ThreeDxf.Viewer(
      dxf,
      document.getElementById('cad-view'),
      window.innerWidth,
      window.innerHeight,
    )
  }, [])
  // }

  const handleDxfChange = () => {}

  return <div style={{ width: '100%', height: '100%' }} id="cad-view"></div>
}

export default DxfViewer
