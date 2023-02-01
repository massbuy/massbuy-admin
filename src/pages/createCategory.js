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

function CreateCategory() {
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let [createdBy, setcreatedBy] = useState("63bfaeac23b590425e567759");
    let [categorys, setCategorys] = useState([]);
    let [title, setTitle] = useState("");
    let [show, setShow] = useState(false);
    let [success, setSuccess] = useState("");
    // let [, set] = useState("");


    useEffect(() => {
        loadCategory();
    }, [title]);


    let loadCategory = () => {
        let url = mainUrl + '/category';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setCategorys(res)
            });
    };

    let createCategory = async () => {
        if (title.trim() === "") {
            setShow(true);
            setSuccess("Please fill missing field!!!")
            const t1 = setTimeout(() => {
                setShow(false)
                clearTimeout(t1);
            }, 2000);
            return;
        }
        let url = mainUrl + "/package";
        let data = { createdBy, title };
        const response = await fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        });
        if (response.status === 200) {
            await response.json()
            setShow(true);
            setSuccess("Category Successfully Created.")
            const t1 = setTimeout(() => {
                setShow(false)
                clearTimeout(t1);
            }, 2000);
            setTitle("")
        } else {
            setShow(true);
            setSuccess("Error Occurred")
            const t1 = setTimeout(() => {
                setShow(false)
                clearTimeout(t1);
            }, 2000)
        }
    };


    return <>
        <div className="cenn">
            <div className="cen">
                <div className="row py-3">
                    <div className="col-md-3">
                        <NavBar class2="activeBar" color2="white" />
                    </div>
                    <div className="col-md-9">
                        <p style={{ fontWeight: "700" }}>Create Category</p>
                        <p id="success">{show ? success : ""}</p>
                        <Row className="mb-3">
                            <Col md="8" >
                                <div className="formah px-4 py-2" style={{ background: "white" }}>
                                    <h4>Create a Category</h4>

                                    <section>
                                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                                    </section>


                                    <button onClick={() => createCategory()} className="my-5">Save</button>
                                </div>
                            </Col>
                            <Col md="4">
                                <div style={{ background: "white", }}>
                                    <div className="p-3">
                                        <h4>All Categories</h4>
                                        {categorys.map((e, i) => {
                                            return <>
                                                <li style={{ textTransform: "capitalize" }}>{e.title}</li>
                                            </>
                                        })}
                                    </div>
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

export default CreateCategory