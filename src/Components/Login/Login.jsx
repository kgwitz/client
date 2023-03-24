import React from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import { useState } from "react";
import "../main.css"
import { useNavigate } from "react-router-dom";



function LoginPage() {
    const navigate = useNavigate()

    const [showCreateAccount, setShowCreateAccount] = useState(false)
    const [showLogin, setShowLogin] = useState(false)

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleClickLogin = () => {
        setShowLogin(!showLogin)
        setShowCreateAccount(false)
        setPassword('')
        setUserName('')
    }

    const handleClickCreateAccount = () => {
        setShowLogin(false)
        setShowCreateAccount(!showCreateAccount)
        setPassword('')
        setUserName('')
    }

    return (
        <div className="" style={{ paddingTop: '4rem' }}>
            <div className="container d-flex flex-row align-items-center justify-content-center" style={{ maxWidth: '500px' }}>
                <Card style={{ width: '28rem' }}>
                    <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                        <Card.Title style={{ paddingTop: '25px' }}>SLVSH BRACKET</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted" style={{ paddingTop: '10px' }}>Welcome</Card.Subtitle>
                        <Button className='w-50' style={{ marginTop: '25px' }} onClick={() => {handleClickLogin()}}>Login</Button>
                        
                        {showLogin &&
                            <div className="w-100 d-flex flex-column justify-content-center align-items-center" style={{paddingTop: '25px', paddingBottom: '25px'}}>
                                <hr className="w-100"></hr>
                                <div className="row w-50" style={{paddingTop: '15px', height: '55px'}}>
                                    <input placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                                </div>
                                <div className="row w-50" style={{paddingTop: '10px', height: '55px'}}>
                                    <input type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                </div>
                                <Button variant='outline-primary' className="w-50" style={{marginTop: '10px'}} onClick={() => {navigate('/home')}}>Sign in</Button>
                                <hr className="w-100" style={{marginTop: '30px'}}></hr>
                            </div>
                        }

                        <div className="" style={{ paddingTop: '15px' }}>or</div>
                        <Card.Link className="hover-pointer" onClick={() => { handleClickCreateAccount() }} style={{ paddingTop: '15px' }}>Create Account</Card.Link>
                        {showCreateAccount &&
                            <div className="w-100 d-flex flex-column justify-content-center align-items-center" style={{paddingTop: '25px', paddingBottom: '25px'}}>
                                <hr className="w-100"></hr>
                                <div className="row w-50" style={{paddingTop: '15px', height: '55px'}}>
                                    <input placeholder="Username"></input>
                                </div>
                                <div className="row w-50" style={{paddingTop: '10px', height: '55px'}}>
                                    <input placeholder="Password"></input>
                                </div>
                                <Button variant='outline-primary' className="w-50" style={{marginTop: '10px'}}>Sign Up</Button>
                            </div>

                        }
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default LoginPage;