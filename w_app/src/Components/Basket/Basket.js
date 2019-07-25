import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./basket.scss";
import {connect} from "react-redux";
import {addCountBasket,dissmissCountBasket, deleteFromBasket} from "../../Actions/actionBasket";

class Basket extends Component {


  renderTable = array => {
    return array.map(item => {
      return (
        <tr className="first-stroke-table" key={Math.random()}>
          <td className="table-ice">
            <span onClick={() => this.props.onDeleteFromBasket(item)}/>
            <img
              className="ice-in-catalog-cart"
              src={item.cover}
              alt={item.name}
              width="33"
              height="33"
            />
          </td>

          <td className="table-ice-name">
           <span>
              {item.name}
            </span>
          </td>

          <td className="table-ice-count">
            <span className="table-ice-count -button" onClick={() => this.props.onAddCountBasket(item)}> + </span>
            <span>{item.count} шт.</span>
            <span className="table-ice-count -button" onClick={() => this.props.onDissmissCountBasket(item)}> - </span>
          </td>
          <td className="table-ice-price">
            <span>{item.price} &#8381;</span>
          </td>
          <td className="table-ice-total">
            <span>{item.count * item.price} &#8381;</span>
          </td>
        </tr>
      );
    });
  };

  handleClick = (action, id) => {
    this.props.onEnter(action, id);
  };

  render() {
    let order = this.props.serviceOrder;

    console.log("order", this.props.order);

    return (
      <Modal
        {...this.props}
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
          <Button onClick={() => this.props.onHide(false)}>Закрыть</Button>
          <Button onClick={() => window.print()}>Печать</Button>
          <Button onClick={() => console.log("Наш заказ - ", this.props.serviceOrder)}>Купить</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}


export default connect(
  state => ({
    serviceOrder: state.orderState,
  }),
  dispatch => ({
     onAddCountBasket: (service) => {
       dispatch(addCountBasket(service));
     },
      onDissmissCountBasket: (service) => {
          dispatch(dissmissCountBasket(service));
      },
      onDeleteFromBasket: (service) => {
          dispatch(deleteFromBasket(service));
      },
 })
 )(Basket);