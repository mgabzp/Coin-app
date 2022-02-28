import React from "react";
import { useHistory } from "react-router-dom";

import logo from '../assets/cripto-logo.png'

const CoinNavbar = ({coins,setCoins}) => {

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
          <div>
            <img className="img-logo" src={logo} alt="Logo" />
            <span className="navbar-brand">CryptoApp</span>
          </div>

          <button
            className="btn btn-outline-warning btn-nav fw-bold"
            disabled={coins.update}
            onClick={handleLoading}
          >
            Update
          </button>
        </div>
        <button
          className="btn btn-warning me-5 btn-nav fw-bold"
          onClick={() => {
            localStorage.removeItem("crypto_app_user");
            history.push("/login");
          }}
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default CoinNavbar;
