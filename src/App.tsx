import React from "react";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Activities from "./views/Activities";
import Top from "./views/Top";
import Profile from "./views/Profile";
import Links from "./views/Links";
import NoteBook from "./views/NoteBook";
import NotFound from "./views/NotFound";

function Copyright() {
  return (
    <Typography variant="body2" align="center" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="/">
        tomtsutom
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: "40px",
  },
  main: {
    minHeight: "calc(100vh - 132px)",
    backgroundColor: theme.palette.background.paper,
  },
  sidebar: {
    background: "#ccc",
  },
  footer: {
    padding: theme.spacing(2),
    height: "80px",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar variant="dense" className={classes.toolbar}>
          <Link color="inherit" href="/" underline="none">
            <Typography variant="body1" color="inherit" noWrap>
              tomtsutom.com
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>

      <main className={classes.main}>
        <Router>
          <Switch>
            <Route path="*/index.html">
              <Redirect to="." />
            </Route>
            <Route path="/" exact>
              <Top />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/activities" exact>
              <Activities />
            </Route>
            <Route path="/notebook" exact>
              <NoteBook />
            </Route>
            <Route path="/links" exact>
              <Links />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          <Link
            color="inherit"
            href="https://github.com/Tsutomu-Ikeda/tomtsutom.com"
            target="_blank"
            rel="noopener"
          >
            GitHubでコードを公開しています
          </Link>
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
