import Header from "../header/header";
import AddWindow from "../add-window/add-window";
import MainPage from "../pages/main-page";

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss'
import { useState } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import WinTab from "../win-tab/win-tab";

const App = () => {
    const [userMoney, setUserMoney] = useState(6000);
    const [maxId, setMaxId] = useState(1);
    const [winText, setWinText] = useState('');
    const [data, setData] = useState([
        {
            firstTeamName: 'Navi',
            secondTeamName: 'OG',
            firstCo: 2,
            secondCo: 1.4,
            time: `18:30`,
            date: `21.06.22`,
            srcOne: 'https://d3dwep9z8m8y9r.cloudfront.net/publications/2022/06/publications-9749/preview/28598/548.jpg',
            srcTwo: 'https://pbs.twimg.com/profile_images/1516719305777426433/2xSX0HN7_400x400.jpg',
            id: 0
        }
    ])

    const makeObj = (firstTeamName, secondTeamName, firstCo, secondCo, 
        time, date, srcOne, srcTwo) => {
        if ((firstTeamName.length === 0 || secondTeamName.length === 0 || srcOne.length === 0 || srcTwo.length === 0 || !date.includes('.') || !time.includes(':') || (firstCo.toUpperCase() !== firstCo.toLowerCase() || firstCo.includes(',')) || (secondCo.toLowerCase() !== secondCo.toUpperCase() || secondCo.includes(',')))) {
            console.log('TRIED')
            setWinText('Error!')
            setTimeout(() => {
                setWinText('')
            }, 2000)
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
                id: maxId
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
                    <Route path='/react-course' element={<MainPage 
                        setUserMoney={setUserMoney} 
                        data ={data} 
                        setData = {setData}
                        setWinText = {setWinText}
                        userMoney = {userMoney}/>}/>
                    <Route path='/add' element={<AddWindow 
                        makeObj = {makeObj}
                        setWinText = {setWinText}/>}/>
                </Routes>
                <WinTab winText={winText}/>
            </div>
        </BrowserRouter>
        
    )
}

export default App;