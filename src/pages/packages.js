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

function Packages() {
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let [user, setUser] = store.userinfo;
    let [products, setProducts] = useState([])


    useEffect(() => {
        loadCategory();
    }, []);

    let loadCategory = () => {
        let url = mainUrl + '/packages';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setProducts(res)
            });
    };




    return <>
        <div className="cenn">
            <div className="cen">
                <div className="row py-3">
                    <div className="col-md-3">
                        <NavBar class3="activeBar" color3="white" />
                    </div>
                    <div className="col-md-9">
                        <p style={{ fontWeight: "700" }}>Product &#62; All Packages</p>

                        <Row className="mt-3" >
                            <Col>
                                <div>
                                    <Table>
                                        <thead style={{ background: "#fcefe8" }}>
                                            <tr>
                                                <th></th>
                                                <th>Product Details</th>
                                                <th>Amount</th>
                                                {/* <th>Package</th> */}
                                                <th>Category</th>
                                                <th>Date Created</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{ background: "#fff" }}>
                                            {
                                                products.map((e, i) => {
                                                    let date = new Date(e.createdAt);
                                                    let activeStatus;
                                                    if (e.status === "active") {
                                                        activeStatus = true
                                                    } else {
                                                        activeStatus = false
                                                    }
                                                    return <tr>
                                                        <td><input type="chechbox" style={{ width: "10px", height: "10px" }} /></td>
                                                        <td style={{ width: "180px" }}>{e.itemName}</td>
                                                        <td>{e.price}</td>
                                                        <td>Category</td>
                                                        <td>{date.toLocaleDateString()}</td>
                                                        <td>
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                checked={activeStatus}
                                                            />
                                                        </td>
                                                        <td><Icon icon="ri:menu-2-fill" /></td>
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
}

export default Packages