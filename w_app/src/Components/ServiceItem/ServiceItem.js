import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./serviceItem.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { putInBasket, GetShowBasket } from "../../Actions/actionBasket";

class ServiceItem extends Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.props.isLoading !== nextProps.isLoading;
  }

  renderButtons = () => {
    return (
      <ul className="item-buttons">
        <li className="item-button">
          <Link to="/main"> Назад </Link>
        </li>
        <li className="item-button">
          <Button
            variant="light"
            onClick={() =>
              this.props.onPutInBasket({ ...this.props.service, count: 1 })
            }
          >
            В Корзину{" "}
          </Button>
        </li>
        <li className="item-button">
          <Button
            variant="light"
            onClick={() => this.props.onGetShowBasket(true)}
          >
            Корзина{" "}
          </Button>
        </li>
      </ul>
    );
  };

  render() {

    console.log("RENDER_ITEM!!!!")

    let service = this.props.service;
    return (
      <section className="item">
        <h2 className="item-header">{service.name}</h2>
        <div className="item-wrapper">
          <img
            className="item-image"
            src={service.cover}
            alt={service.name}
            title={service.name}
          />
          <p className="item-price">
            <b>Цена: {service.price} &#8381;</b>
          </p>
          <div className="item-description">
            <h3>Описание</h3>
            {service.description}
          </div>
        </div>

        {this.renderButtons()}
      </section>
    );
  }
}
export default connect(
  (state, ownProps) => ({
    isLoading: state.isLoading,
    service: state.allServices.find(service => {
      console.log("ownProps", ownProps);
      return "/service/" + service.id === ownProps.location.pathname;
    })
  }),
  dispatch => ({
    onGetShowBasket: bool => dispatch(GetShowBasket(bool)),
    onPutInBasket: order => dispatch(putInBasket(order))
  })
)(ServiceItem);
