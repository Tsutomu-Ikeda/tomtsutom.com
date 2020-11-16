import React from "react";

import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import AssessmentIcon from "@material-ui/icons/Assessment";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

import Meta from "../components/Meta";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  links: {
    padding: theme.spacing(1, 0),
  },
}));

const links = [
  {
    title: "Twitter",
    text: "@tsutomu_ikeda",
    icon: "twitter",
    link: "/l/twitter",
  },
  {
    title: "Instagram",
    text: "@tomtsutom",
    icon: "instagram",
    link: "/l/instagram",
  },
  {
    title: "GitHub",
    text: "@Tsutomu-Ikeda",
    icon: "github",
    link: "/l/github",
  },
  {
    title: "Facebook",
    icon: "facebook",
    link: "/l/facebook",
  },
];

const getIcon = (name: string | undefined) => {
  switch (name) {
    case "twitter":
      return <TwitterIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "github":
      return <GitHubIcon />;
    case "facebook":
      return <FacebookIcon />;
  }
  return <TwitterIcon />;
};

export default function Links() {
  const classes = useStyles();

  return (
    <div>
      <Meta title="リンク一覧" />
      <Container maxWidth="sm">
        <Typography variant="h6">お問合せ先</Typography>
        <List className={classes.root}>
          <ListItem
            alignItems="flex-start"
            button
            component="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSe6KEKuzLwCPv5sOTl6tW2-e7MgkEcLuxis42hUeuRo-Y55LA/viewform?usp=sf_link"
            target="_blank"
            rel="noopener"
          >
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText
              primary="Google Forms"
              secondary={
                <React.Fragment>
                  内容確認後、こちらからメールで返信いたします。
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Container>
      <Container maxWidth="sm">
        <Typography variant="h6">各種SNS</Typography>
        <List className={classes.root}>
          {links.map((item, index) => (
            <ListItem
              alignItems="flex-start"
              button
              component="a"
              href={item.link}
              target="_blank"
              rel="noopener"
              key={index}
            >
              <ListItemIcon>{getIcon(item.icon)}</ListItemIcon>
              <ListItemText
                primary={item.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {item.text}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>
      </Container>
      <div className={classes.links}>
        <Container maxWidth="sm">
          <Typography align="center" color="textSecondary">
            <Link color="inherit" href="/">
              トップへ戻る
            </Link>
          </Typography>
        </Container>
      </div>
    </div>
  );
}
