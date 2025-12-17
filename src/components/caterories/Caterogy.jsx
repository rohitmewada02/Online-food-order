import React from "react";
import categoryBg from "../image/category.jpg";
import Indianfood from "../image/indianfood.jpg";
import italianfood from "../image/italianfood.jpg";
import koreanfood from "../image/korean.jpg";
import Food from "../fooddata/FoodData";
import { useNavigate } from "react-router-dom";

function Category() {

    const navigate = useNavigate()
    let Food1 = Food.filter((data) => data.titlename==='IndianFood');
    let Food2 = Food.filter((data) => data.titlename==='ItalianFood');
    let Food3 = Food.filter((data) => data.titlename==='korean')
    function Alldish(titleId){
      navigate(`/alldish?id=${titleId}`)
  }
  return (
    <div
      className="w-full bg-cover bg-center bg-fixed py-16"
      style={{ backgroundImage: `url(${categoryBg})` }}
    >
      <h2 className="text-center text-4xl font-semibold text-red-800 mb-10">
        Categories
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around gap-10">

        <div className="flex flex-col items-center">
          <img
            src={Indianfood}
            onClick={()=>Alldish(Food1[0].titleId)}
            className="w-48 h-48 rounded-full shadow-xl border-4 border-white transition-transform hover:scale-110"
          />
          <p className="text-xl font-medium text-red-800 mt-3">
            Indian cuisines
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={italianfood}
            onClick={()=>Alldish(Food2[0].titleId)}
            className="w-48 h-48 rounded-full shadow-xl border-4 border-white transition-transform hover:scale-110"
          />
          <p className="text-xl font-medium text-red-800 mt-3">
            Italian cuisines
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={koreanfood}
            onClick={()=>Alldish(Food3[0].titleId)}
            className="w-48 h-48 rounded-full shadow-xl border-4 border-white transition-transform hover:scale-110"
          />
          <p className="text-xl font-medium text-red-800 mt-3">
            Korean cuisines
          </p>
        </div>

      </div>
    </div>
  );
}

export default Category;
