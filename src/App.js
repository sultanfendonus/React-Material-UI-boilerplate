import { ThemeProvider, Typography } from "@material-ui/core";
import theme from "./theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/*Rest of the code.*/}
    </ThemeProvider>
  );
}

export default App;
