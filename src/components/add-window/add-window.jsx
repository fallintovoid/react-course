import { Component } from "react";

import './add-window.scss'

class AddWindow extends Component{

    state = {
        firstTeamName: '',
        coFirstTeam: '',
        secondTeamName: '',
        coSecondTeam: ''
    }

    connectInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {firstTeamName, coFirstTeam, secondTeamName, coSecondTeam} = this.state;
        const {onMakeObj} = this.props;

        return(
            <div className="container_add">
                <div className="add_tab">
                    <form
                       >
                        <input 
                            type="text" 
                            name="firstTeamName" 
                            className="input_teamone" 
                            placeholder="team one"
                            onChange = {this.connectInput}
                            value = {firstTeamName}>
                        </input>
                        <input 
                            type="text" 
                            name="secondTeamName" 
                            className="input_teamtwo" 
                            placeholder="team two"
                            onChange = {this.connectInput}
                            value = {secondTeamName}>
                        </input>
                        <input 
                            type="text" 
                            name="coFirstTeam" 
                            className="input_coone" 
                            placeholder="co one"
                            onChange = {this.connectInput}
                            value = {coFirstTeam}>
                        </input>
                        <input 
                            type="text"
                            name="coSecondTeam" 
                            className="input_cotwo" 
                            placeholder="co two"
                            onChange = {this.connectInput}
                            value = {coSecondTeam}>
                        </input>
                        <div 
                            className="add_button"  
                            onClick = {() => onMakeObj(firstTeamName, coFirstTeam, secondTeamName, coSecondTeam)}>
                                <p>ADD</p>
                        </div>
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default AddWindow;