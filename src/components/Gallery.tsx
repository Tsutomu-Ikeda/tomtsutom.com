import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";

import { useTheme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#fff",
    textAlign: "center",
  },
  titleBar: {
    height: "42px",
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
}));

export default function Gallery(props: {
  items: {
    title: string;
    image: string;
    key: number;
  }[];
}) {
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const gridListCols = () => (matches ? 2.5 : 1.5);

  return (
    <GridList className={classes.gridList} cols={gridListCols()}>
      {props.items.map((tile) => (
        <GridListTile key={tile.title}>
          <img src={tile.image} alt={tile.title} />
          <GridListTileBar
            subtitle={tile.title}
            classes={{
              root: classes.titleBar,
              subtitle: classes.title,
            }}
            actionIcon={
              <IconButton aria-label={`star ${tile.title}`}></IconButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
  );
}
