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
import { forwardRef } from "react";

// let rightHeader = {
//   icon: {
//     disable: true,
//     icons: [
//       {
//         customClass: "",
//         link: "",
//         style: "",
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
    display: "flex",
  }));
  const TextEl = styled(Typography)(() => ({
    ...content?.text?.style,
  }));
  const IconsEl = styled("div")(() => ({
    ...content?.icon?.style,
    display: "flex",
  }));

  return (
    <Fragment>
      <RightTopHeaderEl className={content?.customClass}>
        {!content?.icon?.disable && (
          <IconsEl className={`${content?.icon?.customClass}`}>
            {content?.icon?.icons?.map((el) => {
              return (
                <Fragment key={el?.id}>
                  <Link
                    href={el?.link}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {el?.icon}
                  </Link>
                </Fragment>
              );
            })}
          </IconsEl>
        )}
        {!content?.text?.disable &&
          (content?.text?.link ? (
            <Link href={content?.text?.link}>
              <TextEl className={`${content?.text?.customClass}`}>
                {content?.text?.content}
              </TextEl>
            </Link>
          ) : (
            <TextEl className={`${content?.text?.customClass}`}>
              {content?.text?.content}
            </TextEl>
          ))}
      </RightTopHeaderEl>
    </Fragment>
  );
}

function LeftTopHeader({ content }) {
  const LeftTopHeaderEl = styled("div")(() => ({
    ...content?.style,
    display: "flex",
  }));
  const TextEl = styled("div")(() => ({
    ...content?.text?.style,
  }));
  const IconsEl = styled("div")(() => ({
    ...content?.icon?.style,
    display: "flex",
  }));

  return (
    <>
      <Fragment>
        <LeftTopHeaderEl className={content?.customClass}>
          {!content?.icon?.disable && (
            <IconsEl className={`${content?.icon?.customClass}`}>
              {content?.icon?.icons?.map((el) => {
                return (
                  <Fragment key={el?.id}>
                    <Link
                      href={el?.link}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      {el?.icon}
                    </Link>
                  </Fragment>
                );
              })}
            </IconsEl>
          )}
          {!content?.text?.disable &&
            (content?.text?.link ? (
              <Link href={content?.text?.link}>
                <TextEl className={`${content?.text?.customClass}`}>
                  {content?.text?.content}
                </TextEl>
              </Link>
            ) : (
              <TextEl className={`${content?.text?.customClass}`}>
                {content?.text?.content}
              </TextEl>
            ))}
        </LeftTopHeaderEl>
      </Fragment>
    </>
  );
}

const TopHeader = forwardRef(function TopHeader(
  { disabled, headerStyle, toolbarStyle, leftSideContent, rightSideContent },
  ref
) {
  const AppBar = styled(MuiAppbar)(() => ({
    ...headerStyle,
  }));

  const Toolbar = styled(MuiToolbar)(() => ({
    ...toolbarStyle,
  }));

  return (
    <Fragment>
      {!disabled && (
        <Box ref={ref}>
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
});

export default TopHeader;
