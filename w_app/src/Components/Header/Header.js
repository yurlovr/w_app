import React from "react";
import { Button } from "react-bootstrap";
import "./header.scss";

export default function Header(props) {
  return (
    <header className="header">
      <ul className="header-buttons">
        <li>
          <Button variant="light" onClick={() => console.log("main Menu")}>
            Меню
          </Button>
        </li>
        <li>
          <Button variant="light" onClick={() => console.log("about Us")}>
            О Нас
          </Button>
        </li>
        <li>
          <Button variant="light" onClick={() => props.setModalShow(true)}>
            Корзина
          </Button>
        </li>
      </ul>
    </header>
  );
}
