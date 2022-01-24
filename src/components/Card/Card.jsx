import React from 'react';
import './card.css'

const Card = ({props}) => {
    const imgUrl = `url(https://github.com/daferrom/RuleOfThumb/blob/main/public/assets/img/backgroundcards/${props.picture}?raw=true)`

  return (
 
  <div className='card' style={{backgroundImage:imgUrl}} >
        <div className='container'>
             <div className="iconAndTitleCont">  
                <div className='iconContainer' aria-label="thumbs">
                    <img className='icon' alt="ThumbDownIcon" src='../../assets/img/thumbs-down.svg' width="20" height="20"></img>
                </div>
                <h2 className='pollTitle'>{props.name}</h2>
             </div>   
             <h3 className='description'>{props.description}</h3>
               
            
        </div>
        <h4 className="pubDate">2 months ago</h4>
        <div className="thumbsContainer">
            <div className='buttonContainer'>
                <button className="iconButton" aria-label="thumbs up">
                    <img src="../../assets/img/thumbs-up.svg" alt="thumbs up" />
                </button>
                <button className="iconButton" aria-label="thumbs down">
                    <img src="../../assets/img/thumbs-down.svg" alt="thumbs down" />
                </button>
            </div>
            <div className="labelVoteNow">Vote Now</div>
        </div>
        <div className="votationBar">
                <div className="thumbsUp" >
                    <img src="../../assets/img/thumbs-up.svg" alt="thumbs up" />
                    <p className="percentageUp">{props.votes.positive}</p>
                </div>
                <div className="thumbsDown">
                    <p className="percentageDown">{props.votes.negative}</p>
                    <img src="../../assets/img/thumbs-down.svg" alt="thumbs Down" />
                </div>
        </div>
    </div>
  
 

  )
};

export default Card;
