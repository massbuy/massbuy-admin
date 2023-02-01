import React, { useEffect, useContext } from "react";
import NavBar from "../components/navbar";
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Footer from "../components/footer";
import GoToTop from "../components/goToTop";
import { Store } from "../context/store";
import { Link } from "react-router-dom";
import { PieChart } from 'react-minimal-pie-chart';
import { ProgressBar, Table } from "react-bootstrap";
import { useState } from "react";
import Form from 'react-bootstrap/Form';

function Customers() {
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let [user, setUser] = store.userinfo;
    let [users, setUsers] = useState([])


    useEffect(() => {
        loadUser();
    }, []);

    let loadUser = () => {
        let url = mainUrl + '/users';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setUsers(res)
            });
    };




    return <>
        <div className="cenn">
            <div className="cen">
                <div className="row py-3">
                    <div className="col-md-3">
                        <NavBar class1="activeBar" color1="white" />
                    </div>
                    <div className="col-md-9">
                        <p style={{ fontWeight: "700" }}>Product &#62; All Items</p>

                        <Row className="mt-3" >
                            <Col>
                                <div>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone Number</th>
                                                <th>Order</th>
                                                <th>Status</th>
                                                {/* <th>Action</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map((e, i) => {
                                                    let date = new Date(e.createdAt);
                                                    let activeStatus;
                                                    if (e.status === "active") {
                                                        activeStatus = true
                                                    } else {
                                                        activeStatus = false
                                                    }
                                                    return <tr>
                                                        <td><input type="chechbox" style={{ width: "10px", height: "10px" }} /></td>
                                                        <td style={{ width: "180px" }}>{e.firstname}{" "}{e.lastname}</td>
                                                        <td>{e.email}</td>
                                                        <td>{e.phone}</td>
                                                        <td>{e.order}</td>
                                                        <td>
                                                            {e.status}
                                                        </td>
                                                        {/* <td></td> */}
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div >
        </div >



        <GoToTop />
    </>
};

export default Customers