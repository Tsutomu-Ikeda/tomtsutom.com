import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
  const location = useLocation();
  let count = 0;
  const scroll = setInterval(() => {
    const element = document.getElementById(location.hash.replace(/^#/, ""));
    if (document.getElementsByTagName("header")[0] === undefined) {
      return
    }
    const headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop - headerHeight - 20
      });
      clearInterval(scroll);
    } else if (count > 3) {
      clearInterval(scroll)
    }
    count += 1;
  }, 100);
  return null;
};

export default ScrollHandler;
