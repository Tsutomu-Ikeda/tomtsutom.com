import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
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
  })
);

const contents = [
  {
    title: '自己紹介',
    text: '池田 力',
    subText: '上智大学理工学部情報理工学科4年',
    link: '/profile',
  },
  {
    title: '活動',
    text: 'やってきたこと',
    subText: 'そしてやっていきたいこと',
    link: '/activities',
  },
  {
    title: '雑記帳',
    text: '試行錯誤など',
    subText: 'いつか役に立つかもしれない',
    link: '/notebook'
  },
  {
    title: 'リンク',
    text: '各種SNS',
    subText: 'Twitter, Instagram, Facebook, GitHub',
    link: '/links'
  },
];

export default function Sidebar() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {contents.map((item) => (
        <ListItem alignItems="flex-start" button component="a" href={item.link}>
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
                {` — ${item.subText}`}
              </React.Fragment>
            }
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="comments">
              <ArrowForwardIosIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}
