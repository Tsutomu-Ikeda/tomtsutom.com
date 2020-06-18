import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Top from './views/Top';
import Hoge from './views/Hoge';
import NotFound from './views/NotFound';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        tomtsutom
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: '52px',
  },
  main: {
    minHeight: 'calc(100vh - 132px)',
    backgroundColor: theme.palette.background.paper,
  },
  footer: {
    padding: theme.spacing(2),
    height: '80px',
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          <Link color="inherit" href="/">
            <Typography variant="h6" color="inherit" noWrap>
              tomtsutom.com
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Top />
            </Route>
            <Route path="/hoge">
              <Hoge />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          <Link color="inherit" href="https://github.com/Tsutomu-Ikeda/tomtsutom.com" target="_blank" rel="noopener">
            GitHubでコードを公開しています
          </Link>
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment >
  );
}
