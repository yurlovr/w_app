import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Наш адрес: г. Пермь{" "}
        <span className="footer-smile" role="img" aria-label="smile">
          &#128523;
        </span>
      </p>
    </footer>
  );
}
