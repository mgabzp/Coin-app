import React from "react";
import { Link, useHistory } from "react-router-dom";

import logo from "../assets/cripto-logo.png";

const CoinNavbar = ({ coins, setCoins }) => {
  const history = useHistory();
  const handleLoading = () => {
    setCoins({
      ...coins,
      update: true,
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/Home" className="navbar-brand">
            <img className="img-logo" src={logo} alt="Logo" />
            <span className="navbar-brand">CryptoApp</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item ms-lg-3 my-2">
                <button
                  className="btn btn-outline-warning btn-nav fw-bold"
                  disabled={coins.update}
                  onClick={handleLoading}
                >
                  Update
                </button>
              </li>

              <li className="nav-item ms-lg-5 my-2">
                <button
                  className="btn btn-warning me-5 btn-nav fw-bold"
                  onClick={() => {
                    localStorage.removeItem("crypto_app_user");
                    history.push("/login");
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CoinNavbar;
