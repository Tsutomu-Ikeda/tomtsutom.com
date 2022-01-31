import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import Meta from "../components/Meta";

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

export default function Profile() {
  const classes = useStyles();

  return (
    <div>
      <Meta
        title="自己紹介"
        photoUrl="https://tomtsutom.com/images/kamakura.jpg"
      />
      <Container maxWidth="md">
        <Typography variant="h6">基本情報</Typography>
        <Typography variant="body1" className={classes.sentence}>
          名前は、池田力です。力と書いてつとむと読みます。
        </Typography>

        <Typography variant="h6">趣味</Typography>
        <Typography variant="body1" className={classes.sentence}>
          写真が好きです。散歩が好きです。鉄道旅行が好きです。音楽が好きです。動画編集が得意です。きれいなスライドが好きです。やきとんが好きです。
        </Typography>
      </Container>

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
