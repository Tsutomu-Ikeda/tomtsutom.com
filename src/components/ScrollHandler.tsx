import { useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const ScrollHandler = ({ location } : { location: { hash: string; }}) => {
  useEffect(() => {
    let count = 0;
    const scroll = setInterval(() => {
      const element = document.getElementById(location.hash.replace(/^#/, ""));
      const headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
      console.log(headerHeight);
      if (element) {
        window.scrollTo({
          behavior: "smooth",
          top: element.offsetTop - headerHeight - 20
        });
        clearInterval(scroll);
      } else if (count > 3) {
        clearInterval(scroll)
      }
      console.log(count);
      count += 1;
    }, 100);
  }, [location]);

  return null;
};

ScrollHandler.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string
  }).isRequired
};

export default withRouter(ScrollHandler as any);
