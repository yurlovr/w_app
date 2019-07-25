import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import { Spinner } from "react-bootstrap";
import Error from "./Components/Error/Error";
import ServiceItem from "./Components/ServiceItem/ServiceItem";
import "./app.scss";
import { connect } from "react-redux";
import { Switch, Route} from "react-router-dom";
import { NotFound } from "./Components/NotFound/NotFound";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import {Contacts} from "./Components/Contacts/Contacts";

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

  // this.loadDataLength()
  //   .then(dataLength => this.randomIndex(dataLength))
  //   .then(indexArray => this.loadServices(indexArray))
  //   .then(services =>
  //     this.setState({ ...this.state, services: services, loading: true })
  //   )
  //   .catch(() =>
  //     this.setState({ ...this.state, isError: true, loading: true })
  //   );

  //this.props.store.dispatch(services());

  //
  // loadDataLength = async () => {
  //   //   return await GET_DATA.getDataLength();
  //   // };
  //
  // loadServices = async indexArray => {
  //   return await GET_DATA.getDataFromServer(indexArray);
  // };
  //
  // randomIndex = async dataLength => {
  //   let indexArray = [];
  //   for (let i = 0; i < countServicesForRender; i++) {
  //     indexArray = indexArray.concat(randomInteger(Const.min, dataLength - 1));
  //   }
  //   return indexArray;
  // };
  //
  // setModalShow = bool => {
  //   this.setState({ showBasket: bool });
  // };
  //
  // openService = id => {
  //   if (!id) {
  //     this.setState({
  //       ...this.state,
  //       openService: false,
  //       service: {}
  //     });
  //   } else {
  //     this.setState(
  //       {
  //         ...this.state,
  //         openService: true,
  //         service: this.state.services.find(service => service.id === id)
  //       },
  //       () => console.log("styate", this.state)
  //     );
  //   }
  // };
  //
  // inBasket = id => {
  //   this.setState({
  //     ...this.state,
  //     orderState: this.state.orderState
  //       .concat(this.state.services.find(service => service.id === id))
  //       .map(item => {
  //         return { ...item, count: 1 };
  //       }),
  //     openService: false
  //   });
  // };
  //
  // changeCount = (action, id) => {
  //   let item = this.state.orderState.find(item => item.id === id);
  //
  //   switch (action) {
  //     case Const.ADD:
  //       item.count = item.count + 1;
  //       this.setState({
  //         ...this.state,
  //         orderState: this.state.orderState.map(i => {
  //           if (i.id === id) {
  //             return item;
  //           } else {
  //             return i;
  //           }
  //         })
  //       });
  //       break;
  //     case Const.DISSMISS:
  //       item.count = item.count - 1;
  //       if (item.count) {
  //         this.setState({
  //           ...this.state,
  //           orderState: this.state.orderState.map(i => {
  //             if (i.id === id) {
  //               return item;
  //             } else {
  //               return i;
  //             }
  //           })
  //         });
  //         break;
  //       } else {
  //         this.setState({
  //           ...this.state,
  //           orderState: this.state.orderState.filter(i => i.id !== id)
  //         });
  //         break;
  //       }
  //     default:
  //       this.setState({
  //         ...this.state,
  //         orderState: this.state.orderState.filter(i => i.id !== id)
  //       });
  //       break;
  //   }
  // };

  // dataForRender = () => {
  //     let indexArray = getRandomIndex(this.props.allServices.length);
  //     return indexArray.map(item => this.props.allServices[item]);
  // };

  // {["/","/main","/home" ].map(item =>
  //
  // <Route exact path="/" component={() =>
  // {return ( <Main
  //         services={this.props.allServices}
  //         {...this.props}/>
  //     />
  //
  //     />
  // )
  // )

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
    console.log(this.props);
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

        <Switch>
          {this.homePage()}

          <Route
            path="/service/:Id"
            component={() => <ServiceItem service={this.props.allServices} {...this.props} />}
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
        ownProps
  }),
  dispatch => ({
  })
)(App);
