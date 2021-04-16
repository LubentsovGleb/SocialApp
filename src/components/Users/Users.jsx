import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import { usersAPI } from "../../api/api";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={s.pG}>
        {pages.map((p) => {
          return (
            <div
              className={`${s.pGItem} ${
                props.currentPage === p && s.selectedPage
              }`}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </div>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={s.users}>
          <div className={s.wholeUser}>
            <NavLink to={"/profile/" + u.id} activeClassName={s.activeLink}>
              <div className={s.wholeUserPhoto}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </div>
            </NavLink>

            <div className={s.wholeUserInfo}>
              <div className={s.name}>{u.name}</div>
              <div className={s.status}>{u.status}</div>
              <div className={s.location}>
                {" "}
                {"u.location.country"}, {"u.location.city"}
              </div>
              <div>
                <div className={s.button}>
                  {u.followed ? (
                    <button
                      disabled={props.followingInProgress.some(
                        (id) => id === u.id
                      )}
                      onClick={() => {props.unfollow(u.id);}}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      disabled={props.followingInProgress.some(
                        (id) => id === u.id
                      )}
                      onClick={() => {props.follow(u.id);}}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
