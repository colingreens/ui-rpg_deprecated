import { useReducer, useEffect } from "react";

import { validate } from "../../util/validators";
import "./Input.css";

function inputReducer(state: any, action: any) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
}

export default function Input(props: {
  initialValue?: any;
  initialIsValid?: boolean;
  validators?: any;
  element?: string;
  id: string;
  type?: string;
  placeholder?: any;
  rows?: number;
  label?: string;
  errorText?: string;
  onInput?: any;
}) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialIsValid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  function changeHandler(event: { target: { value: any } }) {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  }

  function touchHandler() {
    dispatch({
      type: "TOUCH",
    });
  }

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
}
