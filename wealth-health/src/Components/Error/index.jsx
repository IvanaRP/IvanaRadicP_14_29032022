import React from "react";
import { Link } from "react-router-dom";
import "../../styles/error.css";

function Error() {
  return (
    <div className="errorWrapper">
      <h1 className="error404">404</h1>
      <h2 className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className="home-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
