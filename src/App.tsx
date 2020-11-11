import React, { Suspense } from "react";

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Skeleton from "@material-ui/lab/Skeleton";
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

import NotFound from "./views/NotFound";

const Activities = React.lazy(() => import("./views/Activities"));
const Top = React.lazy(() => import("./views/Top"));
const Photos = React.lazy(() => import("./views/Photos"));
const Profile = React.lazy(() => import("./views/Profile"));
const Links = React.lazy(() => import("./views/Links"));
const NoteBook = React.lazy(() => import("./views/NoteBook"));

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
    minHeight: 40,
  },
  main: {
    minHeight: "calc(100vh - 132px)",
    backgroundColor: theme.palette.background.paper,
  },
  footer: {
    padding: theme.spacing(2),
    height: 80,
  },
}));

const routes = [{
  path: "/",
  component: Top,
}, {
  path: "/photos",
  component: Photos,
}, {
  path: "/profile",
  component: Profile,
}, {
  path: "/activities",
  component: Activities,
}, {
  path: "/notebook",
  component: NoteBook,
}, {
  path: "/links",
  component: Links
}];

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
          <Suspense
            fallback={<Skeleton variant="rect" width="100%" height="calc(100vh - 132px)" />}
          >
            <Switch>
              <Route path="*/index.html">
                <Redirect to="." />
              </Route>
              {routes.map((item) => (
                <Route path={item.path} component={item.component} key={item.path} exact />
              ))}
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
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
