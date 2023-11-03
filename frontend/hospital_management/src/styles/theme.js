import { createTheme } from "@mui/material/styles";

const colors = {
    primary: '#13293D',
    secondary: '#35CFF4',
    info: '#5E71BD',
    success: '#BD5EA0',
    warning: '#F5A623',
    danger: '#D0021B',
    white: '#fff',
    black: '#000',
    gray: '#9B9B9B',
}
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: colors.primary,
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
                    backgroundColor: colors.gray,
                    color: colors.white,
                },
            },
        },
    }
});
export default theme