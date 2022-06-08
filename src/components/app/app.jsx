import { Component } from "react";

import Header from "../header/header";
import BetList from "../bet-list/bet-list";
import WinTab from "../win-tab/win-tab";
import AddWindow from "../add-window/add-window";

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss'

class App extends Component{
    constructor(props){
        super(props);
        this.maxid = 2;
        this.state = {
            data: [
                {
                    teamOne: 'Astralis',
                    teamTwo: 'Vitality',
                    coOne: 2,
                    coTwo: 1.4,
                    active: {
                        one: false,
                        two: false
                    },
                    id: 0
                }
            ],
            userMoney: 6000,
            winActive: false,
            addActive: false
        }
    }

    oneActive = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    if (item.active.two){
                        return {...item, active: {one: !item.active.one, two: false}}
                    }
                    return {...item, active: {...item.active, one: !item.active.one}}
                }
                return item;
            })
        }))
    }

    twoActive = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    if (item.active.one){
                        return {...item, active: {two: !item.active.two, one: false}}
                    }
                    return {...item, active: {...item.active, two: !item.active.two}}
                }
                return item;
            })
        }))
    }

    showWinTab = (type, amount) => {
        if (type === 'win'){
            this.setState(({winActive})=> ({
                winActive: !winActive
            }))
            setTimeout(()=>{
                this.setState(({winActive})=> ({
                    winActive: !winActive
                }))
            }, 2000)
        } 
    }

    getRandomInt = (limit) => {
        return Math.floor(Math.random() * limit)
    }

    findWinTeam = (team, betMoney, co, id) => {
        if (team === 1){
            this.oneActive(id)
        } else {
            this.twoActive(id)
        }
        setTimeout(()=>{
            if (this.getRandomInt(3) === team){
                this.setState(({userMoney})=> ({
                    userMoney: userMoney + betMoney * co,
                }))
                this.showWinTab('win')
            } else if (this.getRandomInt(3) !== team){
                this.setState(({userMoney})=> ({
                    userMoney: userMoney - betMoney,
                }))
                this.showWinTab('win')
            }
            this.setState(({data})=> ({
                data: data.filter(item => item.id !== id)
            }))
        }, 1500)
        
    }

    onChangeAdd = () => {
        this.setState(({addActive})=> ({
            addActive: !addActive
        }))
    }

    onFalseAdd = () => {
        this.setState({addActive: false})
    }

    onMakeObj = () => {
        
    }

    render() {
        const {data, userMoney, winActive, addActive} = this.state

        const winActiveRender = 
            addActive 
            ? <AddWindow/> 
            : <BetList 
                data = {data} 
                onOneActive = {this.oneActive} 
                onTwoActive = {this.twoActive} 
                findWinTeam = {this.findWinTeam}/>

        return (
            <div className="App">
                <Header
                    userMoney = {userMoney}
                    onChangeAdd = {this.onChangeAdd}
                    onFalseAdd = {this.onFalseAdd}/>
                {winActiveRender}
                <WinTab
                    winActive = {winActive}/>
            </div>
        )
    }
}

export default App;