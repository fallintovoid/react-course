import Header from "../header/header";
import AddWindow from "../add-window/add-window";
import MainPage from "../pages/main-page";
import History from "../pages/history/history";

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss'
import { useState } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import WinTab from "../win-tab/win-tab";
import useWinText from "../../hooks/useWinText";

const App = () => {
    const [userMoney, setUserMoney] = useState(6000);
    const [winText, setWinText, timeOut] = useWinText('');
    const [maxId, setMaxId] = useState(1);
    const [maxHistoryId, setMaxHistoryId] = useState(1);
    const [data, setData] = useState([
        {
            firstTeamName: 'Navi',
            secondTeamName: 'OG',
            firstCo: 2,
            secondCo: 1.4,
            time: `18:30`,
            date: `21-06-22`,
            srcOne: 'https://d3dwep9z8m8y9r.cloudfront.net/publications/2022/06/publications-9749/preview/28598/548.jpg',
            srcTwo: 'https://pbs.twimg.com/profile_images/1516719305777426433/2xSX0HN7_400x400.jpg',
            id: 0,
            fav: false
        }
    ]);

    const [history, setHistory] = useState([
        {
            teamName: 'Vitality',
            betAmount: 1000,
            win: false,
            id: 0
        }
    ]);

    const makeObj = (firstTeamName, secondTeamName, firstCo, secondCo, 
        time, date, srcOne, srcTwo) => {
        if ((firstTeamName.length === 0 || secondTeamName.length === 0 || srcOne.length === 0 || srcTwo.length === 0 || (firstCo.toUpperCase() !== firstCo.toLowerCase() || firstCo.includes(',')) || (secondCo.toLowerCase() !== secondCo.toUpperCase() || secondCo.includes(',')))) {
            setWinText('Error!');
            timeOut();
        } else {
            setMaxId(maxId => maxId + 1)
            let newObj = {
                firstTeamName,
                secondTeamName,
                firstCo,
                secondCo,
                time,
                date,
                srcOne,
                srcTwo,
                id: maxId,
                fav: false
            }
            setData(date => [...date, newObj])
        }
        
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Header
                    userMoney = {userMoney}/>
                <Routes>
                    <Route 
                        path='/react-course' 
                        element={<MainPage 
                            setUserMoney={setUserMoney} 
                            data ={data} 
                            setData = {setData}
                            setWinText = {setWinText}
                            timeout = {timeOut}
                            userMoney = {userMoney}
                            setHistory = {setHistory}
                            history = {history}
                            setMaxHistoryId = {setMaxHistoryId}
                            maxHistoryId = {maxHistoryId}/>}/>
                    <Route 
                        path='/add' 
                        element={<AddWindow 
                            makeObj = {makeObj}
                            setWinText = {setWinText}/>}/>
                    <Route 
                        path='/history' 
                        element={<History
                            history = {history}/>}/>
                </Routes>
                <WinTab winText={winText}/>
            </div>
        </BrowserRouter>
        
    )
}

export default App;