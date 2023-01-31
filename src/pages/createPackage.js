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

function CreatePackage() {
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let [user, setUser] = store.userinfo;
    let [user_id, setUserId] = useState("63bfaeac23b590425e567759");
    let [product_ids, setProductIds] = useState([]);
    let [categorys, setCategorys] = useState([]);
    let [category, setCategory] = useState("");
    let [products, setProducts] = useState([]);
    let [show, setShow] = useState(false);
    let [success, setSuccess] = useState("");
    // let [, set] = useState("");


    useEffect(() => {
        loadCategory();
        loadProducts();
    }, []);


    let loadCategory = () => {
        let url = mainUrl + '/category';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setCategorys(res)
            });
    };

    let loadProducts = () => {
        let url = mainUrl + '/products';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setProducts(res)
            });
    };

    let createPackage = async () => {
        // if (name.typeOf == undefined) return (alert("empty field"))
        let product_id = product_ids.map((e, i) => {
            return { item: e }
        })
        window.scrollTo(0, 0);
        if (product_id.length < 2) {
            setShow(true);
            setSuccess("Select 2 or more products.")
            const t1 = setTimeout(() => {
                setShow(false)
                clearTimeout(t1);
            }, 2000);
            return;
        }
        if (category == "") {
            setShow(true);
            setSuccess("Select a category.")
            const t1 = setTimeout(() => {
                setShow(false)
                clearTimeout(t1);
            }, 2000);
            return;
        }
        let data = {
            product_id,
            user_id, category
        };
        let url = mainUrl + "/package";

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
            setSuccess("Package Successfully Created.")
            const t1 = setTimeout(() => {
                setShow(false)
                clearTimeout(t1);
            }, 2000);
            setCategory("")
            setProductIds([])
        } else {
            setCategory("")
            setShow(true);
            setSuccess("select a category and 2 or more products")
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
                        <p style={{ fontWeight: "700" }}>Create Package</p>
                        <p id="success">{show ? success : ""}</p>
                        <Row className="mb-3">
                            <Col md="8" >
                                <div className="formah px-4 py-2" style={{ background: "white" }}>
                                    <h4>Create a Package</h4>

                                    <section>
                                        <label>Select Category</label><br />
                                        <select defaultValue={category} name={category} onChange={(e) => setCategory(e.target.value)} required>
                                            <option value="">---</option>
                                            {categorys.map((e, i) => {
                                                return <option key={e._id} value={e._id} >{e.title}</option>
                                            })}
                                        </select>
                                    </section>

                                    <section>
                                        <select onChange={(e) => setProductIds(Array.from(e.target.selectedOptions, Option => Option.value))} multiple required>
                                            {products.map((e, i) => {
                                                return <option key={e._id} value={e._id} >{e.itemName}</option>
                                            })}
                                        </select>

                                    </section>


                                    <button onClick={() => createPackage()} className="my-5">Save</button>
                                </div>
                            </Col>
                            <Col md="4">
                                <div style={{ background: "white", }}>
                                    <div className="p-3">
                                        <h4>All Packages</h4>
                                        <p>Christmas</p>
                                        <p>Top Deals</p>
                                        <p>Utensils</p>
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

export default CreatePackage