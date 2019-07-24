import React from "react";
import {Link} from "react-router-dom";

export const NotFound = () => {
    return (
        <div>Страница не найдена.
            <Link to="/"> На главную </Link>
        </div>
    );
};