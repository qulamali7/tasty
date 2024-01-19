import React, { useContext } from "react";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Basket = () => {
  const { basket,increaseCount, decreaseCount,removeBasket } = useContext(BasketContext);
  return (
    <>
    <Helmet>
      <title>Basket</title>
    </Helmet>
      <section id="basket">
        <div className="basket_container">
          <div className="basket_content">
            <div className="basket_title">
              <p>OUR MENU</p>
              <h3>Basket</h3>
            </div>
            <div className="basket_cards">
              {basket &&
                basket.map((x) => (
                  <div className="basket_card">
                    <div className="basket_card_content">
                      <div className="basket_img">
                        <img src={x.img} alt="" />
                      </div>
                      <div className="basket_card_text">
                        <h4>{x.name}</h4>
                        <p>Meat, Potatoes, Rice, Tomatoe</p>
                      </div>
                      <div className="price">
                        <p>${x.price}</p>
                        <p>{x.count}</p>
                        <button onClick={()=>increaseCount(x)}>+</button>
                        <button onClick={()=>decreaseCount(x)}>-</button>
                      </div>
                    </div>
                    <div className="card_icon">
                      <i
                        class="fa-solid fa-trash"
                        onClick={() => removeBasket(x)}
                      ></i>
                        <Link to={"/detail/"+x._id}><i class="fa-solid fa-eye"></i></Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Basket;
