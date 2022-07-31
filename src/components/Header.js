function Header() {
    return (
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
    )
}

export default Header;