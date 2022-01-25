import { useState } from 'react'
import React from 'react'
import Pollbar from '../Pollbar/Pollbar'
import './card.css'

const Card = ({ props }) => {
  
 
  
  
  const imgUrl = `url(https://github.com/daferrom/RuleOfThumb/blob/main/public/assets/img/backgroundcards/${props.picture}?raw=true)`
   
  const [ disableVoteBtn, setdisableVoteBtn] = useState(true)
  const [ isLikeActive , setIsLikeActive] = useState(false)
  const [ isDislikeActive , setIsDisLikeActive] = useState(false)
  const [ textVoteBtn , setTextVoteBtn] = useState('Vote Now')
  const [ likes , setlikes ] = useState(props.votes.positive)
  const [ dislikes , setDislikes ] = useState(props.votes.negative)

  const clickOnlike =() => {

    setIsLikeActive(true)
    setIsDisLikeActive(false)
    
    setdisableVoteBtn(false)    

  }

  
  const clickOnDislike =() => {

    setIsLikeActive(false)
    setIsDisLikeActive(true)

    setdisableVoteBtn(false)
}
  const postVote = ( likeVote , disLikeVote ) => {
    // checks thetext of the btn and updates its text //  
    
    textVoteBtn === 'Vote Again' ? setTextVoteBtn('Vote Now'):setTextVoteBtn('Vote Again')
    likeVote === true ? setlikes(likes+1) : console.log('votaste no me gusta')
    disLikeVote === true ? setDislikes(dislikes+1):console.log('votaste me gusta')
    
    setdisableVoteBtn(true)

    }

  
    
  return (
    <div className='card' style={{ backgroundImage: imgUrl }}>
      <div className='container'>
        <div className='iconAndTitleCont'>
          <div className='iconContainer' aria-label='thumbs'>
            <img
              className='icon'
              alt='ThumbDownIcon'
              src='../../assets/img/thumbs-down.svg'
              width='20'
              height='20'
            ></img>
          </div>
          <h2 className='pollTitle'>{textVoteBtn === 'Vote Again'? 'Thank you for your vote!': props.name}</h2>
        </div>
        <h3 className='description'>{props.description}</h3>
      </div>
      <h4 className='pubDate'>2 months ago in {props.category}</h4>
      <div className='thumbsContainer'>
        <div className='buttonContainer'>
          <button
            className='iconButton'
            aria-label='thumbs up'
            onClick={e => clickOnlike(false)}
  
          ></button>
          <button
            className='iconButton'
            aria-label='thumbs down'
            onClick={e => clickOnDislike(false)}
          ></button>
          <button
            className='VoteNowBtn'
            disabled={disableVoteBtn}
            onClick={e => postVote(isLikeActive, isDislikeActive)}
          >
            {textVoteBtn}
          </button>
        </div>
      </div>
      <Pollbar votes={props.votes} likes={likes} dislikes={dislikes}/>
    </div>
  )
}

export default Card
