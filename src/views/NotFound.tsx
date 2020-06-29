import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import Title from "../components/Title";

const useStyles = makeStyles((theme) => ({
  links: {
    padding: theme.spacing(1, 0),
  },
}));

export default function NotFound() {
  const classes = useStyles();

  return (
    <div>
      <Title
        photoUrl="https://tomtsutom.com/images/yoyogi.jpg"
        title="404 Not Found"
        subHeading="お探しのページは見つかりませんでした。"
      />
      <div className={classes.links}>
        <Container maxWidth="sm">
          <Typography align="center" color="textSecondary">
            <Link color="inherit" href="/">
              トップへ戻る
            </Link>
          </Typography>
        </Container>
      </div>
      <div className={classes.links}>
        <Container maxWidth="sm">
          <Typography align="center" color="textSecondary">
            ランダムに移動する
          </Typography>
        </Container>
      </div>
    </div>
  );
}
