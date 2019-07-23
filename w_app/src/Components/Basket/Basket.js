import React, { Component } from "react";
import {Modal, Button} from "react-bootstrap";

export default class Basket extends Component {
  state = {};

  render() {
    return (

      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Корзина
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Ваши товары</h4>
          <table className="cart-table">
               <tbody>
               <tr className="first-stroke-table">
                   <td className="table-ice">
                     <a className="close" href="#">
                       <img
                      className="ice-in-catalog-cart"
                      src="./images/92a50329-cd3f-4fad-bc8f-04bca02e952e.jpg"
                      alt="Пломбир с апельсиновым джемом"
                      width="33"
                      height="33"
                    />
                  </a>
                </td>

                <td className="table-ice-name">
                  <a className="ice-name a-black" href="#">
                    {" "}
                    Пломбир с апельсиновым джемом{" "}
                  </a>
                </td>

                <td className="table-ice-mass">
                  <span>1,5кг ×</span>
                </td>
                <td className="table-ice-price">
                  <span>200 руб.</span>
                </td>
                <td className="table-ice-total">
                  <span>300 руб.</span>
                </td>
              </tr>

              <tr>
                <td className="table-ice">
                  <a className="close" href="#">
                    <img
                      className="ice-in-catalog-cart"
                      src="./images/52cf4552-f244-47f5-87d8-1e10e74e03e4.jpg"
                      alt="Клубничный пломбир с присыпкой из белого шоколада"
                      width="33"
                      height="33"
                    />
                  </a>
                </td>

                <td className="table-ice-name">
                  <a className="ice-name a-black" href="#">
                    {" "}
                    Клубничный пломбир с присыпкой из белого шоколада
                  </a>
                </td>

                <td className="table-ice-mass">
                  <span>1,5кг ×</span>
                </td>
                <td className="table-ice-price">
                  <span>300 руб.</span>
                </td>
                <td className="table-ice-total">
                  <span>450 руб.</span>
                </td>
              </tr>

              <tr>
                <td />
                <td />
                <td />
                <td className="total" colSpan="2">
                  Итого: 750 руб.
                </td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Закрыть</Button>
          <Button onClick={()=>window.print()}>Печать</Button>
          <Button onClick={()=>console.log("Наш заказ - ")}>Купить</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
