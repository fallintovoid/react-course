import { Component } from "react";

import "./win-tab.scss";

class WinTab extends Component{
    render (){
        const {winActive, betText} = this.props;
        let classes = "win_tab"
        if (winActive) {
            classes += ' active';
        }

        return (
            <div className={classes}>
                {betText}
            </div>
        )
    }
}

export default WinTab;