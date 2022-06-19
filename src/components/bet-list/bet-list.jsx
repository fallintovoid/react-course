import BetListItem from "../bet-list-item/bet-list-item";

import './bet-list.scss';

const BetList = ({data, openBetWindow}) => {
    const bets = data.map((
        {firstTeamName, 
        secondTeamName, 
        firstCo, 
        secondCo, 
        srcOne, 
        srcTwo,
        time,
        date,
        id}) => {
         return <BetListItem 
            firstTeamName = {firstTeamName}
            secondTeamName = {secondTeamName}
            firstCo = {firstCo}
            secondCo = {secondCo}
            srcOne = {srcOne}
            srcTwo = {srcTwo}
            date = {date}
            time = {time}
            key = {id}
            id = {id}
            openBetWindow = {openBetWindow}/>
    })
    return (
        <div className="bet-list">
            {bets}
        </div>
    )
}
export default BetList;