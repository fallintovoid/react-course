import React from 'react'
import HistoryItem from "../history-item/history-item"

import './history-list.scss'

const HistoryList = ({history}) => {
    const elems = history.map(({teamName, betAmount, win, id}) => {
        return <HistoryItem
            teamName={teamName}
            betAmount={betAmount}
            win={win}
            key={id}/>
    })
    return (
        <div className='history-list'>
            {elems}
        </div>
    )
}

export default HistoryList