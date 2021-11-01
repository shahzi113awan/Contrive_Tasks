import React, { useState } from "react";
import "../assets/style.css";
import Modals from "./Modal";
export default function Main() {
  const [aModal, setAModal] = useState(false);
  const [bModal, setBModal] = useState(false);
  const toggleA = () => {
    setAModal(!aModal);
  };

  const toggleB = () => {
    setBModal(!bModal);
  };

  return (
    <div class="container bg-light text-center">
      <div className="row">
        <div class="col-md-12 text-center">
          <button
            onClick={(e) => {
              setAModal(true);
            }}
            type="button"
            class="btn bgA text-white col-md-3"
          >
            A
          </button>
          <button
            onClick={(e) => {
              setBModal(true);
            }}
            type="button"
            class="btn bgB btn-warning col-md-3"
          >
            B
          </button>
        </div>
        <Modals show={aModal} Name={"A"} handleCloser={toggleA} />
        <Modals show={bModal} Name={"B"} handleCloser={toggleB} />
      </div>
    </div>
  );
}
