import React, { useRef } from "react";
import food from "../fooddata/FoodData";
import { useNavigate } from "react-router-dom";
import './food.css';
import toast from "react-hot-toast";

function IndianFood() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  //const dispatch = useDispatch()
  const Food1 = food.filter((ele) => ele.titlename === "IndianFood");

function AddtoCart(){
    //dispatch(addToCart(ele))
    toast.success("Add to Card")
}

  const scrollLeft = () => sliderRef.current.scrollLeft -= 300;
  const scrollRight = () => sliderRef.current.scrollLeft += 300;
  const detail = (id) => navigate(`/singledish?id=${id}`);
  const Alldish = (titleId) => titleId && navigate(`/alldish?id=${titleId}`);
  const Order = () => navigate("/card");

  return (
    <div className="food-section">
      <h3 className="food-title">Indian Food</h3>
      <div className="food-container">
        <button onClick={scrollLeft} className="scroll-btn" style={{left: 0}}>❰</button>
        <div ref={sliderRef} className="food-slider">
          {Food1.map((data) => (
            <div key={data.id} className="food-card" >
              <img src={data.url} alt={data.title} onClick={() => detail(data.id)}/>
              <p className="food-title-text">{data.title} <span className="food-quantity">[{data.quantity}]</span></p>
              <span className="food-rate">₹{data.rate}</span>
              <div className="food-buttons">
                <button onClick={Order}>Order</button>
                <button onClick={AddtoCart}>+ Add to Cart</button>
              </div>
            </div>
          ))}
          {Food1.length > 0 && (
            <div onClick={() => Alldish(Food1[0].titleId)} className="see-more-card">
              See More
            </div>
          )}
        </div>
        <button onClick={scrollRight} className="scroll-btn" style={{right: 0}}>❱</button>
      </div>
    </div>
  );
}

export default IndianFood;
