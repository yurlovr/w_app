import React, { Component } from "react";
import ServicesList from "../../Components/ServicesList/ServicesList";
import Slider from "../Slider/Slider";
import { connect } from "react-redux";

class Main extends Component {
  render() {
    return (
      <>
        <Slider services={this.props.services} />
        <section className="main">
          <ServicesList services={this.props.services} />
        </section>
      </>
    );
  }
}
export default connect(
  state => ({
    showBasket: state.showBasket
  }),
  dispatch => ({})
)(Main);
