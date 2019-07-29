import React from "react";
import { Link } from "react-router-dom";
import "./notFound.scss";
import { connect } from "react-redux";
import Basket from "../Basket/Basket";

function NotFound(props) {
  return (
    <>
      <Basket show={props.showBasket} />
      <div className="notfound">
        Страница не найдена.
        <Link to="/"> На главную </Link>
      </div>
    </>
  );
}

export default connect(state => ({
  showBasket: state.showBasket
}))(NotFound);
