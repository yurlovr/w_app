import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./header.scss";
import { connect } from "react-redux";
import { GetShowBasket } from "../../Actions/actionBasket";
import Basket from "../Basket/Basket";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        {this.props.onGetShowBasket && (
          <Basket
            show={this.props.showBasket}
            onHide={() => this.props.onGetShowBasket(false)}
          />
        )}
        <header className="header">
          <ul className="header-buttons">
            <li>
              <Link to="/contacts">
                Контакты
              </Link>
            </li>
            <li>
              <Link to="/about">О Нас</Link>
            </li>
            <li>
              <Button
                variant="light"
                onClick={() => this.props.onGetShowBasket(true)}
              >
                Корзина
              </Button>
            </li>
          </ul>
        </header>
      </>
    );
  }
}
export default connect(
  state => ({
    showBasket: state.showBasket
  }),
  dispatch => ({
    onGetShowBasket: bool => dispatch(GetShowBasket(bool))
  })
)(Header);
