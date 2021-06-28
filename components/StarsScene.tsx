import { Stars } from "@react-three/drei";
import { Setup } from './Setup'

/**
 * Stars scene 
 *  
 * 
 */

const StarsScene = ({ count }: { count: number }) => {
    return (
        <Setup lights={false}>
            <Stars radius={100} depth={50} count={count} factor={0} saturation={1} fade />
        </Setup>
    );
};

export default StarsScene;