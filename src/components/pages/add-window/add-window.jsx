import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { InputGroup, Form, Button } from 'react-bootstrap';
import useInput from '../../../hooks/useInput';

import './add-window.scss'

const AddWindow = ({makeObj}) => {
    const firstName = useInput('');
    const secondName = useInput('');
    const firstCo = useInput('');
    const secondCo = useInput('');
    const date = useInput('');
    const time = useInput('');
    const srcOne = useInput('');
    const srcTwo = useInput('');

    useEffect(() => {
        document.title = 'Add Form';
    }, [])

    return(
        
        <div className="container_add">
            <div className="add_tab">
                <form>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Name of first team
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            {...firstName}/>
                    </InputGroup>
                    {firstName.error && <span style={{color: "red", margin: '0'}}>You must fill this gap!</span>}

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Name of second team
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            {...secondName}/>
                    </InputGroup>
                    {secondName.error && <span style={{color: "red"}}>You must fill this gap!</span>}

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Multiplier for first team
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            {...firstCo}/>
                    </InputGroup>
                    {firstCo.error && <span style={{color: "red"}}>You must fill this gap!</span>}

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Multiplier for second team
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            {...secondCo}/>
                    </InputGroup>
                    {secondCo.error && <span style={{color: "red"}}>You must fill this gap!</span>}

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Date
                        </InputGroup.Text>
                        <Form.Control
                            type="date"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            {...date}/>
                    </InputGroup>
                    {date.error && <span style={{color: "red"}}>You must fill this gap!</span>}

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Time
                        </InputGroup.Text>
                        <Form.Control
                            type="time"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            {...time}/>
                    </InputGroup>
                    {time.error && <span style={{color: "red"}}>You must fill this gap!</span>}

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Image for first team
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            {...srcOne}/>
                    </InputGroup>
                    {srcOne.error && <span style={{color: "red"}}>You must fill this gap!</span>}

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Image fo second team
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            {...srcTwo}/>
                    </InputGroup>
                    {srcTwo.error && <span style={{color: "red"}}>You must fill this gap!</span>}

                    <Button     
                        variant="success"
                        onClick = {() => {makeObj(firstName.value, 
                        secondName.value, 
                        firstCo.value, 
                        secondCo.value,
                        time.value, 
                        date.value, 
                        srcOne.value, 
                        srcTwo.value)}}>
                            <Link 
                                to="/react-course" 
                                style={{'textDecoration' : 'none', 
                                        'color' : 'white',
                                        'margin': '0'} }>
                                    ADD
                            </Link>
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default AddWindow;