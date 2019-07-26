import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./basket.scss";
import { connect } from "react-redux";
import {
  addCountBasket,
  dissmissCountBasket,
  deleteFromBasket,
  GetShowBasket
} from "../../Actions/actionBasket";
import BasketTable from "./BasketTable";

class Basket extends Component {
  renderTable = array => {
    return array.map(item => {
      return (
        <BasketTable
          key={Math.random()}
          service={item}
          onAddCountBasket={this.props.onAddCountBasket}
          onDissmissCountBasket={this.props.onDissmissCountBasket}
          onDeleteFromBasket={this.props.onDeleteFromBasket}
        />
      );
    });
  };

  render() {
    let order = this.props.serviceOrder;
    return (
      <Modal
        show={this.props.showBasket}
        onHide={() => this.props.onGetShowBasket(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Корзина</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Ваши товары</h4>

          {!order || !order.length ? (
            <div>Корзина пуста</div>
          ) : (
            <table className="cart-table">
              <tbody>{this.renderTable(order)}</tbody>
            </table>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.onGetShowBasket(false)}>
            Закрыть
          </Button>
          <Button onClick={() => window.print()}>Печать</Button>
          <Button
            onClick={() => console.log("Наш заказ - ", this.props.serviceOrder)}
          >
            Купить
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(
  state => ({
    serviceOrder: state.orderState,
    showBasket: state.showBasket
  }),
  dispatch => ({
    onAddCountBasket: service => {
      dispatch(addCountBasket(service));
    },
    onDissmissCountBasket: service => {
      dispatch(dissmissCountBasket(service));
    },
    onDeleteFromBasket: service => {
      dispatch(deleteFromBasket(service));
    },
    onGetShowBasket: bool => dispatch(GetShowBasket(bool))
  })
)(Basket);
