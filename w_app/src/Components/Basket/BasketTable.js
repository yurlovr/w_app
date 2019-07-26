import React from "react";

export default function BasketTable(props) {
  return (
    <tr className="first-stroke-table">
      <td className="table-ice">
        <span onClick={() => props.onDeleteFromBasket(props.service)} />
        <img
          className="ice-in-catalog-cart"
          src={props.service.cover}
          alt={props.service.name}
          width="33"
          height="33"
        />
      </td>

      <td className="table-ice-name">
        <span>{props.service.name}</span>
      </td>

      <td className="table-ice-count">
        <span
          className="table-ice-count -button"
          onClick={() => props.onAddCountBasket(props.service)}
        >
          {" "}
          +{" "}
        </span>
        <span>{props.service.count} шт.</span>
        <span
          className="table-ice-count -button"
          onClick={() => props.onDissmissCountBasket(props.service)}
        >
          {" "}
          -{" "}
        </span>
      </td>
      <td className="table-ice-price">
        <span>{props.service.price} &#8381;</span>
      </td>
      <td className="table-ice-total">
        <span>{props.service.count * props.service.price} &#8381;</span>
      </td>
    </tr>
  );
}
