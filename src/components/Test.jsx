"use client";
import "../css/bootstrap.css";
import "../css/bootstrap.min.css";
// import "../css/owl.carousel.min.css";
// import "../css/owl.theme.default.css";
import "../css/progress-tracker.css";
import "../css/responsive.css";
import "../css/style.css";
import parse from "html-react-parser";

const Test = () => {
  let data = localStorage.getItem("previewHTML");

  if (data) {
    return <>{parse(data)}</>;
  }
};

export default Test;
