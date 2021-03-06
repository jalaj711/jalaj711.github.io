import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#c0ff03",
        },
        secondary: {
            main: "#00d0ff"
        },
        background: {
            default: "#040c18",
            paper: "rgb(10, 25, 41)"
        },
        text: {
            primary: "#fff",
            secondary: "#dcdcdc"
        }
    },
    typography: {
        fontFamily: "'Source Code Pro'"
    },
    
})

export default theme;