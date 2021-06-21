import { Stars } from "@react-three/drei";
import { Setup } from './Setup'

/**
 * Stars component 
 * @param param0 
 * @returns 
 */

const StarsScene = ({ count, controls }: { count: number, controls: boolean }) => {
    return (
        <Setup controls={controls}>
            <Stars radius={100} depth={50} count={count} factor={0} saturation={1} fade />
        </Setup>
    );
};

export default StarsScene;