import React from "react";
import { useNavigate } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import { GetMatchups, GetUser } from '../../ApiRequests'

import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


function Home() {

    const navigate = useNavigate()
    const [matchups, setMatchups] = useState([])
    const [matchupID, setMatchupID] = useState('')
    const [selectedWinner, setSelectedWinner] = useState('')
    const [expand, setExpand] = useState(false)

    useEffect(() => {
        getMatchups()
        // getUser()
    }, [])

    //Get all available matchups
    const getMatchups = async () => {
        const response = await GetMatchups()
        setMatchups(response.data)
    }

    //Get users current matchups 
    const getUser = async () => {
        const response = await GetUser('id')
    }


    const handleClickVote = (matchup) => {
        setSelectedWinner('')
        setMatchupID(matchup._id)
        setExpand(true)
    }

    const renderMatchups = (matchup, index) => {
        return (
            <Card className='mx-3 my-4' style={{ width: '21rem' }}>
                <Card.Body >
                    <Card.Title>{matchup.team1} <i>vs</i> </Card.Title>
                    <Card.Title>{matchup.team2}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Round {matchup.round}</Card.Subtitle>
                    <Button variant='outline-primary' className="w-100 mt-3 mb-1" onClick={() => { handleClickVote(matchup) }}>Vote</Button>
                    {matchupID == matchup._id && expand &&
                        <>
                            <hr></hr>
                            <Dropdown className="w-100">
                                <Dropdown.Toggle variant="primary" id="dropdown-basic" className="w-100 my-1">
                                    {selectedWinner}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setSelectedWinner(matchup.team1)}>{matchup.team1}</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectedWinner(matchup.team2)}>{matchup.team2}</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectedWinner('You are stupid')}>I dont know...</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {
                                (selectedWinner==matchup.team1 || selectedWinner==matchup.team2) && 
                                <>
                                    <Button className="my-1 w-100" variant='outline-primary'>Submit</Button>
                                </>
                            }
                        </>
                    }

                </Card.Body>
            </Card>
        )
    }

    //display all matchups as a card

    //if you don't have that matchup yet as a selection, button to vote. Otherwise, can't vote. 


    return (
        <div className="">
            <div className="container" style={{ paddingTop: '2rem' }}>
                <button onClick={() => console.log(matchups)}>testing</button>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>leader board</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Everyones points</Card.Subtitle>
                        <Card.Text>
                            Kurtis 20points
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>

                <hr></hr>
                <div className="row d-flex flex-row justify-content-start">
                    {matchups.map(renderMatchups)}
                </div>
            </div>
        </div>
    );
}

export default Home;