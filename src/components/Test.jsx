"use client";
import "../css/bootstrap.css";
import "../css/bootstrap.min.css";
// import "../css/owl.carousel.min.css";
// import "../css/owl.theme.default.css";
import "../css/progress-tracker.css";
import "../css/responsive.css";
import "../css/style.css";
import "../app/globals.css";

const Test = () => {
  let data = localStorage.getItem("previewHTML");

  if (data) {
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: data }}></div>
      </>
    );
  }
};

export default Test;
