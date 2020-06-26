import React from 'react';
import { Helmet } from "react-helmet";

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 1),
  },
  links: {
    padding: theme.spacing(1, 0),
  },
  sentence: {
    'line-height': '0.9cm',
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <div>
      <Helmet
        title={'自己紹介 | tomtsutom.com'}
        meta={[
          { name: 'description', content: '自己紹介' },
          { name: 'twitter:card', content: 'summary' },
          { property: 'og:image', content: 'https://tomtsutom.com/images/kamakura.jpg' },
          { property: 'og:title', content: 'tomtsutom.com' },
          { property: 'og:description', content: '自己紹介' }
        ]}
      />

      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
            自己紹介
          </Typography>
        </Container>
      </div>

      <Container maxWidth="md">
        <Typography variant="h6" color="textSecondary" paragraph>
          基本情報
        </Typography>
        <Typography variant="body1" paragraph className={classes.sentence}>
          名前は、池田力です。力と書いてつとむと読みます。
          <Link href="https://crd.ndl.go.jp/reference/modules/d3ndlcrdentry/index.php?page=ref_view&id=1000089837" target="_blank" rel="noopener"> 嘉納治五郎の力必達という言葉</Link>
          が由来らしいです。広島生まれの神奈川育ちで、広島東洋カープが好きです。<br />
        </Typography>

        <Typography variant="h6" color="textSecondary" paragraph>
          所属している組織
        </Typography>
        <Typography variant="body1" paragraph className={classes.sentence}>
          上智大学理工学部情報理工学科の4年生で、<Link href="https://clipline.com/service/" target="_blank" rel="noopener">ClipLine株式会社</Link>で2年ほどインターンをしています。現在所属しているサークルは上智大学エレクトロニクスラボです。
        </Typography>

        <Typography variant="h6" color="textSecondary" paragraph>
          趣味
        </Typography>
        <Typography variant="body1" paragraph className={classes.sentence}>
          写真が好きです。散歩が好きです。鉄道旅行が好きです。音楽が好きです。動画編集が得意です。きれいなスライドが好きです。やきとんが好きです。
        </Typography>
      </Container>

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
