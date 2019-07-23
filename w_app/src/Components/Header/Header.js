import React from "react";
//import Basket from "../../Components/Basket/Basket";
import { Button } from "react-bootstrap";

export default function Header(props) {
  // const [modalShow, setModalShow] = React.useState(false);

  return (
    <div
      style={{
        width: 100 + "%",
        height: 100,
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid"
      }}
    >
      <Button variant="light" onClick={() => console.log("main Menu")}>
        Меню
      </Button>
      <Button variant="light" onClick={() => console.log("about Us")}>
        О Нас
      </Button>
      <Button variant="light" onClick={() => props.setModalShow(true)}>
        Корзина
      </Button>
    </div>
  );
}
