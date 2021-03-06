import React, { Component } from "react";
import "./servicesList.scss";
import { Link } from "react-router-dom";

export default class ServicesList extends Component {
  renderServiceItem = () => {
    return this.props.services.map(service => {
      return (
        <li className="services-item col-3" key={Math.random()}>
          <Link to={`service/${service.id}`}>
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
          </Link>
        </li>
      );
    });
  };

  render() {
    return (
      <>
        <header>
          <h2 className="services-header -main">Наши товары</h2>
        </header>
        <div className="container">
          <ul
            className="services-list row"
            style={
              this.props.services.length < 3 ? { justifyContent: "center" } : {}
            }
          >
            {this.renderServiceItem()}
          </ul>
        </div>
      </>
    );
  }
}
