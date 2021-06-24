import React, { useContext, useState } from "react";
import { ThemeContext } from "../../store/themeContext/themeContext";
import { StoreContext } from "../../store/store";
import useStyles from "./createNewStyles";
import TextField from "../textField/textField";
import ButtonPill from "../buttonPill/buttonPill";

export interface Props {
  onClick: any;
  label: string;
  title: string;
  setProp: any;
}

function CreateNew(props: Props) {
  const { state, actions } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });

  return (
    <div className={classes.NewCard}>
      <div className={classes.Title}>{props.title}</div>
      <div className={classes.Body}>
        {props.label}
        <TextField
          placeholder="Enter here..."
          setProp={props.setProp}
          type="text"
        ></TextField>
        <ButtonPill clickFunction={props.onClick} text="Confirm"></ButtonPill>
      </div>
    </div>
  );
}

export default React.memo(CreateNew);
