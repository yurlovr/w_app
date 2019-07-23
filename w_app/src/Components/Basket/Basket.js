import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./basket.scss";
import {Const} from "../../Const/Const";

export default class Basket extends Component {
  state = {};


  renderTable = array => {
    return array.map(item => {
      return (
        <tr className="first-stroke-table" key={Math.random()}>
          <td className="table-ice">
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
            <button className="table-ice-count -button" onClick={() => this.addClick(item.id)}> + </button>
            <span>{item.count} шт.</span>
            <button className="table-ice-count -button"> - </button>
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

  addClick = (id) => {
    this.props.changecount(Const.ADD,id);
  };

  render() {
    let order = this.props.order;


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

          {!order.length ? (
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
          <Button onClick={() => console.log("Наш заказ - ")}>Купить</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
