
import styled from 'styled-components'

const VotationBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`
const ThumbsUpBar = styled.div`
  display: flex;
  background-color: rgba(var(--color-green-positive), 0.7);
  width: ${props => props.width}%;
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
    width: ${props => props.width}%;
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

const Pollbar = ({ likes, dislikes}) => {
 
  let vNegative = dislikes
  let vPositive = likes
  let totalVotes = vNegative + vPositive
  
  let percentageNeg = (vNegative / totalVotes * 100).toFixed(1)
  let percentagePos = (vPositive / totalVotes * 100).toFixed(1)
  
  // const [ percentageNeg, setPercentageNeg ] = useState((vNegative / totalVotes * 100).toFixed(1))
  
  // console.log(likes)
  return (
    <div>
      <VotationBar>
        <ThumbsUpBar width={percentagePos} >
          <ThumbUpIcon src='../../assets/img/thumbs-up.svg' alt='thumbs up' />
          <Percentage>{percentagePos}%</Percentage>
        </ThumbsUpBar>
        <ThumbsDownBar width={percentageNeg}>
          <Percentage >{percentageNeg}%</Percentage>
          <ThumbsDownIcon src='../../assets/img/thumbs-down.svg' alt='thumbs Down' />
        </ThumbsDownBar>
      </VotationBar>
    </div>
  )
}

export default Pollbar
