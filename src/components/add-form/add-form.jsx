import { Component } from "react"

import './add-form.scss'

class AddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            oneTeamValue: '',
            twoTeamValue: '',
            oneCo: '',
            twoCo: '',
        }
    }

    connectTeamOne = (e) => {
        this.setState({
            oneTeamValue: e.target.value
        })
    }

    connectTeamTwo = (e) => {
        this.setState({
            twoTeamValue: e.target.value
        })
    }

    connectOneCo = (e) => {
        this.setState({
            oneCo: e.target.value
        })
    }

    connectTwoCo = (e) => {
        this.setState({
            twoCo: e.target.value
        })
    }

    render() {
        const {onAdd} = this.props;
        const {oneTeamValue, twoTeamValue, oneCo, twoCo} = this.state
        return (
            <div className="app-add-form">
                <h3>Add new bet</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={()=>onAdd(oneTeamValue, twoTeamValue, oneCo, twoCo)}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Team one name?" 
                        name='name'
                        onChange={this.connectTeamOne}
                        value={oneTeamValue}
                        />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Co?" 
                        name='salary'
                        onChange={this.connectOneCo}
                        value={oneCo}
                        />
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Team two name?" 
                        name='name'
                        onChange={this.connectTeamTwo}
                        value={twoTeamValue}
                        />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Co?" 
                        name='salary'
                        onChange={this.connectTwoCo}
                        value={twoCo}
                        />
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            >Add</button>
                </form>
            </div>
        )
    }
}

export default AddForm