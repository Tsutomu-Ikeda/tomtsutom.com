import React, { Suspense } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Skeleton from "@material-ui/lab/Skeleton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import ScrollHandler from "./components/ScrollHandler";
import RemoveTrailingIndex from "./components/RemoveTrailingIndex";
import NotFound from "./views/NotFound";

const Links = React.lazy(() => import("./views/Links"));
const Photos = React.lazy(() => import("./views/Photos"));
const Profile = React.lazy(() => import("./views/Profile"));
const ShortLink = React.lazy(() => import("./views/ShortLink"));
const Top = React.lazy(() => import("./views/Top"));

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
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    padding: theme.spacing(2),
    height: 80,
  },
}));

const routes = [{
  path: "/",
  element: <Top />,
}, {
  path: "/photos",
  element: <Photos />,
}, {
  path: "/profile",
  element: <Profile />,
}, {
  path: "/link",
  element: <ShortLink />
}, {
  path: "/links",
  element: <Links />
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
          <ScrollHandler />
          <RemoveTrailingIndex />
          <Suspense
            fallback={<Skeleton variant="rect" width="100%" height="calc(100vh - 132px)" />}
          >
            <Routes>
              {routes.map((item) => (
                <Route path={item.path} element={item.element} key={item.path} />
              ))}
              <Route path="*" element={<NotFound />} ></Route>
            </Routes>
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
