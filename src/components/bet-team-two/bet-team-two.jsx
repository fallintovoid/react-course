import { Component } from "react" 

import './bet-team-two.scss'

class BetTeamTwo extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    connectInput = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render (){
        const {name, co, active, onTwoActive, findWinTeam, id} = this.props;
        let classes = "bet_team_two";
        if (active) {
            classes += ' active';
        }
        return (
            <div className={classes}>
                <div 
                    className="bet_team_two_name"
                    onClick = {onTwoActive}>
                    {name}
                </div>
                <div className="bet_team_two_co">
                    {co}
                </div>
                <input 
                    type="text" 
                    placeholder={`Co = ${co}`} 
                    name="betamount" 
                    className="bet_team_two_in" 
                    onChange={this.connectInput}
                    value={this.state.value}/>
                <div 
                    className="bet_team_two_butt"
                    onClick = {() => findWinTeam(2, this.state.value, co, id)}>
                    BET
                </div>
            </div>
        )
    }
}

export default BetTeamTwo;