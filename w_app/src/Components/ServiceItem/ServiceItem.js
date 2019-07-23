import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./serviceItem.scss";

export default class ServiceItem extends Component {
  state = {};

  renderButtons = () => {
    return (
      <ul className="item-buttons">
          <li className="item-button">
              <Button variant="light" onClick={() => this.props.openService()}>
                  {" "}
                  Назад{" "}
              </Button>
          </li>
        <li className="item-button">
          <Button variant="light" onClick={() => this.props.inBasket(this.props.service.id)}>
            В Корзину{" "}
          </Button>
        </li>
        <li className="item-button">
          <Button variant="light" onClick={() => this.props.onHide(true)}>
            Корзина{" "}
          </Button>
        </li>
      </ul>
    );
  };

  render() {
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
