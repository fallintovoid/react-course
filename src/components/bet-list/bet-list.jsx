import { Component } from "react";

import BetListItem from "../bet-list-item/bet-list-item";

import './bet-list.scss';

class BetList extends Component{
    render () {
        const {data, onOneActive, onTwoActive, findWinTeam} = this.props
        const items = data.map(item => (<BetListItem 
                                            teamOne = {item.teamOne}
                                            teamTwo = {item.teamTwo}
                                            coOne = {item.coOne}
                                            coTwo = {item.coTwo}
                                            active = {item.active}
                                            onOneActive = {() => onOneActive(item.id)}
                                            onTwoActive = {() => onTwoActive(item.id)}
                                            findWinTeam = {findWinTeam}
                                            key = {item.id}
                                            id = {item.id}/>
                                            
                                        ))
        return (
            <div className="bet-list">
                {items}
            </div>
        )
    }
}
export default BetList;