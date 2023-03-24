import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { userContext } from '../userContext'
import { NavLink, useLinkClickHandler } from "react-router-dom"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container';

import Form from 'react-bootstrap/Form'
import { } from '../../ApiRequests'
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
        MenuItem
} from 'react-bootstrap';


const Navigation = () => {


    const { userLogin } = useContext(userContext)
    const { user } = useContext(userContext)
    const { setUserLogin } = useContext(userContext)
    const { setUser } = useContext(userContext)

    const [show, setShow] = useState(false)
    const [createNewAccount, setCreateNewAccount] = useState(false)
    const [password, setPassword] = useState('')
    const [userNameState, setUserNameState] = useState('')
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [showConfirmLogoutModal, setShowConfirmLogoutModal] = useState(false)

    console.log("user login", userLogin)

    const handleLoginModalClose = () => {
        setShow(false)
    }

    const handleLogout = () => {
        // setUserName('')
        setUser({ userName: '', _id: '' })
        setUserLogin(false)
        localStorage.setItem('userId', '')
        localStorage.setItem('userName', '')
    }

    // const handleLogin = async () => {
    //     const res = await Login({ userName: userNameState, password: password })

    //     if (res.length > 0) {
    //         console.log("logged in", res)
    //         localStorage.setItem('userName', res[0].userName)

    //         setShow(false)

    //         setUserLogin(true)

    //         console.log('response', res)
    //         console.log('setting username', res[0].userName)
    //         // setUserName(res[0].userName)
    //         setUser({ userName: res[0].userName, _id: res[0]._id })
    //         localStorage.setItem('userId', res[0]._id)
    //         localStorage.setItem('userName', res[0].userName)
    //         return
    //     } else {
    //         setShowConfirmModal(true)
    //         console.log("COULD NOT LOGIN")
    //     }
    // }

    // const handleCreateAccount = async () => {
    //     const data = {
    //         userName: userNameState,
    //         password: password
    //     }
    //     const res = await CreateUser(data)
    //     console.log(res)

    //     if (res) {
    //         setShowConfirmModal(true)
    //     }
    // }

    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-light">
                {/* <div className="d-flex flex-row w-100 justify-content-end"> */}
                {/* <NavLink className="navbar-brand" to="/">
                        logo
                    </NavLink>
                    <div className='mr-2'>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            {userLogin &&
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/user">
                                            My Bracket
                                        </NavLink>
                                    </li>
                                </>
                            }
                            {!userLogin &&
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">
                                        About
                                    </NavLink>
                                </li>
                            }
                        </ul>
                    </div>
                    <div className='d-flex flex-row'>
                        {!userLogin &&
                            <Button className='mx-2' onClick={() => setShow(true)}>
                                Sign In
                            </Button>
                        }
                        {userLogin &&
                            <div className='d-flex flex-row align-items-center px-3'>
                                <div className='nav-link username mx-2'>
                                    {user.userName}
                                </div>
                                <Button variant='secondary' className='mx-2' onClick={() => setShowConfirmLogoutModal(true)}>
                                    Logout
                                </Button>
                            </div>

                        }
                    </div>
                </div> */}

                <Navbar bg="light" expand="lg" style={{paddingLeft: '4rem'}}>
                    <Container>
                        <Navbar.Brand href="#home">SLVSH BRACKET</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link>Home</Nav.Link>
                                <NavDropdown title="My Bracket" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Round of 16</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Quarter Final</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Semi Final</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Final</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>




                {/* <Modal show={show} onHide={handleLoginModalClose}>
                    <Modal.Header>
                        <Modal.Title>Sign In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex flex-column justify-content-center align-items-center my-2 mx-5">
                            <p className="mb-3">By continuing, you are setting up a <b>BikeRoom</b> account and agree to the bike room terms and conditions. </p>
                            <div id="signInDiv" className="mt-3"></div>
                            <hr className='mb-3' style={{ width: '100%' }}></hr>
                            <InputGroup className='mb-3'>
                                <Form.Control
                                    placeholder="Username"
                                    value={userNameState}
                                    onChange={e => { setUserNameState(e.target.value); console.log(userNameState) }}
                                />
                            </InputGroup>
                            <InputGroup className='mb-3'>
                                <Form.Control
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </InputGroup>
                            {!createNewAccount ?
                                <>
                                    <Button className="mb-3 w-100" onClick={handleLogin}>Sign In</Button>
                                    <div>or</div>
                                    <div className='create-new-account my-3' onClick={() => setCreateNewAccount(true)}><u>Create a New Account</u></div>
                                </>
                                :
                                <>
                                    <Button className='my-3' onClick={handleCreateAccount}>Create Account</Button>
                                    <div>Already have an account?</div>
                                    <div className='create-new-account my-3' onClick={() => setCreateNewAccount(false)}><u>Login</u></div>
                                </>
                            }
                        </div>
                    </Modal.Body>
                </Modal> */}
                {/* {showConfirmModal &&
                    <ConfirmModal
                        showModal={showConfirmModal}
                        handleClose={() => setShowConfirmModal(false)}
                        handleConfirm={() => {
                            setShowConfirmModal(false)
                            setShow(false)
                        }}
                        title='Success'
                        text='You account was succesfully created. You may now login to start creating. '
                        okText='Sweet' />
                }
                {showConfirmLogoutModal &&
                    <ConfirmModal
                        showModal={showConfirmLogoutModal}
                        handleClose={() => setShowConfirmLogoutModal(false)}
                        handleConfirm={() => {
                            setShowConfirmLogoutModal(false)
                            handleLogout()
                        }}
                        title='Logout'
                        text='Are you sure you want to logout? '
                        okText='Yes'
                        cancelText='Cancel'
                        handleCancel={() => setShowConfirmLogoutModal(false)} />
                } */}
            </nav >
        </div >
    )
}

export default Navigation;