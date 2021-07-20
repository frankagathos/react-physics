import React, { Suspense } from 'react'
import { Cloud } from '@react-three/drei'
import { Setup } from '../../components/Setup'
import { Vector3, DoubleSide } from 'three'
import fonts from '../../fonts/fonts'
import { extend } from '@react-three/fiber'
import { Text } from "troika-three-text";
import styles from "./clouds.module.scss"
export default function Clouds() {
    extend({ Text });

    const opts = {
        font: "Orbitron",
        fontSize: 2,
        color: "#045206",
        maxWidth: 250,
        lineHeight: 1,
        letterSpacing: 0,
        textAlign: "center"
    };
    return (
        <div className={styles.clouds}>
            <Setup controls={true} cameraPosition={new Vector3(0, 0, 10)}>
                <Suspense fallback={'loading'}>
                    <Cloud position={[-4, -2, 0]} args={[3, 2]} />
                    <Cloud position={[-4, 2, 0]} args={[3, 2]} />
                    <Cloud args={[3, 2]} />
                    <Cloud position={[4, -2, 0]} args={[3, 2]} />
                    <Cloud position={[4, 2, 0]} args={[3, 2]} />

                    <text
                        position-z={1}
                        {...opts}
                        text={'React Physics'}
                        font={fonts[opts.font]}
                        anchorX="center"
                        anchorY="middle"
                    >
                        <meshPhongMaterial attach="material" side={DoubleSide} />
                    </text>
                </Suspense>
            </Setup>
        </div>

    )
}