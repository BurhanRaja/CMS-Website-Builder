"use client";
import "../css/bootstrap.css";
import "../css/bootstrap.min.css";
// import "../css/owl.carousel.min.css";
// import "../css/owl.theme.default.css";
import "../css/progress-tracker.css";
import "../css/responsive.css";
import "../css/style.css";

// import { Head } from "next/document";
import parse from "html-react-parser";
import Header from "./Header";
import Footer from "./Footer";

const PageRender = ({ data }) => {
  if (data?.success) {
    return (
      <>
        {/* <Head>
        <title>{data?.data?.name}</title>
    </Head> */}
        <Header />
        {parse(data?.data?.htmlCode)}
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
