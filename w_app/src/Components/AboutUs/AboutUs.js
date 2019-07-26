import React from "react";
import { Link } from "react-router-dom";
import "./about.scss";
import Basket from "../Basket/Basket";
import {connect} from "react-redux";

function AboutUs (props){
  return (
    <>
      <Basket show={props.showBasket} />
      <div className="about">
        О нас
        <Link to="/"> На главную </Link>
      </div>
    </>
  );
}

export default connect((state) => ({
    showBasket: state.showBasket,
}))(AboutUs);
