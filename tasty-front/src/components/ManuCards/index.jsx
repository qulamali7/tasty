import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { WishlistContext } from "../../context/WishlistContext";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";
const MenuCards = () => {
  const [data, setData] = useState([]);
  const { wishlist, handleWishlist } = useContext(WishlistContext);
  const { addBasket } = useContext(BasketContext);
  async function Getfetch() {
    try {
      await fetch("http://localhost:3000/meals")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    Getfetch();
  }, []);

  return (
    <>
      <div className="menu_cards">
        {data &&
          data.map((x) => (
            <div key={x._id} className="menu_card">
              <div className="menu_card_content">
                <div className="menu_img">
                  <img src={x.img} alt="" />
                </div>
                <div className="menu_card_text">
                  <h4>{x.name}</h4>
                  <p>Meat, Potatoes, Rice, Tomatoe</p>
                </div>
                <div className="price">
                  <p>${x.price}</p>
                </div>
              </div>
              <div className="card_icon">
                {wishlist.some((item) => item._id === x._id) ? (
                  <i
                    class="fa-solid fa-heart red"
                    onClick={() => handleWishlist(x)}
                  ></i>
                ) : (
                  <i
                    class="fa-solid fa-heart"
                    onClick={() => handleWishlist(x)}
                  ></i>
                )}
                <i
                  class="fa-solid fa-cart-shopping"
                  onClick={() => addBasket(x)}
                ></i>
                <Link to={"/detail/" + x._id}>
                  <i class="fa-solid fa-eye"></i>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MenuCards;
