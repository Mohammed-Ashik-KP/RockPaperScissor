import React, { useContext, useEffect, useState } from 'react';
import rock from '../icons/rock.png'
import paper from '../icons/paper.png'
import scissor from '../icons/scissor.png'
import  OptionProvider ,{ OptionContext } from '../context/context';

const Options = () => {
    const{ Option , setOption, SystemOption , setSystemOption } = useContext(OptionContext); 
    const [update , setUpdate] = useState(true);
    const  handleClick = (e)=>{
        setOption(e);
        setUpdate(!update)
       const random = Math.floor(Math.random()*3);
       const options=[rock,paper,scissor];
       setSystemOption(options[random])
       
      
    }
    useEffect(()=>{
            switch (Option) {
                case rock:
                       if(SystemOption===rock){
                           console.log('draw')
                       }
                       if(SystemOption===paper){
                           console.log('system wins')
                       }
                       if(SystemOption===scissor){
                           console.log("user wins")
                       }
                    break;
                case paper:
                        if(SystemOption===rock){
                            console.log('user wins')
                        }
                        if(SystemOption===paper){
                            console.log('draw')
                        }
                        if(SystemOption===scissor){
                            console.log("system wins")
                        }
                     break;
                case scissor:
                       if(SystemOption===rock){
                           console.log('system win')
                       }
                       if(SystemOption===paper){
                           console.log('user wins')
                       }
                       if(SystemOption===scissor){
                           console.log("draw")
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
        </React.Fragment>
     );
}
 
export default Options;