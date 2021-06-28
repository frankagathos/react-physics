import React, { Suspense } from 'react'
import { OrbitControls, Cloud } from '@react-three/drei'
import { Setup } from '../components/Setup'
import { Vector3 } from 'three'
import fonts from '../fonts/fonts'
import { extend } from '@react-three/fiber'
import { Text } from "troika-three-text";

export default function Clouds() {
    extend({ Text });

    const opts = {
        font: "Orbitron",
        fontSize: 3,
        color: "#045206",
        maxWidth: 250,
        lineHeight: 1,
        letterSpacing: 0,
        textAlign: "center",
        materialType: "MeshPhongMaterial"
    };
    return (
        <Setup controls={false} cameraPosition={new Vector3(0, 0, 10)}>
            <Suspense fallback={null}>
                <Cloud position={[-4, -2, 0]} args={[3, 2]} />
                <Cloud position={[-4, 2, 0]} args={[3, 2]} />
                <Cloud args={[3, 2]} />
                <Cloud position={[4, -2, 0]} args={[3, 2]} />
                <Cloud position={[4, 2, 0]} args={[3, 2]} />

                <text
                    position-z={0}
                    {...opts}
                    text={'React Physics'}
                    font={fonts[opts.font]}
                    anchorX="center"
                    anchorY="middle"
                >
                    {opts.materialType === "MeshPhongMaterial" ? (
                        <meshPhongMaterial attach="material" color={opts.color} />
                    ) : null}
                </text>
                <OrbitControls enablePan={false} zoomSpeed={0.5} />
            </Suspense>
        </Setup>
    )
}