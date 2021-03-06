import { Button } from "react-bootstrap";
import { BsTwitch } from "react-icons/bs";

import './bet-list-item.scss';
import styled from "styled-components";

const BetListItem = ({firstTeamName, secondTeamName, firstCo, secondCo, srcOne, srcTwo, time, date, openBetWindow, id}) => {
    
    return (
        <div className = "bet-list-item">
            <div className="team-names">
                <div className="team-one">
                    <div className="team-img">
                        <img src = {srcOne} alt = "img"/>
                    </div>
                    <div className="team-name">
                        {firstTeamName}
                    </div>
                </div>
                <div className="team-two">
                    <div className="team-img">
                        <img src = {srcTwo} alt = "img"/>
                    </div>
                    <div className="team-name">
                        {secondTeamName}
                    </div>
                </div>
            </div>

            <div className="time">
                <div className="icon">
                    <BsTwitch color = "purple"/>
                </div>
                <div className="date">
                    {date}
                </div>
                <div className="time-hrs">
                    {time}
                </div>
            </div>
            <div className="team-buttons">
                <CustomButton variant="secondary" onClick = {() => openBetWindow(firstTeamName, firstCo, id)}>{firstCo}</CustomButton>
                <CustomButton variant="secondary" onClick = {() => openBetWindow(secondTeamName, secondCo, id)}>{secondCo}</CustomButton>
            </div>
        </div>

    )
}

const CustomButton = styled(Button)`
    height: 90%;
    width: 33%;
    font-size: 4vw;
    font-weight: 700;
`;

export default BetListItem;