import React from 'react';
import { Helmet } from "react-helmet";

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  links: {
    padding: theme.spacing(1, 0),
  },
}));

export default function Hoge() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.heroContent}>
        <Helmet
          title={'Hogeページ | tomtsutom.com'}
          meta={[
            { name: 'description', content: 'Hogeページです。' },
            { name: 'twitter:card', content: 'summary' },
            { property: 'og:image', content: 'https://tomtsutom.com/images/kamakura.jpg' },
            { property: 'og:title', content: 'Hoge' },
            { property: 'og:description', content: 'Hogeページです' }
          ]}
        />
        <Container maxWidth="sm">
          <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
            Hoge hoge fuga!
        </Typography>
          <Card>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="240"
              image="/images/kamakura.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                これは鎌倉で撮影した写真です。Hoge hogehoge fugafuga fuga.
          </Typography>
            </CardContent>
          </Card>
        </Container>
      </div>

      <div className={classes.links}>
        <Container maxWidth="sm">
          <Typography align="center" color="textSecondary" paragraph>
            <Link color="inherit" href="/">
              トップへ戻る
            </Link>
          </Typography>
        </Container>
      </div>
    </div>
  )
}
