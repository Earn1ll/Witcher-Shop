import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function Wrapper() {
    return (
        <div className="wrapper">
            <Drawer/>
            <Header/>
            <div className="content">
                <div className="contentItem">
                    <h1>Все аксессуары</h1>
                    <div className="search-block">
                        <img src="img/search.svg" alt="search" width={18} height={18} />
                        <input type="text" placeholder="Поиск..." />
                    </div>
                </div>
                <div className="items">
                    <Card/>
                </div>
            </div>
        </div>
    );
}

export default Wrapper;
