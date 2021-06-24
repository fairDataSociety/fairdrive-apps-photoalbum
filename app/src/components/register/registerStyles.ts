import { makeStyles, createStyles } from "@material-ui/styles";
// import interface for component Props and Theme
import { Theme } from "../../store/themeContext/themes";
import { Props } from "./register";

const useStyles = makeStyles(() =>
  createStyles({
    Login: {
      backgroundColor: (style: Props & Theme) => style.backgroundDark,
      paddingTop:"10rem",
      height: "100vh",
      display: "flex",
      flexDirection: "row",
      justifyItems: "center",
      alignItems: "center",
      overflowX: "hidden",
      overflowY: "auto",
      textAlign:"center"

    },
    registerContainer:{
      paddingLeft:"7rem",
      display: "flex",
      flexDirection: "column",
      justifyItems: "center",
      alignItems: "center",
      overflowX: "hidden",
      overflowY: "auto",
    },
    title: {
      fontWeight: 'bold',
      font: (style: Props & Theme) => style.typography.h4,
      color:(style: Props & Theme) => style.textColorPrimary,
      textAlign: 'center',
    },
    description: {
      font: (style: Props & Theme) => style.typography.body1,
      color:(style: Props & Theme) => style.textColorPrimary,
      marginBottom: "10rem",
    },
    errormsg: {
      // from bodyBold in Fairdrive:
      
    },
    buttons:{
      display:"flex",
      flexDirection: "row",
    }
  })
);

export default useStyles;
