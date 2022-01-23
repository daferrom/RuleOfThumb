import React from "react";
import "./listItem.css";

const ListItem = () => {
  return (
    <div className="itemContainer">
      <div className="iconCont">
        <img src="../../assets/img/thumbs-up.svg" alt="thumbs up" />
      </div>
      <div className="imgCelebrity" alt="Kaney"></div>
      <div className="textsContainer">
        <h2 className="pollTitle">Kanye West</h2>
        <h3 className="questionList">
          Should him come back with Kim Kardashian?
        </h3>{" "}
      </div>
      <div className="containerDateAndBtns">
        <h4 className="pubSince">1 month ago in Entertainment</h4>;
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
      <div className="votationBar">
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
