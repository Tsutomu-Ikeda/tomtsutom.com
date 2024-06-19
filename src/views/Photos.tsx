import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import Meta from "../components/Meta";
import photos from "../data/Photos";

const useStyles = makeStyles((theme) => ({
  links: {
    padding: theme.spacing(1, 0),
  },
  sentence: {
    lineHeight: "0.9cm",
    marginBottom: 24,
    color: "rgba(0, 0, 0, 0.7)",
  },
}));

export default function Photos() {
  const classes = useStyles();

  return (
    <div>
      <Meta title="撮影した写真" />

      <div style={{ display: "flex", gap: "24px", flexDirection: "column", padding: "10px", maxWidth: "480px", margin: "auto" }}>
        {
          photos.map((photo, index) => (
            <div key={photo.id} id={photo.id} style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#fafafa",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}>
              <img
                src={photo.image}
                alt={photo.title}
                style={{ width: "100%" }}
              />
              <div style={{
                borderRadius: "5px",
                padding: "10px",
                fontSize: "0.9em",
              }}>
                {photo.description}
              </div>
              <div style={{
                display: "flex", justifyContent: "right",
                fontSize: "0.9em",
              }}>
                <span>
                  {photo.title}
                </span>
                &nbsp;-&nbsp;
                <span>
                  {photo.taken_at.getFullYear()}年{photo.taken_at.getMonth() + 1}月 撮影
                </span>
              </div>
            </div>
          ))
        }
      </div>

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
