import React, { Component } from "react";

export default class ServicesList extends Component {
  state = {};

  componentDidMount() {}

  renderServiceItem = () => {
    return this.props.services.map(service => {
      return (
        <li onClick={()=> console.log(service.id)} style={{backgroundColor:"grey"}}>
          <h4>{service.name}</h4>
          <a href="#">
            <img
              src={service.cover}
              alt={service.name}
              width="267"
              height="267"
            />
          </a>
          <p>
            <b>{service.price}</b>
          </p>

          <p>{service.description}</p>
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
        <div>
          <ul style={{listStyle:"none"}}>{this.renderServiceItem()}</ul>
        </div>
      </>
    );
  }
}
