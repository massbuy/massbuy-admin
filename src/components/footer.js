import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Icon } from '@iconify/react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Store } from "../context/store";
import { Link } from "react-router-dom";

function Footer() {
    let store = useContext(Store);
    // let [allow, setAllow] = store.allowCookie;
    // let showAllow = () => {
    //     setAllow('none')
    // };
    return <>
        <Container>
            <footer>
                <Row className="footer">
                    <Col lg="3" md="3" sm="6" style={{ width: "max-content", margin: '0 auto' }}>
                        <h3>about us</h3>
                        <ul>
                            <li style={{ listStyle: 'none' }}>FAQ</li>
                            <li style={{ listStyle: 'none' }}>Anti-Scam</li>
                            <li style={{ listStyle: 'none' }}>Terms</li>
                            <li style={{ listStyle: 'none' }}>Privacy</li>
                        </ul>
                    </Col>

                    <Col lg="3" md="3" sm="6" style={{ width: "max-content", margin: '0 auto' }}>
                        <h3>contact & sitemap</h3>
                        <ul>
                            <li style={{ listStyle: 'none' }}>contact us</li>
                            <li style={{ listStyle: 'none' }}>sitemap</li>
                        </ul>
                    </Col>

                    <Col lg="3" md="3" sm="6" style={{ width: "max-content", margin: '0 auto' }}>
                        <h3>my account</h3>
                        <ul>
                            <Link to='/login'>
                                <li style={{ listStyle: 'none' }}>log in</li>
                            </Link>
                            <Link to='/register'>
                                <li style={{ listStyle: 'none' }}>register</li>
                            </Link>
                        </ul>
                    </Col>

                    <Col lg="3" md="3" sm="6" style={{ width: "max-content", margin: '0 auto' }}>
                        <h3>follow us on</h3>
                        <div className="flex">
                            <OverlayTrigger key="top" placement="top" overlay={
                                <Tooltip id="tooltip-top">
                                    Facebook
                                </Tooltip>
                            }>
                                <span style={{ background: '#3b5998' }}>
                                    <Icon icon="ri:facebook-circle-line" color="#3b5998" width="16" height="16" style={{ background: "white", borderRadius: '50%' }} />
                                </span>
                            </OverlayTrigger>

                            <OverlayTrigger key="top" placement="top" overlay={
                                <Tooltip id="tooltip-top">
                                    Twitter
                                </Tooltip>
                            }>
                                <span style={{ background: '#55acee' }}>
                                    <Icon icon="line-md:twitter" color="white" width="16" height="16" />
                                </span>
                            </OverlayTrigger>

                            <OverlayTrigger key="top" placement="top" overlay={
                                <Tooltip id="tooltip-top">
                                    Instagram
                                </Tooltip>
                            }>
                                <span style={{ background: '#cb2027' }}>
                                    <Icon icon="jam:instagram" color="white" width="16" height="16" />
                                </span>
                            </OverlayTrigger>

                            <OverlayTrigger key="top" placement="top" overlay={
                                <Tooltip id="tooltip-top">
                                    LinkedIn
                                </Tooltip>
                            }>
                                <span style={{ background: '#007bb5' }}>
                                    <Icon icon="fa6-brands:linkedin-in" color="white" width="16" height="16" />
                                </span>
                            </OverlayTrigger>

                            <OverlayTrigger key="top" placement="top" overlay={
                                <Tooltip id="tooltip-top">
                                    Pinterest
                                </Tooltip>
                            }>
                                <span style={{ background: '#cb2027' }}>
                                    <Icon icon="jam:pinterest" color="white" width="16" height="16" />
                                </span>
                            </OverlayTrigger>

                            <OverlayTrigger key="top" placement="top" overlay={
                                <Tooltip id="tooltip-top">
                                    Tiktok
                                </Tooltip>
                            }>
                                <span style={{ background: '#34495e' }}>
                                    <Icon icon="tabler:brand-tiktok" color="white" width="16" height="16" />
                                </span>
                            </OverlayTrigger>




                        </div>
                    </Col>
                </Row>
                <hr />
                <Row style={{ textAlign: 'center' }}>
                    <Col>
                        © 2022 African Heavy Duty Equipment Leasing. All Rights Reserved.
                    </Col>
                </Row>
            </footer>
        </Container>

        <div className="cookie-row" >
            <Container>
                Your experience on this site will be improved by allowing cookies.
                {/* <button onClick={showAllow()}>Allow cookies</button> */}
            </Container>
        </div>
    </>
}

export default Footer;