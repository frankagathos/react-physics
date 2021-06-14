import React, { useRef, useState } from "react";
import { extend, Canvas } from '@react-three/fiber'
import { Text } from "troika-three-text";
import fonts from '../fonts/fonts'
import styles from './Text3d.module.scss'

// Register Text as a react-three-fiber element
extend({ Text });

export default function Text3d({textCopy}) {

  const [rotation, setRotation] = useState<[number,number,number,string]>([0, 0, 0, 'XYZ']);

  const [opts, setOpts] = useState({
    font: "Orbitron",
    fontSize: 20,
    color: "#99ccff",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "justify",
    materialType: "MeshPhongMaterial"
  });
  const mesh = useRef<THREE.Mesh>(null!)

  const handleClick = (e) => {

    if (e.target.offsetHeight) {
      console.log(e.target.offsetHeight);
    }

    setRotation([
      ((e.clientY / e.target.offsetHeight - 1) * -Math.PI) / 8,
      ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 8,
      0,
      'XYZ'
    ]);
  };

  return (
    <div className={styles.wrapper} onMouseMove={handleClick}>
      <Canvas>
        <text
          position-z={-180}
          rotation={rotation}
          {...opts}
          text={textCopy}
          font={fonts[opts.font]}
          anchorX="center"
          anchorY="middle"
        >
          {opts.materialType === "MeshPhongMaterial" ? (
            <meshPhongMaterial attach="material" color={opts.color} />
          ) : null}
        </text>
        <pointLight position={[-100, 0, -160]} />
        <pointLight position={[0, 0, -170]} />
        <pointLight position={[100, 0, -160]} />

      </Canvas>
    </div>

  );
}

