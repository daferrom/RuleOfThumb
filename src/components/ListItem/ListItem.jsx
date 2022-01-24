import React from "react";
import "./listItem.css";


const ListItem = ({props}) => {
  const imageUrl = `https://github.com/daferrom/RuleOfThumb/blob/main/public/assets/img/backgroundcards/${props.picture}?raw=true`

  return (
    <div className="itemContainer">
      <div className="iconCont">
        <img src="../../assets/img/thumbs-up.svg" alt="thumbs up" />
      </div>
      <img className="imgCelebrity" src={imageUrl} alt="Kaney"></img>
      <div className="textsContainer">
        <h2 className="pollTitle">{props.name}</h2>
        <h3 className="questionList">
          {props.description}
        </h3>{" "}
      </div>
      <div className="containerDateAndBtns">
        <h4 className="pubSince">1 month ago in Entertainment</h4>
        <div className="btnsContainer">
          <div className="thumbBtns"></div>
            <button className="iconBtn" aria-label="thumbs up">
              <img src="../../assets/img/thumbs-up.svg" alt="thumbs up" />
            </button>
            <button className="iconBtn" aria-label="thumbs down">
              <img src="../../assets/img/thumbs-down.svg" alt="thumbs down" />
            </button>
          <div className="labelVoteNow">Vote Now</div>
        </div>
      </div>
      <div className="votationBarLi">
                <div className="thumbsUp">
                    <img src="../../assets/img/thumbs-up.svg" alt="thumbs up" />
                    <p className="percentageUp">25%</p>
                </div>
                <div className="thumbsDown">
                    <p className="percentageDown">75%</p>
                    <img src="../../assets/img/thumbs-down.svg" alt="thumbs Down" />
                </div>
        </div>
    </div>
  );
};

export default ListItem;
