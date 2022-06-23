import Header from "../header/header";
import AddWindow from "../pages/add-window/add-window";
import MainPage from "../pages/main-page/main-page";
import History from "../pages/history/history";
import WinTab from "../win-tab/win-tab";
import useWinText from "../../hooks/useWinText";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss'


const App = () => {
    const [userMoney, setUserMoney] = useState(6000);
    const [winText, setWinText, timeOut] = useWinText('');
    const [maxId, setMaxId] = useState(3);
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
            id: 0
        },
        {
            firstTeamName: 'Vitality',
            secondTeamName: 'Astralis',
            firstCo: 1.2,
            secondCo: 1.7,
            time: `19:30`,
            date: `21-06-22`,
            srcOne: 'https://cdn1.dotesports.com/wp-content/uploads/2020/10/19061652/Screenshot_2020-10-19-Vitality_Brand-Guidelines_2020-pdf-768x506.png',
            srcTwo: 'https://yt3.ggpht.com/0M4ca-lJ8DKvAh7R9RUKHPp97QgagJs5z0jF6jl8stqrYrvYSKshxVyvKCzZSU6wkx0AkmeZ=s900-c-k-c0x00ffffff-no-rj',
            id: 1
        },
        {
            firstTeamName: 'Astarlis',
            secondTeamName: 'OG',
            firstCo: 2.1,
            secondCo: 1.1,
            time: `20:30`,
            date: `21-06-22`,
            srcOne: 'https://yt3.ggpht.com/0M4ca-lJ8DKvAh7R9RUKHPp97QgagJs5z0jF6jl8stqrYrvYSKshxVyvKCzZSU6wkx0AkmeZ=s900-c-k-c0x00ffffff-no-rj',
            srcTwo: 'https://pbs.twimg.com/profile_images/1516719305777426433/2xSX0HN7_400x400.jpg',
            id: 2
        },
        {
            firstTeamName: 'Navi',
            secondTeamName: 'Vitality',
            firstCo: 1.3,
            secondCo: 1.1,
            time: `11:30`,
            date: `21-06-22`,
            srcOne: 'https://d3dwep9z8m8y9r.cloudfront.net/publications/2022/06/publications-9749/preview/28598/548.jpg',
            srcTwo: 'https://cdn1.dotesports.com/wp-content/uploads/2020/10/19061652/Screenshot_2020-10-19-Vitality_Brand-Guidelines_2020-pdf-768x506.png',
            id: 3
        }
    ]);

    const [history, setHistory] = useState([
        {
            teamName: 'Vitality',
            betAmount: 1000,
            win: false,
            id: 0
        },
        {
            teamName: 'Astralis',
            betAmount: 2000,
            win: true,
            id: 1
        },

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