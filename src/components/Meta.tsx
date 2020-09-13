import React from "react";
import { Helmet } from "react-helmet-async";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 1),
  },
}));

const getPageTitle = (props: { title: string }) =>
  `${props.title && props.title + " | "}tomtsutom.com`;

export default function Meta(props: {
  title: string;
  heading?: string;
  subHeading?: string;
  statusCode?: string;
  photoUrl?: string;
}) {
  const classes = useStyles();

  return (
    <div>
      {props.subHeading ? (
        <Helmet
          title={getPageTitle(props)}
          meta={[
            { name: "prerender-status-code", content: props.statusCode || "200" },
            { name: "description", content: props.subHeading },
            { name: "twitter:card", content: "summary" },
            {
              property: "og:image",
              content:
                props.photoUrl || "https://tomtsutom.com/images/kamakura.jpg",
            },
            { property: "og:title", content: getPageTitle(props) },
            { property: "og:description", content: props.subHeading },
          ]}
        />
      ) : (
        <Helmet
          title={getPageTitle(props)}
          meta={[
            { name: "prerender-status-code", content: props.statusCode || "200" },
            { name: "description", content: props.title || "tomtsutom.com" },
            { name: "twitter:card", content: "summary" },
            {
              property: "og:image",
              content:
                props.photoUrl || "https://tomtsutom.com/images/kamakura.jpg",
            },
            { property: "og:title", content: "tomtsutom.com" },
            { property: "og:description", content: props.title },
          ]}
        />
      )}

      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h3"
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {props.heading || props.title || "tomtsutom.com"}
          </Typography>
          {props.subHeading && (
            <Typography align="center" color="textSecondary">
              {props.subHeading}
            </Typography>
          )}
        </Container>
      </div>
    </div>
  );
}
