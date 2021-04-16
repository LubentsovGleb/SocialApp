import * as axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg"

let Users = (props) => {
  let getUsers = () =>
  {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  }
  return (
    <div> 
      <button className={s.pButton} onClick={getUsers}>Get users</button>
      {props.users.map(u => (
        <div key={u.id} className={s.users}>
          <div className={s.wholeUser}>
            <div className={s.wholeUserPhoto}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} />
            </div>
            <div className={s.wholeUserInfo}>
              <div className={s.name}>{u.name}</div>
              <div className={s.status}>{u.status}</div>
              <div className={s.location}>
                {" "}
                {"u.location.country"}, {"u.location.city"}
              </div>
              <div>
              <div className={s.button}>
                {u.followed 
                  ? <button onClick={() => {props.unfollow(u.id)}} >Unfollow</button>
                  : <button onClick={() => {props.follow(u.id)}} >Follow</button>}
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
