import React from 'react';
import { Helmet } from "react-helmet";

import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 1),
  },
  cardGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
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
}));

const cards = [
  { title: "@代々木", image: "/images/yoyogi.jpg", link: "https://photos.app.goo.gl/YXf1cQ6irWqYRZJR9", key: 1 },
  { title: "@鎌倉", image: "/images/kamakura.jpg", link: "https://photos.app.goo.gl/6xsnTbc4kRuMPZFW9", key: 2 },
  { title: "@自宅", image: "/images/zitaku.jpg", link: "https://photos.app.goo.gl/YkUgEwruPhyYa4eU8", key: 3 },
];

const links = [
  { title: "自己紹介", image: "/images/yoyogi.jpg", link: "/hoge", key: 1 },
  { title: "おすすめの飲み屋", image: "/images/kamakura.jpg", link: "/izakaya", key: 2 },
  { title: "@", image: "/images/zitaku.jpg", link: "/", key: 3 },
];

export default function Top() {
  const classes = useStyles();

  return (
    <div>
      <Helmet
        title={'tomtsutom.com'}
        meta={[
          { name: 'description', content: 'tomtsutomの個人的なページです。' },
          { name: 'twitter:card', content: 'summary' },
          { property: 'og:image', content: 'https://tomtsutom.com/images/yoyogi.jpg' },
          { property: 'og:title', content: 'tomtsutom.com' },
          { property: 'og:description', content: 'tomtsutomの個人的なページ' }
        ]}
      />
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
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography variant="h6" color="textSecondary" paragraph>
          その他のページへのリンク
        </Typography>
        <Grid container spacing={4}>
          {links.map((link) => (
            <Grid item key={link.key} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <ButtonBase
                  href={link.link}
                >
                  <CardContent className={classes.cardContent}>
                    <Typography>
                      {link.title}
                    </Typography>
                  </CardContent>
                </ButtonBase>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
};
