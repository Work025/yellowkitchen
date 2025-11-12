import "../../Stayls/Article.css"
import burger from "../../Assents/Gamburger.svg"
import burgerads from "../../Assents/burgerlogo.svg"

function Article() {
    return (
        <div className="article">
            <div className="article-text">
                <h2>Restaurants</h2><button>show all</button>
            </div>
            <div className="article-cards">
                <div className="article-left">
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className="article-card">
                    <div className="card-food">
                        <img src={burger} />
                        <div className="card-food-ads">
                            <img src={burgerads} />
                        </div>
                    </div>
                    <div className="card-food">
                        <img src={burger} />
                        <div className="card-food-ads">
                            <img src={burgerads} />
                        </div>
                    </div>
                    <div className="card-food">
                        <img src={burger} />
                        <div className="card-food-ads">
                            <img src={burgerads} />
                        </div>
                    </div>
                    <div className="card-food">
                        <img src={burger} />
                        <div className="card-food-ads">
                            <img src={burgerads} />
                        </div>
                    </div>
                </div>
                <div className="article-right">
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Article;