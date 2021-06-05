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
          <Link
            href="https://crd.ndl.go.jp/reference/modules/d3ndlcrdentry/index.php?page=ref_view&id=1000089837"
            target="_blank"
            rel="noopener"
          >
            嘉納治五郎の力必達という言葉
          </Link>
          が由来らしいです。広島生まれの神奈川育ちで、広島東洋カープが好きです。
          <br />
        </Typography>

        <Typography variant="h6">所属している組織</Typography>
        <Typography variant="body1" className={classes.sentence}>
          <Link
            href="https://jp.corp-sansan.com/"
            target="_blank"
            rel="noopener"
          >
            Sansan株式会社
          </Link>
          でサーバーサイドエンジニアとして働いています。
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
              トップへ戻る
            </Link>
          </Typography>
        </Container>
      </div>
    </div>
  );
}
