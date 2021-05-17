import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, [pathname]); // everytime path name changes (switching pages) it will scroll to the top
  return null;
};

export default ScrollTop;
