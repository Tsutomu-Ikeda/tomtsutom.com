import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
    leftIcon: {
      width: 24,
      minWidth: 24,
    },
  })
);

const contents = [
  {
    title: "自己紹介",
    text: "池田 力",
    link: "/profile",
  },
  {
    title: "リンク",
    text: "お問合せ先、各種SNS",
    subText: "Twitter, Instagram",
    link: "/links",
  },
];

export default function Sidebar() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {contents.map((item, index) => (
        <ListItem
          button
          component="a"
          href={item.link}
          key={index}
        >
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
                {item.subText && ` — ${item.subText}`}
              </React.Fragment>
            }
          />
          <ListItemIcon className={classes.leftIcon}>
            <KeyboardArrowRightIcon />
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
}
