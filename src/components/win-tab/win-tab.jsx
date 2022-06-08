import { Component } from "react";

import "./win-tab.scss";

class WinTab extends Component{
    render (){
        const {winType} = this.props;
        let classes = "win_tab"
        if (winType) {
            classes += ' active';
        }

        return (
            <div className={classes}>
                {`You ${winType}`}
            </div>
        )
    }
}

export default WinTab;