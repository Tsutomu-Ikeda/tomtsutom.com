import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Link from "@material-ui/core/Link";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";

import { useTheme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: 16,
  },
  title: {
    color: "#fff",
    textAlign: "center",
  },
  titleBar: {
    height: 42,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  gridTile: {
    borderRadius: 5,
  },
  svg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    background: "#888",
    borderRadius: 5,
  },
  arrowIcon: {
    fill: "#fff",
  },
  moreTile: {
    maxWidth: 50,
  },
}));

export default function Gallery(props: {
  href: string;
  items: {
    title: string;
    image: string;
  }[];
  heading?: string;
}) {
  const classes = useStyles();

  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isDownLg = useMediaQuery(theme.breakpoints.down("lg"));

  const RightArrow = () => (
    <div className={classes.svg}>
      <KeyboardArrowRight className={classes.arrowIcon} fontSize="large" />
    </div>
  );

  const gridListCols = () => {
    if (isDownSm) return 1.5;
    else if (isDownLg) return 2.5;
    else return 4.5;
  };

  return (
    <div>
      {props.heading ? (
        <Typography variant="h6" className={classes.heading}>
          <Link href={props.href} color="inherit">
            {props.heading}
          </Link>
        </Typography>
      ) : null}
      <GridList className={classes.gridList} cols={gridListCols()}>
        {props.items.map((tile, index) => (
          <GridListTile
            key={index}
            cols={1}
            classes={{ tile: classes.gridTile }}
          >
            <img src={tile.image} alt={tile.title} />
            <GridListTileBar
              subtitle={tile.title}
              classes={{
                root: classes.titleBar,
                subtitle: classes.title,
              }}
            />
          </GridListTile>
        ))}
        <GridListTile cols={0.2} className={classes.moreTile}>
          <Link href={props.href}>
            <RightArrow />
          </Link>
        </GridListTile>
      </GridList>
    </div>
  );
}
