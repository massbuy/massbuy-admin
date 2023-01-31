import React, { useState, useEffect, useContext } from "react";
import logo from "../assets/logo.png"
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Icon } from '@iconify/react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Store } from "../context/store";
import IconLoad from "../assets/arrow.svg";

function NavBar(props) {
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let [user, setUser] = store.userinfo;
    let [email, setEmail] = useState("");
    let location = useLocation()
    let [password, setPassword] = useState("");
    let history = useNavigate();
    const [show, setShow] = useState(false);
    let [none, setNone] = useState("none");
    let [block, setBlock] = useState("block");
    const [showPassword, setShowPassword] = useState('password');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const loginStatus = (e) => setBlock(e);
    const logoutStatus = (e) => setNone(e);
    let routePath = useLocation();

    useEffect(() => {
        userCheck();
    }, [routePath, email]);


    let userCheck = () => {
        if (localStorage.getItem("afriqId") === null) {
            loginStatus("block");
            logoutStatus("none");
        } else {
            loginStatus("none");
            logoutStatus("block");
        }

    };

    let loginUser = () => {
        let data = { email, password }
        let url = mainUrl + "/login";
        fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                setUser(result)
                localStorage.setItem("afriqId", result.user._id)
            })
        history('/')
        setEmail("");
        setPassword("");
        handleClose();
    };


    let handleLogout = () => {
        let url = mainUrl + "/logout";
        fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "POST"
        })
            .then(localStorage.removeItem("afriqId"))
            .then(history('/'))
        userCheck();
    };

    let handleShowPassword = () => {
        showPassword === 'password' ? setShowPassword('text') : setShowPassword('password')
    };

    return <>
        <Navbar collapseOnSelect expand="lg" id="nav">
            <Container className="" style={{ display: "flex", flexDirection: "column", justifyContent: "left" }}>
                <Navbar.Brand >
                    <Link to="/" className="logo">
                        <img id="logo" src={logo} alt="massbuy" />
                        <p style={{ color: "black" }}>MASS</p>
                        <p style={{ color: "#e35c1b" }}>BUY</p>
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="justify-content-end flex-grow-1 pe-3"
                        id="hamburger"
                        style={{ display: "flex", flexDirection: "column" }}
                    // navbarScroll
                    >
                        <Nav.Link id={props.class}>
                            <Link to='/' style={{ display: "flex", color: props.color }}>
                                <Icon icon="material-symbols:space-dashboard" width="22" height="22" className="me-3" />
                                <p>Dashboard</p>
                            </Link>
                        </Nav.Link>

                        <Nav.Link id={props.class1}>
                            <Link to='/customers' style={{ display: "flex", color: props.color1 }}>
                                <Icon icon="mdi:user-multiple" width="24" height="24" className="me-3" />
                                <p>Customer</p>
                            </Link>
                        </Nav.Link>

                        <Nav.Link id={props.class2} style={{ display: "flex", marginTop: "-10px", color: props.color2 }}>
                            <Icon icon="material-symbols:add-circle-outline-rounded" width="22" height="22" className="me-2 my-auto" />
                            <NavDropdown title="Create" id={props.class2} >

                                <NavDropdown.Item>
                                    <Link to="/create-package">
                                        Create Package
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/create-product">
                                        Create Items
                                    </Link>
                                </NavDropdown.Item>

                            </NavDropdown>
                        </Nav.Link>

                        <Nav.Link id={props.class3} style={{ display: "flex", marginTop: "-5px", color: props.color3 }}>
                            <Icon icon="teenyicons:bag-minus-outline" width="22" height="22" className="me-2 my-auto" />
                            <NavDropdown title="Products" id={props.class3} >
                                <NavDropdown.Item>
                                    <Link to="/products">
                                        All
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/items">
                                        Single Items
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/packages">
                                        Packages
                                    </Link>
                                </NavDropdown.Item>

                            </NavDropdown>
                        </Nav.Link>

                        <Nav.Link id={props.class4}>
                            <Link to='/register' style={{ display: "flex", color: props.color4 }}>
                                <Icon icon="teenyicons:bag-minus-outline" width="24" height="24" className="me-3" />
                                <p>Packages</p>
                            </Link>
                        </Nav.Link>

                        <Nav.Link id={props.class5}>
                            <Link to='/register' style={{ display: "flex", color: props.color5 }}>
                                <Icon icon="material-symbols:shopping-cart-outline" width="24" height="24" className="me-3" />
                                <p>Order</p>
                            </Link>
                        </Nav.Link>

                        <Nav.Link id={props.class6} style={{ display: "flex", marginTop: "-10px", color: props.color6 }}>
                            <Icon icon="tabler:currency-dollar" width="22" height="22" className="me-2 my-auto" />
                            <NavDropdown title="Payment" id="navbarScrollingDropdown" >
                                <NavDropdown.Item href="#action3">All</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Single Items</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Packages</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Link>

                        <Nav.Link id={props.class7}>
                            <Link to='/register' style={{ display: "flex", color: props.color7 }}>
                                <Icon icon="carbon:cics-transaction-server-zos" width="24" height="24" className="me-3" />
                                <p>Transactions</p>
                            </Link>
                        </Nav.Link>

                        <Nav.Link id={props.class8}>
                            <Link to='/register' style={{ display: "flex", color: props.color8 }}>
                                <Icon icon="uiw:pay" width="24" height="24" className="me-3" />
                                <p>Payout</p>
                            </Link>
                        </Nav.Link>

                        <Nav.Link id={props.class9}>
                            <Link to='/register' style={{ display: "flex", color: props.color9 }}>
                                <Icon icon="lucide:bar-chart" width="24" height="24" className="me-3" />
                                <p>Statistics</p>
                            </Link>
                        </Nav.Link>

                        <Nav.Link id={props.class10}>
                            <Link to='/register' style={{ display: "flex", color: props.color10 }}>
                                <Icon icon="material-symbols:chat" width="24" height="24" className="me-3" />
                                <p>Support</p>
                            </Link>
                        </Nav.Link>

                        <Nav.Link id={props.class11}>
                            <Link to='/register' style={{ display: "flex", color: props.color11 }}>
                                <Icon icon="fluent:people-community-28-filled" width="24" height="24" className="me-3" />
                                <p>Referal</p>
                            </Link>
                        </Nav.Link>

                        <Nav.Link id={props.class12}>
                            <Link to='/register' style={{ display: "flex", color: props.color12 }}>
                                <Icon icon="carbon:delivery" width="24" height="24" className="me-3" />
                                <p>Delivery</p>
                            </Link>
                        </Nav.Link>

                        <Nav.Link id={props.class13}>
                            <Link to='/register' style={{ display: "flex", color: props.color13 }}>
                                <Icon icon="material-symbols:chat" width="24" height="24" className="me-3" />
                                <p>Banner</p>
                            </Link>
                        </Nav.Link>

                        <Nav.Link id={props.class14}>
                            <Link to='/register' style={{ display: "flex", color: props.color14 }}>
                                <Icon icon="ant-design:setting-outlined" width="24" height="24" className="me-3" />
                                <p>Settings</p>
                            </Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to='/register'>
                                <Icon icon="humbleicons:logout" width="24" height="24" className="me-3" />
                                <p>Logout</p>
                            </Link>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    </>
}

export default NavBar;
