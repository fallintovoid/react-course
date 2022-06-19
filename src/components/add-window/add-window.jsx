import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './add-window.scss'

const AddWindow = ({makeObj, setWinText}) => {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [firstCo, setFirstCo] = useState('');
    const [secondCo, setSecondCo] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [srcOne, setSrcOne] = useState('');
    const [srcTwo, setSrcTwo] = useState('');

    useEffect(() => {
        document.title = 'Add Form';
        return () => {
            document.title = 'Bet List'
        }
    }, [])

   

    return(
        
        <div className="container_add">
            <div className="add_tab">
                <form>
                    <input 
                        type="text" 
                        name="firstTeamName" 
                        className="input_teamone" 
                        placeholder="team one"
                        onChange = {(e) => setFirstName(e.target.value)}
                        value = {firstName}>
                    </input>
                    <input 
                        type="text" 
                        name="secondTeamName" 
                        className="input_teamtwo" 
                        placeholder="team two"
                        onChange = {(e) => setSecondName(e.target.value)}
                        value = {secondName}>
                    </input>
                    <input 
                        type="text" 
                        name="coFirstTeam" 
                        className="input_coone" 
                        placeholder="Multiplier of first team"
                        onChange = {(e) => setFirstCo(e.target.value)}
                        value = {firstCo}>
                    </input>
                    <input 
                        type="text"
                        name="coSecondTeam" 
                        className="input_cotwo" 
                        placeholder="Multiplier of second team"
                        onChange = {(e) => setSecondCo(e.target.value)}
                        value = {secondCo}>
                    </input>
                    <input 
                        type="text"
                        name="date" 
                        className="input_cotwo" 
                        placeholder="Date"
                        onChange = {(e) => setDate(e.target.value)}
                        value = {date}>
                    </input>
                    <input 
                        type="text"
                        name="time" 
                        className="input_cotwo" 
                        placeholder="Time"
                        onChange = {(e) => setTime(e.target.value)}
                        value = {time}>
                    </input>
                    <input 
                        type="text"
                        name="srcOne" 
                        className="input_cotwo" 
                        placeholder="Image for first team"
                        onChange = {(e) => setSrcOne(e.target.value)}
                        value = {srcOne}>
                    </input>
                    <input 
                        type="text"
                        name="srcTwo" 
                        className="input_cotwo" 
                        placeholder="Image for second team"
                        onChange = {(e) => setSrcTwo(e.target.value)}
                        value = {srcTwo}>
                    </input>
                    <div 
                        className="add_button"  
                        onClick = {() => {makeObj(firstName, secondName, firstCo, secondCo, time, date, srcOne, srcTwo)}}>
                            <Link to="/react-course" style={{'textDecoration' : 'none', 'color' : 'black'} }><p>ADD</p></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddWindow;