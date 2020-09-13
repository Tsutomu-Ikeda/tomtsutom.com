import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Sidebar from "../components/Sidebar";
import Gallery from "../components/Gallery";
import Meta from "../components/Meta";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(2),
  },
}));

const photos = [
  {
    title: "代々木",
    image: "/images/yoyogi.jpg",
    link: "https://photos.app.goo.gl/YXf1cQ6irWqYRZJR9",
  },
  {
    title: "鎌倉",
    image: "/images/kamakura.jpg",
    link: "https://photos.app.goo.gl/6xsnTbc4kRuMPZFW9",
  },
  {
    title: "自宅",
    image: "/images/zitaku.jpg",
    link: "https://photos.app.goo.gl/YkUgEwruPhyYa4eU8",
  },
];

const dishes = [
  {
    title: "横浜のくじら",
    image: "/images/whale.jpg",
  },
  {
    title: "代々木の餃子",
    image: "/images/gyoza.jpg",
  },
  {
    title: "田町の肉めし",
    image: "/images/nikumeshi.jpg",
  },
  {
    title: "市ヶ谷のピザ",
    image: "/images/pizza.jpg",
  },
  {
    title: "荻窪のいわしコロッケ",
    image: "/images/iwakoro.jpg",
  },
  {
    title: "恵比寿のごぼ天うどん",
    image: "/images/goboten.jpg",
  },
];

export default function Top() {
  const classes = useStyles();

  return (
    <div>
      <Meta
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
            <Gallery heading="撮影した写真たち" items={photos} href="/photos" />
          </Container>
          <Container className={classes.cardGrid}>
            <Gallery heading="美味しい料理" items={dishes} href="/dishes" />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
