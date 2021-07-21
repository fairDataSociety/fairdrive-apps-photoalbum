import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../store/themeContext/themeContext";
import { StoreContext } from "../../../store/store";
import useStyles from "./connectToFairdriveStyles";
import Modal from "../modal/modal";
import TextField from "src/components/textField/textField";

export interface Props {
  setUsername?: any;
  setPassword?: any;
}

function ConnectToFairdrive(props: Props) {
  const { state, actions } = useContext(StoreContext);
  const { theme } = useContext(ThemeContext);

  const classes = useStyles({ ...props, ...theme });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function onLogin() {
    actions.userLogin({
      username,
      password,
      podName: "Home",
    });
    actions.getPods();
  }
  return (
    <Modal
      heading="Connect to Fairdrive"
      button="Authorize"
      handleClick={onLogin}
      handleClickAway={() => {}}
    >
      <p className={classes.label}>USERNAME</p>
      <TextField
        placeholder={`Enter here...`}
        setProp={setUsername}
        type="text"
      ></TextField>
      <p className={classes.label}>PASSWORD</p>
      <TextField
        placeholder={`Enter here...`}
        setProp={setPassword}
        type="password"
      ></TextField>
    </Modal>
  );
}

export default React.memo(ConnectToFairdrive);
