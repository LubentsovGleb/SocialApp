import React from "react";
import s from "./Dialogs.module.css";
import { NavLink, Redirect } from "react-router-dom";
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import AddMessageForm from "./AddMessageForm/AddMessageForm"

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <Dialog name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElements = state.messages.map((mes) => (
    <Message message={mes.message} key={mes.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <>
      <div className={s.dialogsTitle}>Dialogs</div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>
          <div className={s.message}>
            <div>{messagesElements}</div>
          </div>
          <AddMessageForm onSubmit = {addNewMessage}/> 
        </div>
      </div>
    </>
  );
};

// const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm"})(AddMessageForm);


export default Dialogs;
