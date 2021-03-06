import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from "@material-ui/core/Link";
import Map from '@material-ui/icons/Map';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import Typography from '@material-ui/core/Typography';

import Meta from "../components/Meta";
import dishes from "../data/Dishes";

const useStyles = makeStyles((theme) => ({
  gridWrapper: {
    flexGrow: 1,
    paddingBottom: 40,
    width: "80%",
  },
  links: {
    padding: theme.spacing(1, 0),
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

export default function Dishes() {
  const classes = useStyles();

  return (
    <div>
      <Meta
        title="美味しい料理たち"
        photoUrl="https://tomtsutom.com/images/pizza.jpg" />

      <Container maxWidth="md" className={classes.gridWrapper}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          {dishes.map((dish, index) => (
            <Grid item xs={12} sm={4}>
              <Card id={dish.id} >
                <CardHeader
                  title={dish.title}
                  subheader={dish.store && `${dish.store.name} ― ${dish.store.station}`}
                />
                <CardMedia
                  className={classes.media}
                  image={dish.image}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2">
                    {dish.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  {
                    dish.store?.menuLink && (
                      <Link href={dish.store.menuLink} target="_blank" rel="noopener" >
                        <IconButton aria-label="add to favorites">
                          <RestaurantMenuIcon />
                        </IconButton>
                      </Link>
                    )
                  }
                  {
                    dish.store?.mapLink && (
                      <Link href={dish.store?.mapLink} target="_blank" rel="noopener" >
                        <IconButton aria-label="map" >
                          <Map />
                        </IconButton>
                      </Link>
                    )
                  }
                </CardActions>
                <Collapse timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                      aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                      medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                      occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                      large plate and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                      stirring often until thickened and fragrant, about 10 minutes. Add
                      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with artichokes and
                      peppers, and cook without stirring, until most of the liquid is absorbed,
                      15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                      mussels, tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just tender, 5 to 7
                      minutes more. (Discard any mussels that don’t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className={classes.links}>
        <Container maxWidth="sm">
          <Typography align="center" color="textSecondary">
            <Link color="inherit" href="/">
              トップページへ戻る
            </Link>
          </Typography>
        </Container>
      </div>
    </div>
  );
}
