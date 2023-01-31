import React, { useEffect, useContext } from "react";
import { Store } from "../context/store";
import { Link } from "react-router-dom";


function SideBar() {
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;


    useEffect(() => {
        loadCategory();
        loadLocations();
    }, []);

    let loadCategory = () => {
        let url = mainUrl + '/category';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setCategory(res)
            });
    };

    let loadLocations = () => {
        let url = mainUrl + '/location';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setLocation(res);
            })
    };

    return <>
    
    </>
}

export default SideBar;