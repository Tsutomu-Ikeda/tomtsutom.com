import React from "react";
import { Helmet } from "react-helmet";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 1),
  },
  links: {
    padding: theme.spacing(1, 0),
  },
  sentence: {
    lineHeight: "0.9cm",
    marginBottom: 24,
    color: "rgba(0, 0, 0, 0.7)",
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <div>
      <Helmet
        title={"活動 | tomtsutom.com"}
        meta={[
          { name: "description", content: "活動" },
          { name: "twitter:card", content: "summary" },
          {
            property: "og:image",
            content: "https://tomtsutom.com/images/kamakura.jpg",
          },
          { property: "og:title", content: "tomtsutom.com" },
          { property: "og:description", content: "活動" },
        ]}
      />

      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h3"
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            活動
          </Typography>
          <Typography align="center" color="textSecondary">
            現在、未来、過去の順番で並べています。
          </Typography>
        </Container>
      </div>

      <Container maxWidth="md">
        <Typography variant="h6">やっていること</Typography>
        <Typography variant="body1" className={classes.sentence}>
          筋トレ、きれいなサイトを作ること
        </Typography>
        <Typography variant="h6">やりたいこと</Typography>
        <Typography variant="body1" className={classes.sentence}>
          オープンソース活動
        </Typography>
        <Typography variant="h6">スキル</Typography>
        <Typography variant="body1" className={classes.sentence}>
          大学1年のころは、Pythonをやっていました。インターン先でRuby on
          Railsを色々いじる中でWeb
          APIの仕組みを理解し、VueでSPAとはなんぞやを覚え、このサイトはReact +
          Typescriptで構築しています。
        </Typography>
      </Container>

      <div className={classes.links}>
        <Container maxWidth="sm">
          <Typography align="center" color="textSecondary">
            <Link color="inherit" href="/">
              トップへ戻る
            </Link>
          </Typography>
        </Container>
      </div>
    </div>
  );
}
