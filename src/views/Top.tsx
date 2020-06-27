import React from "react";
import { Helmet } from "react-helmet";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "../components/Sidebar";
import Gallery from "../components/Gallery";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 1),
  },
  cardGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(2),
  },
  heading: {
    marginBottom: "16px",
  },
}));

const photos = [
  {
    title: "代々木",
    image: "/images/yoyogi.jpg",
    link: "https://photos.app.goo.gl/YXf1cQ6irWqYRZJR9",
    key: 1,
  },
  {
    title: "鎌倉",
    image: "/images/kamakura.jpg",
    link: "https://photos.app.goo.gl/6xsnTbc4kRuMPZFW9",
    key: 2,
  },
  {
    title: "自宅",
    image: "/images/zitaku.jpg",
    link: "https://photos.app.goo.gl/YkUgEwruPhyYa4eU8",
    key: 3,
  },
];

export default function Top() {
  const classes = useStyles();

  return (
    <div>
      <Helmet
        title={"tomtsutom.com"}
        meta={[
          { name: "description", content: "tomtsutomの個人的なページです。" },
          { name: "twitter:card", content: "summary" },
          {
            property: "og:image",
            content: "https://tomtsutom.com/images/yoyogi.jpg",
          },
          { property: "og:title", content: "tomtsutom.com" },
          { property: "og:description", content: "tomtsutomの個人的なページ" },
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
            Welcome to tomtsutom.com!
          </Typography>
          <Typography align="center" color="textSecondary">
            tomtsutomの個人的なページ
          </Typography>
        </Container>
      </div>

      <Grid container direction="row-reverse">
        <Grid item xs={12} md={4}>
          <Container className={classes.cardGrid} maxWidth="md">
            <Sidebar />
          </Container>
        </Grid>
        <Grid item xs={12} md={8}>
          <Container className={classes.cardGrid} maxWidth="md">
            <Typography variant="h6" className={classes.heading}>
              撮影した写真たち
            </Typography>
            <Gallery items={photos} />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
