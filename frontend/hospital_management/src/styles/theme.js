import { createTheme } from "@mui/material/styles";

const colors = {
    primary: '#13293D',
    secondary: '#35CFF4',
    info: '#D3E3F7',
    success: '#826AF9',
    warning: '#F5A623',
    danger: '#D0021B',
    white: '#fff',
    black: '#000',
    gray: '#A7AFB7',
}
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#a683b0',
        },
        secondary: {
            main: '#7a5ebd',
        },
        info: {
            main: '#5e71bd',
        },
        success: {
            main: '#bd5ea0',
        },
    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: colors.primary,
                    color: colors.white,
                },
            },
        },
    }
});
export default theme
