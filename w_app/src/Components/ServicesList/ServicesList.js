import React, { Component } from "react";
import "./servicesList.scss";

export default class ServicesList extends Component {
  state = {};

  componentDidMount() {}

  handleClick = id => {
    console.log(id);
  };

  renderServiceItem = () => {
    return this.props.services.map(service => {
      return (
        <li
          className="services-item col-3"
          onClick={() => this.handleClick(service.id)}
          key={Math.random()}
        >
          <h4 className="services-header">{service.name}</h4>
          <div className="margin-auto">
            <img
              className="services-img"
              src={service.cover}
              alt={service.name}
              width="267"
              height="267"
            />
            <p className="services-price">
              <b>Цена: {service.price} &#8381;</b>
            </p>
          </div>
        </li>
      );
    });
  };

  render() {
    return (
      <>
        <header>
          <h2>Наши товары</h2>
        </header>
        <div className="container">
          <ul className="services-list row">{this.renderServiceItem()}</ul>
        </div>
      </>
    );
  }
}
