import React from "react";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";

const Home = () => {
  return (
    <div>
      <h1>
        <Navbar />
        <CategoryMenu />
        <FoodItems />
      </h1>
    </div>
  );
};

export default Home;
