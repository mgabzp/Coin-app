//importación de React y Hooks
import React, { useEffect, useState } from "react";
//importacion de helpers
import { getCoins, searchCoins } from "../helpers/coinsFetch";
//importacion de componentes
import CoinNavbar from "./CoinNavbar";
import CoinSearch from "./CoinSearch";
import CoinTable from "./CoinTable";

import Spinner from 'react-bootstrap/Spinner'


function Home() {
  //Estado de criptomonedas
  const [coins, setCoins] = useState({
    data: [],
    update: true,
    loading: true,
  });
  //Estado de formulario Busqueda
  const [formValue, setFormValue] = useState("");
  //Traer datos generales cuando se actualice
  useEffect(() => {
    getCoins().then((resp) => {
      setCoins({
        data: resp,
        update: false,
        loading: false,
      });
      setFormValue("");
    });
  }, [coins.update]);
  //traer datos de busqueda segun el input
  useEffect(() => {
    searchCoins(formValue).then((resp) => {
      setCoins({
        data: resp,
        update: false,
        loading: false,
      });
    });
  }, [formValue]);
  //Change del input
  const handleChange = ({ target }) => {
    setFormValue(target.value);
  };
  return (
    <div className="bg-color">
      <CoinNavbar coins={coins} setCoins={setCoins} />
      <div className="container mt-4">
        <CoinSearch handleChange={handleChange} formValue={formValue} />
        <div className="row">
          <div className="col">
            {coins.loading ? (
          <div className="spinner d-flex justify-content-center">
              <Spinner animation="grow"/>
            </div>
            ) : (
              <CoinTable coins={coins} />
              // <ul>
              //   {coins.data.map((item) => (
              //     <li key={item.id}>
              //       {item.symbol} -{numeral(item.supply).format("($ 0.00 a)")}
              //     </li>
              //   ))}
              // </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
