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

const countServicesForRender = randomInteger(Const.min, Const.max);

export default class App extends Component {
  state = {
    loading: false,
    services: [],
    isError: false
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
      indexArray = indexArray.concat(randomInteger(Const.min, dataLength));
    }
    return indexArray;
  };

  render() {
    if (this.state.isError) {
      return <Error error={this.state.isError} />;
    }

    if (!this.state.loading) {
      return (
        <section style={{ width: 300, height: 50, marginTop: 10 }}>
          <Spinner animation="grow" variant="primary" />{" "}
          <span
            style={{
              verticalAlign: "super",
              color: "#007bff",
              fontStyle: "italic"
            }}
          >
            Идет загрузка услуг...
          </span>
        </section>
      );
    }

    return (
      <>
        <Header />
        <Slider />
        <Main services={this.state.services} />
        <Footer />
      </>
    );
  }
}
