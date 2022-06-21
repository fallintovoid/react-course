import React from 'react';

import "./history-item.scss";

const HistoryItem = ({teamName, betAmount, win}) => {
    return (
        <div 
            className="history-item mt-3"
            style={{backgroundColor: win ? '#A2F9A3' : '#F9AEA2'}}>
                <div className="history-item-text">
                    {`You have bet on `} 
                    <span
                        style={{fontWeight: '700', color: 'black'}}>{teamName}</span>
                </div>
                <div 
                    className="history-item-bet"
                    style={{color: win ? 'black' : 'white'}}>
                        {`${win ? `+${betAmount}` : `-${betAmount}`}`}
                </div>
        </div>
    )
}

export default HistoryItem