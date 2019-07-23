import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Slider from "./Components/Slider/Slider";
import { Spinner } from "react-bootstrap";
import Error from "./Components/Error/Error";
import { GET_DATA } from "./dataJSON/getDataFromServer";
import randomInteger from "./helperFunction/randomInteger";
import { Const } from "./Const/Const";
import Basket from "./Components/Basket/Basket";
import ServiceItem from "./Components/ServiceItem/ServiceItem";
import "./app.scss";

const countServicesForRender = randomInteger(Const.min, Const.max);

export default class App extends Component {
  state = {
    loading: false,
    services: [],
    isError: false,
    showBasket: false,
    openService: false,
    service: {},
    orderState: []
  };

  componentDidMount() {
    this.loadDataLength()
      .then(dataLength => this.randomIndex(dataLength))
      .then(indexArray => this.loadServices(indexArray))
      .then(services =>
        this.setState({ ...this.state, services: services, loading: true })
      )
      .catch(() =>
        this.setState({ ...this.state, isError: true, loading: true })
      );
  }

  loadDataLength = async () => {
    return await GET_DATA.getDataLength();
  };

  loadServices = async indexArray => {
    return await GET_DATA.getDataFromServer(indexArray);
  };

  randomIndex = async dataLength => {
    let indexArray = [];
    for (let i = 0; i < countServicesForRender; i++) {
      indexArray = indexArray.concat(randomInteger(Const.min, dataLength - 1));
    }
    return indexArray;
  };

  setModalShow = bool => {
    this.setState({ showBasket: bool });
  };

  openService = id => {
    if (!id) {
      this.setState({
        ...this.state,
        openService: false,
        service: {}
      });
    } else {
      this.setState(
        {
          ...this.state,
          openService: true,
          service: this.state.services.find(service => service.id === id)
        },
        () => console.log("styate", this.state)
      );
    }
  };

  inBasket = id => {
    this.setState({
      ...this.state,
      orderState: this.state.orderState
        .concat(this.state.services.find(service => service.id === id))
        .map(item => {
          return { ...item, count: 1 };
        }),
      openService: false
    });
  };

    changecount = (action, id) => {

    let item = this.state.orderState.find(item => item.id === id);

    switch (action) {
      case Const.ADD:
        item.count = item.count + 1;
        this.setState({
          ...this.state,
          orderState: this.state.orderState.map(i => {
            if (i.id === id) {
              return item;
            } else {
              return i;
            }
          })
        });
    }
  };

  render() {
    if (this.state.isError) {
      return <Error error={this.state.isError} />;
    }

    if (!this.state.loading) {
      return (
        <section className="spinner">
          <Spinner animation="grow" variant="primary" />{" "}
          <span className="spinner-text">Идет загрузка услуг...</span>
        </section>
      );
    }

    return (
      <>
        <Basket
          show={this.state.showBasket}
          onHide={this.setModalShow}
          order={this.state.orderState}
          changecount={this.changecount}
        />
        <Header setModalShow={this.setModalShow} />
        {this.state.openService ? (
          <ServiceItem
            service={this.state.service}
            inBasket={this.inBasket}
            onHide={this.setModalShow}
            openService={this.openService}
          />
        ) : (
          <>
            <Slider />
            <Main
              services={this.state.services}
              openService={this.openService}
            />
          </>
        )}
        <Footer />
      </>
    );
  }
}
