import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import Meta from "../components/Meta";

const useStyles = makeStyles((theme) => ({
  links: {
    padding: theme.spacing(1, 0),
  },
  sentence: {
    lineHeight: "0.9cm",
    marginBottom: 24,
    color: "rgba(0, 0, 0, 0.7)",
  },
}));

export default function NoteBook() {
  const classes = useStyles();

  return (
    <div>
      <Meta title="雑記帳" />

      <Container maxWidth="md">
        <Typography variant="h6">主義主張</Typography>
        <Typography variant="body1" className={classes.sentence}>
          猫はかわいい。
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
