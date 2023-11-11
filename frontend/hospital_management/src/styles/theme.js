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
const theme1 = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: colors.primary,
            contrastText:colors.secondary
        },
        secondary: {
            main: colors.secondary,
        },
        info: {
            main: colors.info,
        },
        success: {
            main: colors.success,
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
export default theme1