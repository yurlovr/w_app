import React, { Component } from "react";
import ServicesList from "../../Components/ServicesList/ServicesList";
import Slider from "../Slider/Slider";
import Basket from "../Basket/Basket";
import {connect} from "react-redux";
import {getData, GetShowBasket} from "../../Actions/actionData";

 class Main extends Component {
  render() {
    return (
      <>




        <Slider services={this.props.services} />
        <section className="main">
          <ServicesList
            services={this.props.services}
          />
        </section>
      </>
    );
  }
}
export default connect(
  state => ({
    showBasket: state.showBasket,
  }),
  dispatch => ({
    // onAddTrack: (name) => {
    //   const payload = {
    //     id: Date.now().toString(),
    //     name
    //   };
    //   dispatch({ type: 'ADD_TRACK', payload });
    // },
    // onFindTrack: (name) => {
    //   console.log('name', name);
    //   dispatch({ type: 'FIND_TRACK', payload: name});
    // },
    //onGetShowBasket: (bool) => dispatch(GetShowBasket(bool)),
  })
)(Main);