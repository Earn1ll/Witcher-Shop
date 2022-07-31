

function Card() {
    return (
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
    )
}


export default Card;