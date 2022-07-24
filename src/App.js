function Wrapper() {
    return (
        <div className="wrapper">
            <div className="overlay">
                <div className="drawer">
                    <h2>Корзина</h2>
                    <div className="cartItem">
                        <img src="img/items/1.jpg" alt="item" width={80} />
                        <div>
                            <p>Фигурка Геральта</p>
                            <b>12999 руб.</b>
                        </div>
                        <img src="img/remove.svg" alt="remove" width={20} height={20}/>
                    </div>
                </div>
            </div>
            <header>
                <div className="headerLeft">
                    <img src="/img/the-witcher-001.png" alt="logo" width={40} height={40}/>
                    <div className="headerInfo">
                        <h3>React Witcher</h3>
                        <p>Магазин лучших аксессуаров</p>
                    </div>
                </div>
                <ul className="headerRight">
                    <li>
                        <img src="img/cart.svg" width={18} height={18}/>
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img src="img/user.svg" width={18} height={18}/>
                    </li>
                </ul>
            </header>
            <div className="content">
                <div className="contentItem">
                    <h1>Все аксессуары</h1>
                    <div className="search-block">
                        <img src="img/search.svg" alt="search" width={18} height={18} />
                        <input type="text" placeholder="Поиск..." />
                    </div>
                </div>
                <div className="items">
                    <div className="card">
                        <div className="favorite">
                            <img src="img/heart.svg" alt="heart" width={20} height={20}/>
                        </div>
                        <img src="img/items/1.jpg" alt="item" width={145} height={200}/>
                        <h5>Фигурка Геральта</h5>
                        <div className="cardBottom">
                            <div className="cardPrice">
                                <span>Цена:</span>
                                <b>12999 руб.</b>
                            </div>
                            <button className="button">
                                <img src="img/plus.svg" alt="add" width={15} height={15}/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="favorite">
                            <img src="img/heart.svg" alt="heart" width={20} height={20}/>
                        </div>
                        <img src="img/items/4.jpg" alt="item" width={165} height={200}/>
                        <h5>Значек</h5>
                        <div className="cardBottom">
                            <div className="cardPrice">
                                <span>Цена:</span>
                                <b>12999 руб.</b>
                            </div>
                            <button className="button">
                                <img src="img/plus.svg" alt="add" width={15} height={15}/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="favorite">
                            <img src="img/heart.svg" alt="heart" width={20} height={20}/>
                        </div>
                        <img src="img/items/2.jpg" alt="item" width={145} height={200}/>
                        <h5>Кулон</h5>
                        <div className="cardBottom">
                            <div className="cardPrice">
                                <span>Цена:</span>
                                <b>12999 руб.</b>
                            </div>
                            <button className="button">
                                <img src="img/plus.svg" alt="add" width={15} height={15}/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="favorite">
                            <img src="img/heart.svg" alt="heart" width={20} height={20}/>
                        </div>
                        <img src="img/items/3.jpg" alt="item" width={145} height={200}/>
                        <h5>Кольцо</h5>
                        <div className="cardBottom">
                            <div className="cardPrice">
                                <span>Цена:</span>
                                <b>12999 руб.</b>
                            </div>
                            <button className="button">
                                <img src="img/plus.svg" alt="add" width={15} height={15}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wrapper;
