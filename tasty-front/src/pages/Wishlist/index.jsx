import React, { useContext } from "react";
import "./index.scss";
import { WishlistContext } from "../../context/WishlistContext";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";
import { Helmet } from "react-helmet-async";
const Wishlist = () => {
  const { wishlist, handleWishlist } = useContext(WishlistContext);
  const {addBasket} = useContext(BasketContext)
  return (
    <>
    <Helmet>
      <title>Wishlist</title>
    </Helmet>
      <section id="wishlist">
        <div className="wishlist_container">
          <div className="wishlist_content">
            <div className="wishlist_title">
              <p>OUR MENU</p>
              <h3>Wishlist</h3>
            </div>
            <div className="wishlist_cards">
              {wishlist &&
                wishlist.map((x) => (
                  <div className="wishlist_card">
                    <div className="wishlist_card_content">
                      <div className="wishlist_img">
                        <img src={x.img} alt="" />
                      </div>
                      <div className="wishlist_card_text">
                        <h4>{x.name}</h4>
                        <p>Meat, Potatoes, Rice, Tomatoe</p>
                      </div>
                      <div className="price">
                        <p>${x.price}</p>
                      </div>
                    </div>
                    <div className="card_icon">
                      <i
                        class="fa-solid fa-trash"
                        onClick={() => handleWishlist(x)}
                      ></i>
                      <i class="fa-solid fa-cart-shopping" onClick={()=>addBasket(x)}></i>
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

export default Wishlist;
