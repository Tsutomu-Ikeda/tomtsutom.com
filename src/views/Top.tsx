import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Sidebar from "../components/Sidebar";
import Gallery from "../components/Gallery";
import Meta from "../components/Meta";
import dishes from "../data/Dishes";
import photos from "../data/Photos";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(2),
  },
}));

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
            <Gallery heading="撮影した写真たち" items={photos} href="/photos" url="photos"/>
          </Container>
          <Container className={classes.cardGrid}>
            <Gallery heading="美味しい料理" items={dishes} href="/dishes" url="dishes"/>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
