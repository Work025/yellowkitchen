import "../../Stayls/Section.css"
import salat from "../../Assents/Achichusalat.svg"
import strelka from "../../Assents/strelka.svg"
import barig from "../../Assents/barig.svg"
import time from "../../Assents/time-eat.svg"
import taxi from "../../Assents/delivery.svg"

function Section() {
    return (
        <div className="section">
            <div className="section-text">
                <h2>Your Food court at home</h2>
                <div className="section-link">
                    <button>
                        <p>Delivery</p>
                        <span>Order in</span>
                    </button>
                    <button>
                        <p>Takeout</p>
                        <span>Grab and go</span>
                    </button>
                </div>
            </div>
            <div className="section-img">
                <img src={salat} />
                <img src={strelka} />
                <img src={barig} />
            </div>
            <div className="section-ads">
                <div className="ads-card">
                    <img src={time} />
                    <p>delivery in all paris in less than 30 minutes</p>
                </div>
                <div className="ads-card">
                    <img src={taxi} />
                    <p  style={{width:"124px"}}>Free delivery from 29 euros</p>
                </div>
                <div className="ads-card">
                    <img src={time} />
                    <p style={{width:"172px"}}>Only fresh and French products</p>
                </div>
            </div>
        </div>
    )
}

export default Section;