import "../../Stayls/Header.css"

function Header() {
    return (
        <div className="header">
            <h1 className="header-logo">yellow<span>kitchen</span></h1>

            <div className="header-data">
                <a><i className="fas fa-user"></i> Log in</a>
                <span><i className="fas fa-cart-shopping"></i> 0</span>
                <div className="header-menu">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </div>
    )
}

export default Header;