import React from 'react';
import { Helmet } from "react-helmet";

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(6, 0),
  },
  links: {
    padding: theme.spacing(1, 0),
  },
}));

export default function NotFound() {
  const classes = useStyles();

  return (
    <div>
      <Helmet
        title={'404 Not Found | tomtsutom.com'}
        meta={[
          { name: 'description', content: 'お探しのページは見つかりませんでした。' },
          { name: 'twitter:card', content: 'summary' },
          { property: 'og:image', content: 'https://tomtsutom.com/images/yoyogi.jpg' },
          { property: 'og:title', content: '404 Not Found' },
          { property: 'og:description', content: 'お探しのページは見つかりませんでした。' }
        ]}
      />
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
            404 Not Found
        </Typography>
          <Typography align="center" color="textSecondary" paragraph>
            お探しのページは見つかりませんでした。
        </Typography>
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
      <div className={classes.links}>
        <Container maxWidth="sm">
          <Typography align="center" color="textSecondary" paragraph>
            ランダムに移動する
          </Typography>
        </Container>
      </div>
    </div>
  )
}
