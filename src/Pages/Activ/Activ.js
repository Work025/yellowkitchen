import "../../Stayls/Activ.css"
import bagel from "../../Assents/bagel.svg"

function Activ() {

    const text = ["Bagel", "Burger", "Chicken", "Fish", "Fish'Chips", "Salads", "Pizza", "Pasta"]

    return (
        <div className="activ">
            <div className="activ-text">
                <h2>Specialities</h2><button>show all</button>
            </div>

            <div className="activ-cards">
                <div className="activ-left">
                    <i className="fas fa-chevron-left"></i>
                </div>

                {/* Har bir text uchun alohida card yaratamiz */}
                <div className="activ-card">
                    {text.map((item, index) => (
                        <div className="card-menu" key={index}>
                            <img src={bagel} alt={item} />
                            <p>{item}</p>
                        </div>
                    ))}
                </div>

                <div className="activ-right">
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Activ;
