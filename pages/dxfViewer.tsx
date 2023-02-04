import { NextPage } from 'next'
//@ts-ignore
import * as ThreeDxf from 'three-dxf'
import DxfParser from 'dxf-parser'
//@ts-ignore
import dxfSample from '../dxfFiles/sample.dxf'
import { useEffect } from 'react'

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

  return <div style={{ width: '100%', height: '100%' }} id="cad-view"></div>
}

export default DxfViewer
