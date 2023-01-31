import React, { createContext, useState } from 'react';
export const Store = createContext();
const StoreContext = ({ children }) => {
    let [user, setUser] = useState('');
    let [url, setUrl] = useState('http://localhost:4000');
    // let [url, setUrl] = useState('https://clumsy-pinafore-cow.cyclic.app/');
    // let [, set] = useState('block');
    let [grid, setGrid] = useState("black");
    let [list, setList] = useState("steelblue");
    let [compact, setCompact] = useState("steelblue");

    let states = {
        userinfo: [user, setUser],
        endUrl: [url, setUrl],
        gridSort: [grid, setGrid],
        listSort: [list, setList],
        compactSort: [compact, setCompact]

    };
    return <Store.Provider value={states}>{children}</Store.Provider>
}
export default StoreContext;