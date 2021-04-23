import React from "react";
import s from "./FormControls.module.css";

const FromControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      {hasError && <span>"Error"</span>}
      <div>
        {props.children}
      </div>
    </div>
  );
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return (<FromControl {...props}><textarea {...input} {...restProps} /></FromControl>);
};


export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return (<FromControl {...props}><input {...input} {...restProps} /></FromControl>);
  };
  