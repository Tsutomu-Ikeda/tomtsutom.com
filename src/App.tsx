import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://tomtsutom.com/">
        tomtsutom
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  { title: "@代々木", image: "yoyogi.jpg", link: "https://photos.app.goo.gl/YXf1cQ6irWqYRZJR9", key: 1 },
  { title: "@鎌倉", image: "kamakura.jpg", link: "https://photos.app.goo.gl/6xsnTbc4kRuMPZFW9", key: 2 },
  { title: "@自宅", image: "zitaku.jpg", link: "https://photos.app.goo.gl/YkUgEwruPhyYa4eU8", key: 3 }
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            tomtsutom.com
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
              Welcome to tomtsutom.com!
            </Typography>
            <Typography align="center" color="textSecondary" paragraph>
              tomtsutomの個人的なページ
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography variant="h6" color="textSecondary" paragraph>
            撮影した写真たち
          </Typography>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <ButtonBase
                    href={card.link}
                    target="_blank"
                    rel="noopener"
                  >
                    <CardContent className={classes.cardContent}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={card.image}
                        title={card.title}
                      />
                      <Typography component="div" variant="overline" align="right">
                        {card.title}
                      </Typography>
                    </CardContent>
                  </ButtonBase>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
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
