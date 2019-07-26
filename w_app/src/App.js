import React, { Component } from "react";
import Main from "./Components/Main/Main";
import { Spinner } from "react-bootstrap";
import Error from "./Components/Error/Error";
import "./app.scss";
import { connect } from "react-redux";
import Basket from "./Components/Basket/Basket";

class App extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (!this.props.isLoading) {
      return true;
    }
    if (this.props.isError) {
      return true;
    }
    if (this.props.allServices.length && this.props.isLoading) {
      return false;
    }
  }

  render() {
    if (this.props.isError) {
      return <Error />;
    }

    if (!this.props.isLoading) {
      return (
        <div className="spinner-wrap">
          <section className="spinner">
            <Spinner animation="grow" variant="primary" />{" "}
            <span className="spinner-text">Идет загрузка...</span>
          </section>
        </div>
      );
    }

    return (
      <>
        <Basket show={this.props.showBasket} />
        <Main />
      </>
    );
  }
}

export default connect((state, ownProps) => ({
  isError: state.isError,
  isLoading: state.isLoading,
  allServices: state.allServices,
  showBasket: state.showBasket,
  ownProps
}))(App);
