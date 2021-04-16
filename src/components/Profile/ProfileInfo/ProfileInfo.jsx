import React from "react";
import Preloader from "../../common/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <>
      <div className={s.content_photo}>
        {/* <img
          className={s.photo}
          src="https://images.unsplash.com/photo-1499823196937-8a4597f6f307?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=997&q=80"
        ></img> */}
      </div>
      <div>
        <img src= {props.profile.photos.large}/>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </>
  );
};

export default ProfileInfo;
