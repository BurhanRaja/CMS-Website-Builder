"use client";
import "../css/bootstrap.css";
import "../css/bootstrap.min.css";
// import "../css/owl.carousel.min.css";
// import "../css/owl.theme.default.css";
import "../css/progress-tracker.css";
import "../css/responsive.css";
import "../css/style.css";

// import { Head } from "next/document";
import Header from "./Header";
import Footer from "./Footer";

const PageRender = ({ data }) => {
  console.log(data);
  if (data?.success) {
    return (
      <>
        <Header />
        <div
          dangerouslySetInnerHTML={{
            __html: data?.data?.htmlCode,
          }}
        ></div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <h1>404 Not Found</h1>
      </>
    );
  }
};

export default PageRender;
