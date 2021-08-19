import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import ScrollReset from "./components/ScrollReset/ScrollReset";

const history = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter history={history}>
        <ScrollReset />
        {renderRoutes(routes)}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
