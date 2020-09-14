import React, { useContext, useEffect, useState } from 'react';
import rock from '../icons/rock.png'
import paper from '../icons/paper.png'
import scissor from '../icons/scissor.png'
import  { OptionContext } from '../context/context';

const Options = () => {
    let { Option , setOption, SystemOption , setSystemOption, systemScore , setSystemScore , userScore , setUserScore} = useContext(OptionContext); 
    const [update , setUpdate] = useState(true);
    const  handleClick = (e)=>{
        setOption(e);
        setUpdate(!update)
       let random = Math.floor(Math.random()*3);
       const options=[rock,paper,scissor];
       setSystemOption(options[random])
       
      
    }
    useEffect(()=>{
            switch (Option) {
                case rock:
                       if(SystemOption===rock){
                           
                       }
                       if(SystemOption===paper){
                        
                            setSystemScore(systemScore+1)
                       }
                       if(SystemOption===scissor){
                         setUserScore(userScore+1)
                       }
                    break;
                case paper:
                        if(SystemOption===rock){
                        setUserScore(userScore+1)
                        }
                        if(SystemOption===paper){
                           
                        }
                        if(SystemOption===scissor){
                            setSystemScore(systemScore+1)
                            
                        }
                     break;
                case scissor:
                       if(SystemOption===rock){
                        setSystemScore(systemScore+1)
                       }
                       if(SystemOption===paper){
                        setUserScore(userScore+1)
                       }
                       if(SystemOption===scissor){
                      
                       }
                    break;
                default:
                    break;
            }
    },[ update, Option])
    return ( 
        <React.Fragment>
            <div className="row mt-3">
                <div className="col text-center text-dark font-weight-bold">
                    Choose Your Option 
                </div>
            </div>
            <div className="row options-row mt-3 text-center">
                <div className="col option mr-1" onClick={(e)=>handleClick(rock)}>
                      <img src={rock} alt='rock' height="42px"/>
                      <p className="text-dark font-weight-bold">Rock</p>
                </div>
                <div className="col option ml-1 mr-1" onClick={(e)=>handleClick(paper)}>
                      <img src={paper} alt='paper' height="42px"/>
                      <p className="text-dark font-weight-bold">Paper</p>
                </div>
                <div className="col option ml-1" onClick={(e)=>handleClick(scissor)}>
                      <img src={scissor} alt='scissor' height="42px"/>
                      <p className="text-dark font-weight-bold">Scissor</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col text-center d-flex justify-content-center align-items-center">
                    <div className="button btn btn-danger">Reset</div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Options;