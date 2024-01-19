import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";
import { Helmet } from "react-helmet-async";
const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const { handleWishlist } = useContext(WishlistContext);
  function GetId(id) {
    fetch("http://localhost:3000/meals/" + id)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }
  useEffect(() => {
    GetId(id);
  }, []);

  return (
    <>
    <Helmet>
      <title>Detail</title>
    </Helmet>
      <section id="detail">
        <div className="detail_container">
          <div className="detail_content">
            <div className="detail_title">
              <p>OUR MENU</p>
              <h3>Detail</h3>
            </div>
            <div className="detail_cards">
              <div className="detail_card">
                <div className="detail_card_content">
                  <div className="detail_img">
                    <img src={detail.img} alt="" />
                  </div>
                  <div className="wishlist_card_text">
                    <h4>{detail.name}</h4>
                    <p>Meat, Potatoes, Rice, Tomatoe</p>
                  </div>
                  <div className="price">
                    <p>${detail.price}</p>
                  </div>
                </div>
                <div className="card_icon">
                  <i
                    class="fa-solid fa-heart"
                    onClick={() => handleWishlist(detail)}
                  ></i>
                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
