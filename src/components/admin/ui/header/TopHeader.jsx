"use client";
import {
  AppBar as MuiAppbar,
  Box,
  Toolbar as MuiToolbar,
  Grid,
  Typography,
} from "@mui/material";
import { Fragment, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Link from "next/link";

// let rightHeader = {
//   icon: {
//     disable: true,
//     icons: [
//       {
//         customClass: "",
//         link: "",
//         style: "",
//         displayIcon: () => {}
//       },
//     ],
//     customClass: "",
//     style: {},
//   },
//   text: {
//     disable: false,
//     content: string,
//     customClass: string,
//     style: {},
//   },
//   style: {},
//   customClass: "",
// };

function RightTopHeader({ content }) {
  const RightTopHeaderEl = styled("div")(() => ({
    ...content?.style,
  }));
  const TextEl = styled(Typography)(() => ({
    ...content?.text?.style,
  }));
  const IconsEl = styled("div")(() => ({
    ...content?.text?.style,
  }));

  return (
    <Fragment>
      <RightTopHeaderEl className={content?.customClass}>
        {!content?.icon?.disable && (
          <IconsEl className={`${content?.icon?.customClass}`}>
            {content?.icon?.icons?.map((el) => {
              return (
                <Fragment key={el?.id}>
                  <Link href={el?.link}>{el?.icon}</Link>
                </Fragment>
              );
            })}
          </IconsEl>
        )}
        {!content?.text?.disable && (
          <TextEl className={`${content?.text?.customClass}`}>
            {content?.text?.content}
          </TextEl>
        )}
      </RightTopHeaderEl>
    </Fragment>
  );
}

function LeftTopHeader({ content }) {
  const LeftTopHeaderEl = styled("div")(() => ({
    ...content?.style,
  }));
  const TextEl = styled("div")(() => ({
    ...content?.text?.style,
  }));
  const IconsEl = styled("div")(() => ({
    ...content?.text?.style,
  }));

  return (
    <>
      <Fragment>
        <LeftTopHeaderEl className={content?.customClass}>
          {!content?.icon?.disable && (
            <IconsEl className={`${content?.icon?.customClass}`}>
              {content?.icon?.icons?.map((el) => {
                const icon = el?.displayIcon(el?.customClass, el?.style);
                return (
                  <Fragment key={el?.id}>
                    <Link href={el?.link}>{icon}</Link>
                  </Fragment>
                );
              })}
            </IconsEl>
          )}
          {!content?.text?.disabled && (
            <TextEl className={`${content?.text?.customClass}`}>
              {content?.content}
            </TextEl>
          )}
        </LeftTopHeaderEl>
      </Fragment>
    </>
  );
}

const TopHeader = ({
  disabled,
  headerStyle,
  toolbarStyle,
  leftSideContent,
  rightSideContent,
}) => {
  const testRef = useRef(null);

  useEffect(() => {
    if (testRef.current) {
      console.log(testRef.current);
    }
  }, [testRef.current]);

  const AppBar = styled(MuiAppbar)(() => ({
    ...headerStyle,
  }));

  const Toolbar = styled(MuiToolbar)(() => ({
    ...toolbarStyle,
  }));

  return (
    <Fragment>
      {!disabled && (
        <Box ref={testRef}>
          <AppBar>
            <Toolbar variant="dense">
              <Grid
                container
                direction="row"
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid item xs={6}>
                  <LeftTopHeader content={leftSideContent} />
                </Grid>
                <Grid item xs={6}>
                  <RightTopHeader content={rightSideContent} />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </Fragment>
  );
};

export default TopHeader;
