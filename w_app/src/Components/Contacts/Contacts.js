import React from "react";
import { Link } from "react-router-dom";
import "./contacts.scss";

export const Contacts = () => {
  return (
    <div className="contacts">
      Как нас найти )))yurlovr@gmail.com
      <Link to="/main"> На главную </Link>
    </div>
  );
};
