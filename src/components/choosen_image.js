import React, { useContext } from 'react';
import rock from '../icons/rock.png'
import paper from '../icons/paper.png'
import scissor from '../icons/scissor.png'
import qm from '../icons/qm.png'
import { OptionContext } from '../context/context';
const ChoosenImage = () => {
    const{ Option , setOption ,SystemOption , setSystemOption} = useContext(OptionContext);
    return (  
        <React.Fragment>
            <div className="row">
                <div className="col text-center mt-4  choosenimg">
                        <img src={Option} alt='rock' height="52px"/>
                </div>
                <div className="col text-center mt-4  choosenimg">
                        <img src={SystemOption} alt='rock' height="52px"/>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default ChoosenImage;