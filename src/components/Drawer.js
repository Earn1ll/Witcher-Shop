function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer">
                <h2>Корзина <img className="removeBtn" src="img/remove.svg" alt="remove" width={20} height={20}/>
                </h2>
                <div className="itemsDrawer">
                    <div className="cartItem">
                        <img src="img/items/1.jpg" alt="item" width={50} height={80}/>
                        <div className="cartInfo">
                            <p>Фигурка Геральта</p>
                            <b>12999 руб.</b>
                        </div>
                        <img className="removeBtn" src="img/remove.svg" alt="remove" width={20} height={20}/>
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li className="summary">
                            <span>Итого:</span>
                            <div>
                            </div>
                            <b>21 498 руб.</b>
                        </li>
                        <li className="summary">
                            <span>Налог 5%:</span>
                            <div>
                            </div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="img/arrow.svg" alt="arrow" width={20}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;