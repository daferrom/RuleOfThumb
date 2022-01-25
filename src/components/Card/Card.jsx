import { useState , useRef } from 'react'
import React from 'react'
import Pollbar from '../Pollbar/Pollbar'
import './card.css'

const Card = ({ props }) => {
  const imgUrl = `url(https://github.com/daferrom/RuleOfThumb/blob/main/public/assets/img/backgroundcards/${props.picture}?raw=true)`
   
  const [disableVoteBtn, setdisableVoteBtn] = useState(true)
  const [ isLikeActive , setIsLikeActive] = useState(false)
  const [ isDislikeActive , setIsDisLikeActive] = useState(false)
  const [ textVoteBtn , setTextVoteBtn] = useState('Vote Now')

  const InitialState = {
    disableVoteBtn:true,
    isLikeActive:false,
    isDislikeActive:false,
    textVoteBtn:'Vote Now',
  }


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
  if( isLikeActive === true && isDislikeActive === false){
     console.log(isLikeActive)
     console.log(isDislikeActive)   
   } 

   if( isLikeActive === false && isDislikeActive === false){
    console.log("sin clicks")   
  }

    const postVote = ( likeVote , disLikeVote ) => {
    textVoteBtn === 'Vote Again' ? setTextVoteBtn('Vote Now'):setTextVoteBtn('Vote Again')
    setdisableVoteBtn(true)

    if( likeVote === true ){
      
      console.log("enviaste voto me gusta")

    } else if (disLikeVote === true){
      
      console.log("enviaste voto no me gusta")

    }
    
    }

  // disableVoteBtntrue === false && textVoteBtn === 'Vote Again'?: 
    
    
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
          <h2 className='pollTitle'>{textVoteBtn === 'Vote Again'? 'Thank for your Vote': props.name}</h2>
        </div>
        <h3 className='description'>{props.description}</h3>
      </div>
      <h4 className='pubDate'>2 months ago</h4>
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
      <Pollbar votes={props.votes} />
    </div>
  )
}

export default Card
