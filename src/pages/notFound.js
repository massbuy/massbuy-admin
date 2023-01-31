import React from "react";
import NavBar from "../components/navbar";
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import GoToTop from "../components/goToTop";

function NotFound() {
    return <>
        <div className="cenn">
            <div className="cen">
                <div className="row py-3">
                    <div className="col-md-3">
                        <NavBar />
                    </div>
                    <div className="col-md-9">

                        <h2>PAGE NOT FOUND</h2>
                        {/* <p style={{ fontWeight: "700" }}>Dashboard</p>
                        <Row className="mb-3">
                            <Col md="4" >
                                <div className="p-2" style={{
                                    justifyItems: "center", display: "flex", flexWrap: "wrap",
                                    background: "white", justifyContent: "space-between", height: "150px"
                                }}>
                                    <div className="col-md-7">
                                        <p>Today's Sales</p>
                                        <h3>$ 20.4K</h3>
                                        <p style={{ fontSize: "12px" }}>We have sold 123 items</p>
                                    </div>
                                    <div className="col-md-5">
                                        <PieChart
                                            data={[
                                                { title: 'Two', value: 35, color: '#e35c1b' },
                                                { title: 'One', value: 10, color: 'whitesmoke', }
                                            ]}
                                            startAngle={270}
                                            radius={35}
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col className="" md="4">
                                <div className="p-2" style={{ justifyItems: "center", display: "flex", background: "white", justifyContent: "space-between", height: "150px" }}>
                                    <div className="col-md-7">
                                        <p>Today's Order</p>
                                        <h3>$ 8.2K</h3>
                                    </div>
                                    <div className="col-md-5" style={{}}>
                                        <PieChart
                                            data={[
                                                { title: 'Two', value: 35, color: '#4ce13f' },
                                                { title: 'One', value: 25, color: 'whitesmoke', }
                                            ]}
                                            startAngle={270}
                                            radius={35}
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col className="" md="4">
                                <div className="p-2" style={{ justifyItems: "center", display: "flex", background: "white", justifyContent: "space-between", height: "150px" }}>
                                    <div className="col-md-7">
                                        <p>Today's Customer</p>
                                        <h3>2K</h3>
                                    </div>
                                    <div className="col-md-5" >
                                        <PieChart
                                            data={[
                                                { title: 'Two', value: 35, color: '#f29a2e' },
                                                { title: 'One', value: 15, color: 'whitesmoke', }
                                            ]}
                                            startAngle={270}
                                            radius={35}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="8" style={{ background: "" }}>
                                <div className="p-2 pb-4" style={{ background: "white", height: "300px" }}>
                                    <p>Total Revenue</p>
                                    <h3>$ 50.4K</h3>
                                </div>
                            </Col>
                            <Col md="4" style={{ background: "white" }}>
                                <div className="p-2 pb-4" style={{ background: "white", height: "300px" }}>
                                    <p>Most Sold Items</p>
                                    <div className="mb-2">
                                        <p>Laptop</p>
                                        <ProgressBar
                                            now={90}
                                            style={{ height: "10px", background: "whitesmoke", marginTop: "-10px" }}
                                            label={"90%"}
                                            variant="danger"
                                        />
                                    </div>
                                    <div>
                                        <p>Smart TV</p>
                                        <ProgressBar
                                            now={80}
                                            style={{ height: "10px", background: "whitesmoke", marginTop: "-10px" }}
                                            label={"80%"}
                                            variant="danger"
                                        />
                                    </div>
                                    <div>
                                        <p>Belt</p>
                                        <ProgressBar
                                            now={70}
                                            style={{ height: "10px", background: "whitesmoke", marginTop: "-10px" }}
                                            label={"70%"}
                                            variant="danger"
                                        />
                                    </div>
                                    <div>
                                        <p>Cap</p>
                                        <ProgressBar
                                            now={65}
                                            style={{ height: "10px", background: "whitesmoke", marginTop: "-10px" }}
                                            label={"65%"}
                                            variant="danger"
                                        />
                                    </div>
                                    <div>
                                        <p>Others</p>
                                        <ProgressBar
                                            now={50}
                                            style={{ height: "10px", background: "whitesmoke", marginTop: "-10px" }}
                                            label={"50%"}
                                            variant="danger"
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className="mt-3" >
                            <Col>
                                <div>
                                    <Table striped >
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row> */}
                    </div>
                </div>
            </div >
        </div >
        <GoToTop />
    </>
}

export default NotFound;