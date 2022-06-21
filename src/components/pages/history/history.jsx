import React from 'react'
import HistoryList from '../../history-list/history-list'


const History = ({history}) => {
    return (
        <div>
            <HistoryList history = {history}/>
        </div>
    )
}

export default History