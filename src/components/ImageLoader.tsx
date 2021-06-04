import React, { useRef, useState, useEffect } from "react";

import Skeleton from "@material-ui/lab/Skeleton";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  imgOriginal: {
    display: "block",
  },
  imgFullFill: {
    display: "block",
    objectFit: "cover",
    minHeight: "100%",
    minWidth: "100%",
  },
}));

function useOnScreen(ref: React.RefObject<HTMLDivElement>, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let ignore = false;
    const curr = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
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

export default function ImageLoader (props: { src: string; title: string; type: "fullfill" | "original" | undefined }) {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);
  const [img] = useState(new Image());
  const wrapperRef = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(wrapperRef, "0px");

  const onLoad = () => {
    if (onScreen && props.src && !loaded) {
      img.onload = () => {
        setLoaded(true);
      };
      img.src = props.src;
    }
  };

  const imgStyle = (() => {
    if (props.type === "original") {
      return classes.imgOriginal;
    } else {
      return classes.imgFullFill;
    }
  })();

  useEffect(onLoad, [onScreen, img, loaded, props.src]);

  return (
    <div ref={wrapperRef} className={classes.divWrapper}>
      {loaded ? (
        <img src={props.src} alt={props.title} className={imgStyle}/>
      ) : (
        <Skeleton component="div" className={classes.skeleton} />
      )}
    </div>
  );
};
