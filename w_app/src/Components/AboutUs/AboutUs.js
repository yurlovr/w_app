import React from "react";
import { Link } from "react-router-dom";
import "./about.scss";

export const AboutUs = () => {
  return (
    <div className="about">
      О нас
      <Link to="/"> На главную </Link>
    </div>
  );
};
