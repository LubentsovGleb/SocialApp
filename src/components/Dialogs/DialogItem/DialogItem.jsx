import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={s.activedialog}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
