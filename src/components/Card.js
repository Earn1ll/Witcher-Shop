

function Card(props) {
    return (
        <div className="card">
            <div className="favorite">
                <img src="img/heart.svg" alt="heart" width={20} height={20}/>
            </div>
            <img src={props.imageUrl} alt="item" width={145} height={200}/>
            <h5>{props.title}</h5>
            <div className="cardBottom">
                <div className="cardPrice">
                    <span>Цена:</span>
                    <b>{props.price}</b>
                </div>
                <button className="button">
                    <img src="img/plus.svg" alt="add" width={15} height={15}/>
                </button>
            </div>
        </div>
    )
}


export default Card;