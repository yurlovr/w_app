import React from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import "./error.scss";

function Error() {
  return (
    <section className="error">
      <Alert variant="danger">
        <Alert.Heading>Что-то пошло не так )))</Alert.Heading>
        <p>
          Скорее всего мы обновляем Наш ассортимент.
          <br />
          Приходите к Нам в магазин.
          <br />
          С Вас ложка, a с Нас мороженое!
          <br />
          Мы будем рады видеть Вас.
          <br />
          Ну, а в сети, встретимся в другой раз.
        </p>
      </Alert>
    </section>
  );
}
export default connect(state => ({
  isError: state.isError
}))(Error);
