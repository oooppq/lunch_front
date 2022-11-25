import React, { useState } from "react";
import { ModalContainer } from "../styledComponents";

const Modal = (props) => {
  return (
    <ModalContainer>
      <div className={props.open ? "openModal modal" : "modal"}>
        {props.open ? (
          <section>
            <header>
              <button className="close" onClick={props.modalOff}>
                &times;
              </button>
            </header>
            <main>test</main>
            {props.menu.map((m) => {
              return <div key={m.id}>{m.menu_name}</div>;
            })}
            <footer>
              <button className="close" onClick={props.modalOff}>
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </ModalContainer>
  );
};

export default Modal;
