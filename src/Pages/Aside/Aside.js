import "../../Stayls/Aside.css"

function Aside() {

    return (
        <div className="aside">
            <div className="aside-text">
                <h2>Your nearest restaurants</h2>
                <p>Each kitchen works with its own delivery area to deliver food to you as soon as possible</p>
            </div>
            <div className="aside-email">
                <i className="fas fa-location-dot"></i>
                <input placeholder="Enter delivery address" />
                <button>send</button>
            </div>
        </div>
    )
}

export default Aside;