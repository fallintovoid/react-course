import React from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { AiOutlineCloseCircle } from 'react-icons/ai';

import "./bet-window.scss"

const BetWindow = ({teamName, teamCo, closeBetWindow, setBetValue, betValue, findWonTeam, id}) => {
  return (
    <div className="bet-window">
        <AiOutlineCloseCircle 
            className='close' 
            color="white" 
            style = {{
                position: 'absolute',
                top: '5px',
                left: '2%',
                fontSize: '1.5rem',
                cursor: 'pointer'
            }}
            onClick = {closeBetWindow}/>
        <div className="info">
            Result - {teamName} wins
        </div>
        <CustomControl className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
                {teamCo}
            </InputGroup.Text>
            <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e) => setBetValue(e.target.value)}
                value = {betValue}
            />
        </CustomControl>
        <Button 
            variant="success"
            onClick = {() => findWonTeam(id)}>BET</Button>
    </div>
  )
}

const CustomControl = styled(InputGroup)`
    width: 70%;
`

export default BetWindow