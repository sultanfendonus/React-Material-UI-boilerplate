import { useEffect } from "react";

import getRouter from "utils/getRouter";

const ScrollReset = (props) => {
  const router = getRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.location.pathname]);

  return null;
};

export default ScrollReset;
