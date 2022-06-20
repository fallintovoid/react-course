import React from 'react'

import BetList from "../bet-list/bet-list";
import BetWindow from "../bet-window/bet-window";

import { useState } from "react";

const MainPage = ({setUserMoney, data, setData, setWinText, userMoney}) => {
    
    const [isBetWindow, setIsBetWindow] = useState(false);
    const [teamName, setTeamName] = useState('');
    const [teamCo, setTeamCo] = useState();
    const [betValue, setBetValue] = useState('');
    const [id, setId] = useState();

    const getRandomInt = (limit) => {
        return Math.floor(Math.random() * limit)
    }

    const openBetWindow = (teamName, teamCo, id) => {
        setTeamName(teamName);
        setTeamCo(teamCo);
        setIsBetWindow(true);
        setId(id);
    }
    const closeBetWindow = () => {
        setIsBetWindow(false);
        setBetValue('');
    }

    const deleteObj = (id) => {
        setData(data => data.filter(item => item.id !== id))
    }

    const findWonTeam = (id) => {
        if (getRandomInt(2) === 1) {
            setTimeout(() => {
                setWinText(`You won ${betValue * teamCo}`)
                setUserMoney(money => money + betValue * teamCo);
                deleteObj(id);
                setTimeout(() => {
                    setWinText('');
                }, 2000)
            }, 2000);
            closeBetWindow(false);
        } else {
            setTimeout(() => {
                setWinText(`You lost ${betValue}`)
                setUserMoney(money => money - betValue);
                deleteObj(id);
                setTimeout(() => {
                    setWinText('');
                }, 2000)
            }, 2000);
            closeBetWindow(false);
        }
    }
    return (
        <>
            <BetList 
                data = {data}
                openBetWindow = {openBetWindow}/>
            {
            isBetWindow 
                ? <BetWindow 
                    teamName = {teamName} 
                    teamCo = {teamCo} 
                    closeBetWindow = {closeBetWindow}
                    setBetValue = {setBetValue}
                    betValue = {betValue}
                    findWonTeam = {findWonTeam}
                    id = {id}/> 
                    
                : null
            }   
        </>
    )
}

export default MainPage