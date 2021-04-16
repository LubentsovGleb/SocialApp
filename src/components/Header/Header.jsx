import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.header__inner}>
        <img
          className={s.logo}
          src="https://yt3.ggpht.com/ytc/AAUvwnhcOYdTa8LLrCrXBvmGL2kd1pP1xiGLChGUaz4KGA=s48-c-k-c0x00ffffff-no-rj"
        ></img>
        <div className={s.loginBlock}>
          {props.isAuth? props.login : <NavLink to={"/login"} className={s.loginLink}>
            Login 
          </NavLink>}
          
        </div>
      </div>
    </header>
  );
};

export default Header;
