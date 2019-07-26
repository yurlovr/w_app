import React from "react";
import { Link } from "react-router-dom";
import "./notFound.scss";

export const NotFound = () => {
  return (
    <div className="notfound">
      Страница не найдена.
      <Link to="/"> На главную </Link>
    </div>
  );
};
