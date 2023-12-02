"use client";
import { Fragment, useEffect, useRef } from "react";

const TopHeader = ({ disabled, height, padding, margin, display }) => {
  const testRef = useRef(null);

  useEffect(() => {
    if (testRef.current) {
      console.log(testRef.current);
    }
  }, [testRef.current]);

  return (
    <Fragment>
      <div ref={testRef}>
        
      </div>
    </Fragment>
  );
};

export default TopHeader;
