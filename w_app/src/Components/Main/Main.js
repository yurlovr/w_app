import React, { Component } from "react";
import ServicesList from "../../Components/ServicesList/ServicesList";

export default class Main extends Component {
  render() {
    return (
      <section className="main">
        <ServicesList services={this.props.services} />
      </section>
    );
  }
}
