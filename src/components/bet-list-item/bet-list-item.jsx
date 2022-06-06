import { Component } from "react";

import BetTeamOne from "../bet-team-one/bet-team-one";
import BetTeamTwo from "../bet-team-two/bet-team-two";

import './bet-list-item.scss';

class BetListItem extends Component{

    render() {
        const {teamOne, teamTwo, id, coOne, coTwo, active, onOneActive, onTwoActive, findWinTeam} = this.props
        return (
            <div className="bet-list-item">
                <BetTeamOne 
                    name = {teamOne}
                    co = {coOne}
                    active = {active.one}
                    onOneActive = {onOneActive}
                    findWinTeam = {findWinTeam}
                    id = {id}/>
                <BetTeamTwo
                    name = {teamTwo}
                    co = {coTwo}
                    active = {active.two}
                    onTwoActive = {onTwoActive}
                    findWinTeam = {findWinTeam}
                    id = {id}/>
            </div> 
        )
    }
}

export default BetListItem;