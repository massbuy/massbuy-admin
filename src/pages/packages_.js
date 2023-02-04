import React, { useEffect, useContext } from "react";
import NavBar from "../components/navbar";
import { Icon } from '@iconify/react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "../components/footer";
import GoToTop from "../components/goToTop";
import { Store } from "../context/store";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Table } from "react-bootstrap";

function Packagess() {
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
                        <NavBar class4="activeBar" color4="white" />
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
                                                    let arr = [];
                                                    let date = new Date(e.createdAt);
                                                    let activeStatus;
                                                    let total = 0;
                                                    if (e.status === "active") {
                                                        activeStatus = true
                                                    } else {
                                                        activeStatus = false
                                                    }

                                                    {
                                                        e.product_id.map((j, k) => {
                                                            arr.push(+j.item.price.split(",").join(""))
                                                            total = arr.reduce((a, b) => a + b, 0)
                                                            return total
                                                        })
                                                    }

                                                    return <tr style={{ textTransform: "capitalize" }}>
                                                        <td><input type="chechbox" style={{ width: "10px", height: "10px" }} /></td>
                                                        <td style={{ width: "180px" }}>
                                                            <ol>
                                                                {e.product_id.map((j, k) => {
                                                                    return <li style={{ listStyle: "" }}>{j.item.itemName}</li>
                                                                })}
                                                            </ol>
                                                        </td>
                                                        <td>
                                                            <p>&#8358; {Number(total).toLocaleString()}</p>
                                                        </td>
                                                        <td>{e.category.title}</td>
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

export default Packagess