import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffb0b0",
      main: "#A30000",
      dark: "#A30000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const helmetContext = {};

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
