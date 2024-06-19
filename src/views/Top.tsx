import Container from "@material-ui/core/Container";

import Sidebar from "../components/Sidebar";
import Gallery from "../components/Gallery";
import Meta from "../components/Meta";
import photos from "../data/Photos";
import { useMediaQuery, useTheme } from "@material-ui/core";

export default function Top() {
  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <Meta
        title=""
        heading="Welcome to tomtsutom.com!"
        subHeading="tomtsutomの個人的なページ"
      />

      <div style={{ flexGrow: 1, display: "flex", flexDirection: isDownSm ? "column" : undefined }}>
        <div style={{ padding: "0 20px 10px 20px", width: "100%", flexGrow: isDownSm ? 0 : 1 }}>
          <Gallery heading="撮影した写真たち" items={photos} href="/photos" url="photos" />
        </div>
        <div style={{ width: isDownSm ? "100%" : "500px" }}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
