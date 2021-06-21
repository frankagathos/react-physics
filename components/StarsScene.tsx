import { Stars } from "@react-three/drei";
import { Setup } from './Setup'

/**
 * Stars component 
 * @param param0 
 * @returns 
 */

const StarsScene = ({count}:{count:number}) => {
    return (
        <Setup>
            <Stars radius={50} depth={50} count={count} factor={0} saturation={50} fade />
        </Setup>
    );
};

export default StarsScene;