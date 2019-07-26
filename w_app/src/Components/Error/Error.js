import React from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";

function Error() {
  return (
    <Alert variant="danger" dismissible>
      <Alert.Heading>Произошла ошибка!!!</Alert.Heading>
      <p>
        Скорее всего мы обновляем Наш ассортимент.
        Приходите к Нам в магазин.
        С Вас ложка, с Нас мороженое. Мы будем рады Вас видеть.
        Ну а в сети встретимся в другой раз
      </p>
    </Alert>
  );
}
export default connect(
  state => ({
    isError: state.isError
  }),
  dispatch => ({})
)(Error);
