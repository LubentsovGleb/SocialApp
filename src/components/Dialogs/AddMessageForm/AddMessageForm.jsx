import React from "react";
import {reduxForm, Field} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import {required, maxLengthCreator} from "../../../utils/validators/validators"

const maxLength50 = maxLengthCreator (50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newMessageBody" placeholder="Enter your message" validate={[required, maxLength50]}/>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default reduxForm ({from: "dialog-add-message-form"}) (AddMessageForm);