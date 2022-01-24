import React from 'react';
import './pollbar.css'


const Pollbar = () => {
  return <div className="votationBar">
                <div className="thumbsUp" >
                    <img src="../../assets/img/thumbs-up.svg" alt="thumbs up" />
                    <p className="percentageUp">25%</p>
                </div>
                <div className="thumbsDown">
                    <p className="percentageDown">75%</p>
                    <img src="../../assets/img/thumbs-down.svg" alt="thumbs Down" />
                </div>
        </div>
  
};

export default Pollbar;
