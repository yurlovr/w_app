import React, {Component} from "react";
import { Button } from "react-bootstrap";
import "./header.scss";
import {connect} from "react-redux";
import{GetShowBasket} from "../../Actions/data";
import Basket from "../Basket/Basket";
import {Link} from "react-router-dom";

class Header extends Component {
  render() {
    return (
<>
  {this.props.onGetShowBasket && <Basket
    show={this.props.showBasket}
    onHide={() => this.props.onGetShowBasket(false)}
    //    order={this.state.orderState}
    //    onEnter={this.changeCount}
  />
  }
      <header className="header">
        <ul className="header-buttons">
          <li>
            <Button variant="light" onClick={() => console.log("main Menu")}>
              Меню
            </Button>
          </li>
          <li>
            <Link to="/about">
              О Нас
            </Link>
          </li>
          <li>
            <Button variant="light" onClick={() => this.props.onGetShowBasket(true)}>
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
    showBasket: state.showBasket,
  }),
  dispatch => ({
    onGetShowBasket: (bool) => dispatch(GetShowBasket(bool)),
}))(Header)