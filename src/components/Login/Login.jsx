import react from "react";
import { reduxForm, Field } from "redux-form";
import {Input} from "./../common/FormControls/FormControls"
import {required, maxLengthCreator} from "../../utils/validators/validators"
import {login} from "./../../redux/auth-reducer"
import { connect } from "react-redux";
import { Redirect } from "react-router";
import s from "./../common/FormControls/FormControls.module.css"

const LoginForm = (props) => {

  // const maxLength50 = maxLengthCreator (50);

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[required]} placeholder={"Email"} name={"email"} component={Input} />
      </div>
      <div>
        <Field validate={[required]} placeholder={"Password"} name={"password"} component={Input} type= {"password"}/>
      </div>
      <div>
        <Field type="checkbox" name={"rememberMe"} component={Input} />{" "}
        remember me
      </div>
      { props.error && <div className= {s.formSummaryError}>
        {props.error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
      return <Redirect to= {"/profile"}/>
    }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit = {onSubmit}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login}) (Login);