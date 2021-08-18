import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

//For create a new theme visit https://bareynol.github.io/mui-theme-creator/

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;
