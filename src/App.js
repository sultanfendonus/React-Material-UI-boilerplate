import { ThemeProvider, Typography } from "@material-ui/core";
import theme from "./theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";

const history = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/*Rest of the code.*/}
      <Router history={history}>{renderRoutes(routes)}</Router>
    </ThemeProvider>
  );
}

export default App;
