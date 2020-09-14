import React, { useContext } from 'react';
import { OptionContext } from '../context/context';
const Score = () => {
    const {userScore , systemScore} = useContext(OptionContext);
    return ( 
        <React.Fragment>
            <div className="row">
              <div className="col text-dark font-weight-bold text-center mt-3 mb-3"> Score Board </div>
              </div>
              <div className="row d-flex justify-content-center score-row">
                    <div className="col text-center">
                                You
                </div>
                <div className="col text-center">
                    System
                </div>
              </div>
              <div className="row score">
              <div className="col text-center m-2">
                                {userScore}
                </div>
                <div className="col text-center m-2">
                                {systemScore}
                </div>
              </div>
           
        </React.Fragment>
     );
}
 
export default Score;