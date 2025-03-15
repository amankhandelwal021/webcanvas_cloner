import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  
  useEffect(() => {
    console.log("Navigated to:", pathname); // Debugging line
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

export default ScrollToTop; 