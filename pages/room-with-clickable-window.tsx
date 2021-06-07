import * as THREE from "three";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { useThree, useLoader, Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { NextPage } from 'next'
import styles from '../styles/room.module.scss'
import { useRouter } from 'next/router'

interface Props {

}
const PanoHotspot = ({router}) => {
    const texture = useLoader(THREE.TextureLoader, "../test_pano_layer.jpg");
    const [canvasCreated, setCanvasCreated] = useState(false);
    const [canClick, setCanClick] = useState(false);
    const { camera } = useThree();
    const self = useRef();
   

    let canvas2d: CanvasRenderingContext2D | null;
    const raycaster = new THREE.Raycaster();
    let canvas = document.createElement("canvas");
    canvas.width = texture.image.naturalWidth / 12;
    canvas.height = texture.image.naturalHeight / 12;
    canvas.style.display = "none";

    setTimeout(() => {
        canvas2d = canvas.getContext("2d");
        if (canvas2d) {
            canvas2d.drawImage(texture.image, 0, 0, canvas.width, canvas.height);
            setCanvasCreated(true);
        } else {
            console.error("cant create canvas");
        }
    }, 600);

    const checkIfHit = (event) => {
        let mouse = new THREE.Vector2();

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects([self.current]);

        if (intersects.length > 0) {
            if (canvas2d) {
                
                let x = canvas.width * intersects[0].uv.x;
                let y = canvas.height * (1 - intersects[0].uv.y);

                let pixel = canvas2d.getImageData(x, y, 1, 1).data;

                if (pixel[0] > 0) {
                    // Hit if pixel isn't black
                    setCanClick(true);
                    document.body.style.cursor = "pointer";
                } else {
                    // Miss
                    setCanClick(false);
                    document.body.style.cursor = "grab";
                }
            }
        }
    };

    const handleClick = () => {
        if (canClick) {
            router.push('/panorama')
        }
    };

    useEffect(() => {
        if (canvasCreated) {
            document.addEventListener("mousemove", checkIfHit, false);
        }
        return () => {
            document.removeEventListener("mousemove", checkIfHit);
        };
    }, [canvasCreated]);

    return (
        <mesh ref={self} scale={[-1, 1, 1]} onClick={handleClick}>
            <sphereBufferGeometry args={[500, 60, 40]} />
            <meshBasicMaterial
                map={texture}
                side={THREE.BackSide}
                transparent={true}
                opacity={0}
            />
        </mesh>
    );
};

const MainPano = () => {
    const mainTexture = useLoader(THREE.TextureLoader, "../test_pano.jpg");

    return (
        <mesh scale={[-1, 1, 1]}>
            <sphereBufferGeometry args={[500, 60, 40]} />
            <meshBasicMaterial map={mainTexture} side={THREE.BackSide} />
        </mesh>
    );
};

const Room: NextPage<Props> = () => {
    
   const router = useRouter();
//  router hook not working inside components so passing it 
    return (
        <div className={styles.room}>
            <Canvas camera={{ fov: 55, position: [0, 0, 0.1] }}>
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableDamping
                    dampingFactor={0.1}
                    autoRotate={false}
                    rotateSpeed={-0.15}
                />
                <Suspense fallback={"Loading pano..."}>
                    <MainPano />
                    <PanoHotspot router={router}/> 
                </Suspense>
            </Canvas>
        </div>


    );
};

export default Room;
