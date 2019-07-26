import React from "react";
import { Link } from "react-router-dom";
import "./contacts.scss";
import Basket from "../Basket/Basket";
import {connect} from "react-redux";

function Contacts(props) {
  return (
    <>
      <Basket show={props.showBasket} />
      <div className="contacts">
        Как нас найти )))yurlovr@gmail.com
        <Link to="/"> На главную </Link>
      </div>
    </>
  );
}

export default connect((state) => ({
    showBasket: state.showBasket,
}))(Contacts);