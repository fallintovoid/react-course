import { Component } from "react";

import './add-window.scss'

class AddWindow extends Component{

    state = {
        firstTeamName: null,
        coFirstTeam: null,
        secondTeamName: null,
        coSecondTeam: null
    }

    connectInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div className="container_add">
                <div className="add_tab">
                    <form>
                        <input 
                            type="text" 
                            name="firstTeamName" 
                            className="input_teamone" 
                            placeholder="team one"
                            onChange = {this.connectInput}>
                        </input>
                        <input 
                            type="text" 
                            name="secondTeamName" 
                            className="input_teamtwo" 
                            placeholder="team two"
                            onChange = {this.connectInput}>
                        </input>
                        <input 
                            type="text" 
                            name="coFirstTeam" 
                            className="input_coone" 
                            placeholder="co one"
                            onChange = {this.connectInput}>
                        </input>
                        <input 
                            type="text"
                            name="coSecondTeam" 
                            className="input_cotwo" 
                            placeholder="co two"
                            onChange = {this.connectInput}>
                        </input>
                        <div className="add_button" type="submit"><p>ADD</p></div>
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default AddWindow;