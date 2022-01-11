import { createTheme } from "@material-ui/core/styles";
import { errorColor, neutralColor, primaryColor, secondaryColor } from "./colors";

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: 'white'
        },
        secondary: {
            main: secondaryColor
        },
        text:{
            primary: primaryColor
        },
        error: {
            main: primaryColor
        }
    }
})

export default theme;