import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
    { title: 'Фигурка Геральта', price: 2999, imageUrl:"/img/items/1.jpg" },
    { title: 'Медальен волка', price: 899, imageUrl:"/img/items/2.jpg"  },
    { title: 'Кольцо серебрянное с печаткой волка', price: 4999, imageUrl:"/img/items/3.jpg" },
    { title: 'значек', price: 699, imageUrl:"/img/items/4.jpg" },
    ];

function Wrapper() {
    return (
        <div className="wrapper">
            <Drawer/>
            <Header/>
            <div className="content">
                <div className="contentItem">
                    <h1>Все аксессуары</h1>
                    <div className="search-block">
                        <img src="img/search.svg" alt="search" width={18} height={18}/>
                        <input type="text" placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="items">


                    {arr.map((obj) => (
                        <Card title={obj.title}
                              price={obj.price}
                              imageUrl={obj.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Wrapper;
