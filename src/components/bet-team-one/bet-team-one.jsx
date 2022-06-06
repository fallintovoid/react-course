import { Component } from "react" 

import './bet-team-one.scss'

class BetTeamOne extends Component{
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
        const {name, co, active, onOneActive, findWinTeam, id} = this.props;
        let classes = "bet_team_one";
        if (active) {
            classes += ' active';
        }

        return (
            <div className={classes}>
                <div 
                    className="bet_team_one_name"
                    onClick = {onOneActive}>
                    {name}
                </div>
                <div className="bet_team_one_co">
                    {co}
                </div>
                <input 
                    type="text" 
                    placeholder={`Co = ${co}`} 
                    name="betamount" 
                    className="bet_team_one_in"
                    onChange={this.connectInput}
                    value={this.state.value}/>
                <div 
                    className="bet_team_one_butt"
                    onClick = {() => findWinTeam(1, this.state.value, co, id)}>
                    BET
                </div>
            </div>
        )
    }
}

export default BetTeamOne;