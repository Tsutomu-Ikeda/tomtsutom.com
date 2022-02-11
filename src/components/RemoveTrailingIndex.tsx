import { useLocation, useNavigate } from "react-router-dom";

const RemoveTrailingIndex = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname.match(/index\.html$/)) {
    setTimeout(
      () => navigate(location.pathname.replace(/index\.html$/, ''), { replace: true }),
    )
  }

  return null
};

export default RemoveTrailingIndex;
