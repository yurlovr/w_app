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
import { connect } from "react-redux";


class App extends Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
   if(!this.props.isLoading) {
     return true;
   }
   if(this.props.isError) {
     return true;
   }
    if(this.props.allServices.length && this.props.isLoading ) {
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
  //   return await GET_DATA.getDataLength();
  // };
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

  dataForRender = () => {
    let indexArray = getRandomIndex(this.props.allServices.length);
    return indexArray.map(item => this.props.allServices[item]);
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



        <Header  />
        <Main
          services={this.dataForRender()}
        />
      <Footer />
      </>
    );

    //
    //
    //     {this.state.openService ? (
    //       <ServiceItem
    //         service={this.state.service}
    //         inBasket={this.inBasket}
    //         onHide={this.setModalShow}
    //         openService={this.openService}
    //       />
    //     ) : (
    //   </>
    // );
  }
}

export default connect(
  state => ({
    isError: state.isError,
    isLoading: state.isLoading,
    allServices: state.allServices,
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

  })
)(App);
