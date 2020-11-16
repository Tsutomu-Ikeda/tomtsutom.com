import React from "react";

import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { useInterval } from 'beautiful-react-hooks';

import Meta from "../components/Meta";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
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

export default function ShortLink() {
  const classes = useStyles();
  const searchParams = new URLSearchParams(window.location.search);
  const linkId = searchParams.get('id');

  const [, clearInterval] = useInterval(async () => {
    const resp = await fetch(`/l/${linkId}?xhr=true`, { redirect: "manual" });
    if (resp.status === 200) {
      window.location.href = (await resp.json()).location;
      clearInterval();
      return;
    }
  }, 10000);

  return (
    <div>
      <Meta title="非公開リンク" />
      <Container maxWidth="sm">
        <Typography variant="body1" align="center" className={classes.sentence}>
          管理者が承認するまでこのままお待ち下さい。
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
