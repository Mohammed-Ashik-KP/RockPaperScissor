import React, { useState } from 'react';
import qm from '../icons/qm.png'

export const OptionContext = React.createContext();

const OptionProvider = (props)=>{
    const  [Option,setOption] = useState(qm);
    const [SystemOption , setSystemOption] = useState(qm);
    const [userScore , setUserScore] = useState(0);
    const [systemScore , setSystemScore ] = useState(0);
return(
    <OptionContext.Provider value={{
        Option , 
        setOption , 
        SystemOption , 
        setSystemOption ,
        userScore,
        setUserScore,
        systemScore , 
        setSystemScore}}>
    {props.children}
    </OptionContext.Provider>
    )
}
export default OptionProvider;