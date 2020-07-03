import React, { useRef, useState, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Link from "@material-ui/core/Link";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Skeleton from "@material-ui/lab/Skeleton";
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
  divWrapper: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    height: "100%",
  },
  skeleton: {
    transform: "scale(1, 1)",
    width: "100%",
    height: "100%",
  },
  imgFullHeight: {
    display: "block",
    objectFit: "cover",
    maxHeight: "100%",
  },
  imgFullWidth: {
    display: "block",
    objectFit: "cover",
    maxWidth: "100%",
  },
}));

function useOnScreen(ref: React.RefObject<HTMLDivElement>, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let ignore = false;
    const curr = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (!ignore && curr) {
      observer.observe(curr);
    }
    return () => {
      ignore = true;
      if (curr) {
        observer.unobserve(curr);
      }
    };
  }, [rootMargin, ref]);

  return isIntersecting;
}

const ImageLoader = (props: { src: string; title: string }) => {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);
  const [className, setClassName] = useState(classes.imgFullHeight);
  const [img] = useState(new Image());
  const wrapperRef = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(wrapperRef, "-300px");

  const onLoad = () => {
    if (onScreen && props.src && !loaded) {
      img.onload = () => {
        setLoaded(true);
      };
      img.src = props.src;
    }
  };

  useEffect(onLoad, [onScreen]);
  useEffect(() => {
    const handleResize = () => {
      if (wrapperRef.current) {
        if (
          img.width * wrapperRef.current.offsetHeight >
          img.height * wrapperRef.current.offsetWidth
        ) {
          setClassName(classes.imgFullHeight);
        } else {
          setClassName(classes.imgFullWidth);
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [classes, img, loaded]);

  return (
    <div ref={wrapperRef} className={classes.divWrapper}>
      {loaded ? (
        <img src={props.src} alt={props.title} className={className} />
      ) : (
        <Skeleton component="div" className={classes.skeleton} />
      )}
    </div>
  );
};

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
            <ImageLoader src={tile.image} title={tile.title} />
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
