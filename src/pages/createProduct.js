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

function CreateProduct() {
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let [user, setUser] = store.userinfo;
    let [itemName, setItemName] = useState("");
    let [price, setPrice] = useState(0);
    let [image, setImage] = useState("");
    let [spec, setSpec] = useState("");
    let [details, setDetails] = useState("");
    let [feature, setFeature] = useState("");
    let [user_id, setUserId] = useState("63bfaeac23b590425e567759");
    let [category_id, setCategoryId] = useState("");
    // let [categoryTitle, setCategoryTitle] = useState("");
    let [category, setCategory] = useState([]);
    let [hide, setHide] = useState(true);
    let [show, setShow] = useState(false);
    let [success, setSuccess] = useState("");
    // let [, set] = useState("");
    const [selectedFiles, setSelectedFiles] = useState([]);


    useEffect(() => {
        loadCategory();
    }, []);

    const handleImageChange = (e) => {
        setImage(e.target.files)
        if (e.target.files) {
            const filesArray = URL.createObjectURL(e.target.files[0]);
            setSelectedFiles(filesArray);
            URL.revokeObjectURL(e.target.files[0])
        }
    };

    const renderPhotos = (e) => {
        return (
            <div>
                {files(e)}
            </div>
        )
    };

    const files = (photo) => {
        return (
            <div style={{ textAlign: "center" }}>
                <img src={photo} style={{ width: "10rem" }} />
            </div>)

    };

    let loadCategory = () => {
        let url = mainUrl + '/category';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setCategory(res)
            });
    };

    let clearForm = () => {
        setHide(true)
        setItemName("")
        setPrice("")
        setImage("")
        setSpec("")
        setDetails("")
        setFeature("")
        setCategoryId("")
    };

    let preview = () => {
        window.scrollTo(0, 0);
        setHide(false)
    };

    let createProduct = async () => {
        // if (name.typeOf == undefined) return (alert("empty field"))
        window.scrollTo(0, 0);
        let data = {
            itemName, price: Number(price).toLocaleString(), image, details, spec, feature,
            user_id, category_id
        };
        let url = mainUrl + "/product";

        const response = await fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        });
        console.log(response)
        if (response.status === 200) {
            await response.json()
            setShow(true);
            setSuccess("Product Successfully Created.")
            const t1 = setTimeout(() => {
                setShow(false)
                clearTimeout(t1);
            }, 2000);
            clearForm()
        } else {
            setShow(true);
            setSuccess("Error Occured")
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
                        <p style={{ fontWeight: "700" }}>Create Product</p>
                        <p id="success">{show ? success : ""}</p>
                        {hide ? <Row className="mb-3">
                            <Col md="8" >
                                <div className="formah px-4 py-2" style={{ background: "white" }}>
                                    <h4>Create a Product</h4>

                                    <section>
                                        <label>Product Name</label><br />
                                        <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                                    </section>

                                    <section>
                                        <label>Product Description</label><br />
                                        <textarea value={details} onChange={(e) => setDetails(e.target.value)} rows={4} >
                                        </textarea>
                                    </section>

                                    <section>
                                        <label>Product Specification</label><br />
                                        <textarea value={spec} onChange={(e) => setSpec(e.target.value)} rows={4} />
                                    </section>

                                    <section>
                                        <label>Product Feature</label><br />
                                        <textarea value={feature} onChange={(e) => setFeature(e.target.value)} rows={4} />
                                    </section>

                                    <section>
                                        <label>Enter Amount</label><br />
                                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                                    </section>

                                    <section>
                                        <label>Select Category</label><br />
                                        <select name={category_id} onChange={(e) => setCategoryId(e.target.value)}>
                                            <option value="">---</option>
                                            {category.map((e, i) => {
                                                return <option key={e._id} value={e._id} >{e.title}</option>
                                            })}
                                        </select>
                                    </section>

                                    <section className="mb-5">
                                        <label>Upload Photo</label><br />
                                        {/* <input type="file" name={image} value={image} onChange={(e) => handleImageChange(e)} /> */}
                                        <input type="text" name={image} value={image} onChange={(e) => setImage(e.target.value)} />
                                    </section>

                                    <button onClick={() => preview()} className="my-5">Preview</button>
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
                            : <Row className="saveProduct p-3">
                                <div className="flexbtw">
                                    <h4>Product</h4>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <button onClick={() => clearForm()} style={{ background: "#f8c9c9", color: "#f13737" }}>Delete</button>
                                        <button onClick={() => setHide(true)} style={{ background: "#cbe0ec", color: "#4a99c7" }}>Edit</button>
                                    </div>
                                </div>

                                <div>
                                    {renderPhotos(selectedFiles)}
                                    <img src={image} />
                                </div>

                                <p className="mt-3">{itemName}</p>
                                <h6>Price: {price == 0 ? " Edit and Enter a price" : `# ${Number(price).toLocaleString()}`}</h6>
                                <p>category: {category_id == "" ? "Edit and Select a Category " :


                                    category.map((e, i) => {
                                        if (e._id === category_id) {
                                            return e.title
                                        }
                                    })

                                }
                                </p>

                                <section>
                                    <h4>Product Details</h4>
                                    <hr />
                                    <p>
                                        {details ? details : "No Details added"}
                                    </p>
                                </section>

                                <section>
                                    <h4>Feature</h4>
                                    <hr />
                                    <p>  {feature ? feature : "No Feature added"}</p>
                                </section>

                                <section>
                                    <h4>Specification</h4>
                                    <hr />
                                    <p>  {spec ? spec : "No Specification added"}</p>
                                </section>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <button id="saveProduct" onClick={() => createProduct()}>Save</button>
                            </Row>}



                    </div>
                </div>
            </div >
        </div >



        <GoToTop />
    </>
}

export default CreateProduct