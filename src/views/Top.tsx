import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Sidebar from "../components/Sidebar";
import Gallery from "../components/Gallery";
import Title from "../components/Title";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(2),
  },
  heading: {
    marginBottom: 16,
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

const dishes = [
  {
    title: "横浜のくじら",
    image: "/images/whale.jpg",
    key: 1,
  },
  {
    title: "代々木の餃子",
    image: "/images/gyoza.jpg",
    key: 2,
  },
  {
    title: "田町の肉めし",
    image: "/images/nikumeshi.jpg",
    key: 3,
  },
  {
    title: "市ヶ谷のピザ",
    image: "/images/pizza.jpg",
    key: 4,
  },
  {
    title: "荻窪のいわしコロッケ",
    image: "/images/iwakoro.jpg",
    key: 5,
  },
  {
    title: "恵比寿のごぼ天うどん",
    image: "/images/goboten.jpg",
    key: 6,
  },
];

export default function Top() {
  const classes = useStyles();

  return (
    <div>
      <Title
        title=""
        heading="Welcome to tomtsutom.com!"
        subHeading="tomtsutomの個人的なページ"
      />

      <Grid container direction="row-reverse">
        <Grid item xs={12} sm={5} md={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={7} md={8}>
          <Container className={classes.cardGrid}>
            <Typography variant="h6" className={classes.heading}>
              撮影した写真たち
            </Typography>
            <Gallery items={photos} />
          </Container>
          <Container className={classes.cardGrid}>
            <Typography variant="h6" className={classes.heading}>
              美味しかった料理
            </Typography>
            <Gallery items={dishes} />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
