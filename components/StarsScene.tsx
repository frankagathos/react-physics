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
            <Stars radius={100} depth={50}  factor={3} saturation={0} fade count={count}  />
        </Setup>
    );
};

export default StarsScene;