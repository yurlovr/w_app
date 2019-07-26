import React from "react";
import { Carousel } from "react-bootstrap";
import "./slider.scss";
import { Const } from "../../Const/Const";

export default function Slider(props) {
  const renderSlider = () => {
    return props.services.map(service => {
      return (
        <Carousel.Item key={Math.random()}>
          <img
            className="d-block w-100"
            src={service.cover}
            alt={service.name}
          />
          <Carousel.Caption>
            <h3>{service.price} &#8381;</h3>
            <p>{service.name}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  };

  const renderBlockImages = () => {
    return props.services.map(service => {
      return (
        <li className="images-item" key={Math.random()}>
          <img className="images-img" src={service.cover} alt={service.name} />
          <h3 className="images-header">{service.price} &#8381;</h3>
          <p className="images-name">{service.name}</p>
        </li>
      );
    });
  };

  if (props.services.length > Const.SLIDER_ITEM) {
    return <Carousel>{renderSlider()}</Carousel>;
  } else {
    return <ul className="images-list">{renderBlockImages()}</ul>;
  }
}
