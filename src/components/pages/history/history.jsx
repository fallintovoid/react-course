import React from 'react'
import HistoryList from '../../history-list/history-list'
import { useEffect } from 'react'


const History = ({history}) => {

    useEffect(() => {
        document.title = 'History';
    }, [])

    return (
        <div>
            <HistoryList history = {history}/>
        </div>
    )
}

export default History