import React from 'react';
import './card.css'

const Card = () => {
  return (
  <div className='card'>
        <div className='container'>
            <div className='iconContainer' aria-label="thumbs">
                <img className='icon' alt="ThumbDownIcon" src='../../assets/img/thumbs-down.svg' width="20" height="20"></img>
            </div>
            <div className='texts'>
                <h2 className='pollTitle'>Kanye West</h2>
                <h3 className='question'>Should him come back with Kim Kardashian?</h3>
                <h4 className="pubDate">2 months ago</h4>
            </div>
        </div>
       
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
                <div className="thumbsUp">
                    <img src="../../assets/img/thumbs-up.svg" alt="thumbs up" />
                    <p className="percentage">25%</p>
                </div>
                <div className="thumbsDown">
                    <img src="../../assets/img/thumbs-down.svg" alt="thumbs Down" />
                    <p className="percentage">75%</p>
                </div>
        </div>
        

    </div>
 

  )
};

export default Card;
