import useMediaQuery from "@material-ui/core/useMediaQuery";

import Link from "@material-ui/core/Link";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";

import { useTheme, makeStyles } from "@material-ui/core/styles";

import ImageLoader from "./ImageLoader";
import { useEffect, useState } from "react";

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
    overflowY: "auto",
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
    id: string;
    taken_at: Date
  }[];
  heading?: string;
  url?: string;
}) {
  const classes = useStyles();

  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isDownLg = useMediaQuery(theme.breakpoints.down("lg"));

  const [deviceHeight, setDeviceHeight] = useState(window.screen.height);

  useEffect(() => {
    const handleResize = () => {
      setDeviceHeight(window.screen.height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const RightArrow = () => (
    <div className={classes.svg}>
      <KeyboardArrowRight className={classes.arrowIcon} fontSize="large" />
    </div>
  );

  const gridListCols = () => {
    if (isDownSm) return 1.5;
    else if (isDownLg) return 2;
    else return 4;
  };

  return (
    <div style={{
      flexDirection: "column",
      display: "flex",
      height: "100%",
    }}>
      {props.heading ? (
        <Typography variant="h6" className={classes.heading}>
          <Link href={props.href} color="inherit">
            {props.heading}
          </Link>
        </Typography>
      ) : null}
      <div style={{
        height: isDownSm ? undefined : 400,
        flexGrow: isDownSm ? undefined : 1,
        overflowY: "auto",
      }}>
        <GridList className={classes.gridList} cols={gridListCols()}
          cellHeight={isDownSm ? deviceHeight - 498 : 200}
          style={{
            flexWrap: isDownSm ? "nowrap" : undefined,
          }}>
          {props.items.map((item, index) => {
            const title = `${item.title} - ${item.taken_at.getFullYear()}年${item.taken_at.getMonth() + 1}月撮影`

            return (
              <GridListTile
                key={index}
                cols={1}
                classes={{ tile: classes.gridTile }}
              >
                {props.url ? (
                  <Link href={`${props.url}#${item.id}`}>
                    <ImageLoader src={item.image} title={title} type="fullfill" />
                  </Link>
                ) : (
                  <ImageLoader src={item.image} title={title} type="fullfill" />
                )}
                <GridListTileBar
                  subtitle={title}
                  classes={{
                    root: classes.titleBar,
                    subtitle: classes.title,
                  }}
                />
              </GridListTile>
            )
          })}
          <GridListTile cols={0.2} className={classes.moreTile}>
            <Link href={props.href}>
              <RightArrow />
            </Link>
          </GridListTile>
        </GridList>
      </div>
    </div>
  );
}
