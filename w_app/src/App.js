import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import { Spinner } from "react-bootstrap";
import Error from "./Components/Error/Error";
import ServiceItem from "./Components/ServiceItem/ServiceItem";
import "./app.scss";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "./Components/NotFound/NotFound";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { Contacts } from "./Components/Contacts/Contacts";
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

  homePage = () => {
    return ["/", "/home", "/main"].map(path => (
      <Route
        exact
        path={path}
        component={() => (
          <Main services={this.props.allServices} {...this.props} />
        )}
        key={Math.random()}
      />
    ));
  };

  render() {
    console.log("RENDER_________________________________");
    if (this.props.isError) {
      return <Error />;
    }

    if (!this.props.isLoading) {
      return (
        <section className="spinner">
          <Spinner animation="grow" variant="primary" />{" "}
          <span className="spinner-text">Идет загрузка услуг...</span>
        </section>
      );
    }

    return (
      <>
        <Header />

          <Basket
            show={this.props.showBasket}
          />


        <Switch>
          {this.homePage()}
          <Route
            path="/service/:Id"
            component={() => (
              <ServiceItem service={this.props.allServices} {...this.props} />
            )}
          />

          <Route path="/about" component={AboutUs} />
          <Route path="/contacts" component={Contacts} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    isError: state.isError,
    isLoading: state.isLoading,
    allServices: state.allServices,
    showBasket: state.showBasket,
    ownProps
  }),
  dispatch => ({
  })
)(App);
