import React from 'react'
import styled from 'styled-components'

const VotationBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`
const ThumbsUpBar = styled.div`
  display: flex;
  background-color: rgba(var(--color-green-positive), 0.7);
  width: 25%;
  position: absolute;
  bottom: 0;
  left: 0;
`
const ThumbUpIcon = styled.img`
  margin-left:1em;
`
const ThumbsDownIcon = styled.img`
   margin-right:1em;

`
const ThumbsDownBar = styled.div`
    display:flex;
    background-color:rgba(var(--color-yellow-negative), .7);
    width:75%;
    position:absolute;
    bottom:0;
    right: 0;
    justify-content: right;
`
const Percentage= styled.p`
    margin: 5px 5px;
    font-size: 1.6em;
    color:var(--color-white)
`
const Pollbar = ({votes}) => {
  let vNegative = votes.negative
  let vPositive = votes.positive
  let totalVotes = vNegative + vPositive
  let percentageNeg = vNegative / totalVotes * 100
  let percentagePos = vPositive / totalVotes * 100





  return (
    <div>
      <VotationBar>
        <ThumbsUpBar>
          <ThumbUpIcon src='../../assets/img/thumbs-up.svg' alt='thumbs up' />
          <Percentage>{percentagePos.toFixed(1)}%</Percentage>
        </ThumbsUpBar>
        <ThumbsDownBar>
          <Percentage>{percentageNeg.toFixed(1)}%</Percentage>
          <ThumbsDownIcon src='../../assets/img/thumbs-down.svg' alt='thumbs Down' />
        </ThumbsDownBar>
      </VotationBar>
    </div>
  )
}

export default Pollbar
