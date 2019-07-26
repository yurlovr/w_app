import React, { Component } from "react";
import ServicesList from "../../Components/ServicesList/ServicesList";
import Slider from "../Slider/Slider";
import { connect } from "react-redux";

class Main extends Component {
  render() {
    return (
      <>
        <Slider services={this.props.allServices} />
        <section className="main">
          <ServicesList services={this.props.allServices} />
        </section>
      </>
    );
  }
}
export default connect(state => ({
  showBasket: state.showBasket,
  allServices: state.allServices
}))(Main);
