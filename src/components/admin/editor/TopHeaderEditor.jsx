"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputLabel,
  InputBase,
  SvgIcon,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import * as MuiIcon from "@mui/icons-material";
import TopHeader from "../ui/header/TopHeader";
import InstagramIcon from "@mui/icons-material/Instagram";
import SmallInput from "./ui/SmallInput";
import { Fragment, useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Modal from "./ui/Dialog";
import JustifyContent from "./ui/JustifyContent";
import AlignItems from "./ui/AlignItems";
import { socialIcons } from "@/utils/allIcons";
import { useColor, ColorPicker } from "react-color-palette";
import "react-color-palette/css";
import Margin from "./ui/Margin";
import Padding from "./ui/Padding";

const TopHeaderEditorEl = styled("div")(() => ({
  marginTop: "50px",
  padding: "20px",
  backgroundColor: "white",
}));

const LeftModalContent = ({ leftIconList, setLeftIconList }) => {
  const [leftIconObj, setLeftIconObj] = useState({});
  const [color, setColor] = useColor("black");
  const [link, setLink] = useState("");
  const [customClass, setCustomClass] = useState("");
  const [customCss, setCustomCss] = useState("");
  const [customFont, setCustomFont] = useState("100");

  const handleAddIcon = () => {
    let data = {
      customClass,
      style: { ...customCss },
      icon: leftIconObj.icon,
      color,
      fontSize: customFont,
      link,
    };
    let allIcons = [...leftIconList, data];
    setLeftIconList(allIcons);
  };

  return (
    <>
      <Typography variant='body1' marginBottom={"10px"} fontWeight={"bold"}>
        Social Icons
      </Typography>
      <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
        {socialIcons?.map((el) => {
          return (
            <Fragment key={el.id}>
              <Tooltip sx={{ marginRight: "4px" }} title={el.iconName}>
                <IconButton
                  sx={{
                    fontSize: "20px",
                    padding: "10px",
                    borderRadius: "4px",
                    backgroundColor: "#e2e2e2",
                    marginRight: "10px",
                  }}
                  onClick={() =>
                    setLeftIconObj({
                      iconId: el.id,
                      iconName: el.iconName,
                      icon: el.icon,
                    })
                  }
                >
                  <SvgIcon component={MuiIcon[el?.icon]}></SvgIcon>
                </IconButton>
              </Tooltip>
            </Fragment>
          );
        })}
      </Box>
      {leftIconObj.icon && (
        <>
          <Box textAlign={"center"} marginTop={"15px"}>
            <IconButton
              sx={{
                fontSize: "50px",
                padding: "5px",
                borderRadius: "4px",
                marginRight: "10px",
                color: color.hex,
              }}
            >
              <SvgIcon
                component={MuiIcon[leftIconObj.icon]}
                sx={{ fontSize: `${customFont}px` }}
              ></SvgIcon>
            </IconButton>
          </Box>
          <Box marginTop={"5px"}>
            <Grid container>
              <Grid item>
                <Box>
                  <InputLabel>Link</InputLabel>
                  <InputBase
                    type='text'
                    style={{
                      border: "1px solid gray",
                      padding: "5px",
                      width: "80%",
                      borderRadius: "5px",
                      height: "40px",
                    }}
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    labelName={"Link"}
                  />
                </Box>
                <Box marginTop={"12px"}>
                  <InputLabel>Custom Class</InputLabel>
                  <InputBase
                    type='text'
                    style={{
                      border: "1px solid gray",
                      padding: "5px",
                      width: "80%",
                      borderRadius: "5px",
                      height: "40px",
                    }}
                    value={customClass}
                    onChange={(e) => setCustomClass(e.target.value)}
                    labelName={"Custom Class"}
                  />
                </Box>
                <Box marginTop={"12px"}>
                  <InputLabel>Font Size</InputLabel>
                  <InputBase
                    type='text'
                    style={{
                      border: "1px solid gray",
                      padding: "5px",
                      width: "80%",
                      borderRadius: "5px",
                      height: "40px",
                    }}
                    value={customFont}
                    onChange={(e) => setCustomFont(e.target.value)}
                    labelName={"Custom Font Size"}
                    endAdornment={"px"}
                  />
                </Box>
                <Box marginTop={"12px"}>
                  <InputLabel>Custom CSS</InputLabel>
                  <Typography variant='caption'>
                    (Wrtie CSS directly)
                  </Typography>
                  <TextField
                    sx={{
                      width: "90%",
                    }}
                    hiddenLabel
                    id='outlined-multiline-static'
                    multiline
                    rows={5}
                    value={customCss}
                    onChange={(e) => setCustomCss(e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='body1'>Select Color</Typography>
                <ColorPicker
                  hideInput={["rgb", "hsv"]}
                  color={color}
                  onChange={setColor}
                />
              </Grid>
            </Grid>
            <Box display={"flex"} justifyContent={"end"} alignItems={"center"}>
              <Button
                variant='contained'
                sx={{ marginTop: "20px", width: "40%" }}
                onClick={handleAddIcon}
              >
                Add
              </Button>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

const TopHeaderEditor = () => {
  const topHeaderRef = useRef(null);

  const [leftJC, setLeftJC] = useState("start");
  const [leftAI, setLeftAI] = useState("start");
  const [leftIconList, setLeftIconList] = useState([]);

  const [mainMargin, setMainMargin] = useState([]);
  const [mainPadding, setMainPadding] = useState([]);

  const [dialogOpen, setDialogOpen] = useState(false);
  function handleDialogClose() {
    setDialogOpen(false);
  }
  function handleDialogOpen() {
    setDialogOpen(true);
  }

  let disabled = false;
  let headerStyle = {
    backgroundColor: "#a6c626",
    position: "static",
    marginTop: mainMargin[0],
    marginLeft: mainMargin[1],
    marginBottom: mainMargin[2],
    marginRight: mainMargin[3],
    paddingTop: mainPadding[0],
    paddingLeft: mainPadding[1],
    paddingBottom: mainPadding[2],
    paddingRight: mainPadding[3],
  };
  let toolbarStyle = {
    minHeight: "30px",
  };
  let rightSideContent = {
    text: {
      disable: false,
      content: "Hello",
      customClass: "toprightheader",
      style: {
        fontSize: "20px",
        textAlign: "end",
      },
    },
    icon: {
      disable: false,
      icons: [
        {
          id: "1",
          link: "",
          icon: <InstagramIcon className='' sx={{ color: "white" }} />,
        },
      ],
      style: {
        alignItems: "center",
        justifyContent: "start",
      },
    },
    style: {
      justifyContent: "end",
    },
  };
  let leftSideContent = {
    text: {
      disable: false,
      content: "Hello",
      customClass: "",
      style: {
        fontSize: "20px",
        textAlign: "start",
      },
    },
    icon: {
      disable: false,
      icons: leftIconList,
      customClass: "",
      style: {
        alignItems: "center",
        justifyContent: "center",
      },
    },
    style: {
      justifyContent: leftJC,
      alignItems: leftAI,
    },
  };

  return (
    <>
      <Box backgroundColor='white' padding={"10px"}>
        <TopHeader
          ref={topHeaderRef}
          disabled={disabled}
          headerStyle={headerStyle}
          leftSideContent={leftSideContent}
          rightSideContent={rightSideContent}
          toolbarStyle={toolbarStyle}
        />
      </Box>
      <TopHeaderEditorEl>
        <Typography variant='h5' fontWeight='bolder' marginBottom={"10px"}>
          Main Content
        </Typography>
        <Box marginBottom={"30px"}>
          <Grid container columnGap={10}>
            <Grid item>
              <Margin setMargin={(val) => setMainMargin(val)} />
            </Grid>
            <Grid item>
              <Padding setPadding={(val) => setMainPadding(val)} />
            </Grid>
          </Grid>
        </Box>
        <Grid container>
          <Grid item xs={6} borderRight={"1px solid black"}>
            <Typography
              variant='h5'
              fontWeight='bolder'
              marginTop='10px'
              marginBottom='20px'
            >
              Left Side Content
            </Typography>
            <Box>
              <Box marginBottom={"20px"}>
                <Grid container>
                  <Grid item xs={4}>
                    <JustifyContent
                      name={leftJC}
                      setName={(val) => setLeftJC(val)}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <AlignItems
                      name={leftAI}
                      setName={(val) => setLeftAI(val)}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Typography variant='h6' fontWeight='bold' marginBottom='8px'>
                Icons
              </Typography>
              {/* AddIcon */}
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  padding: "10px 10px",
                  borderRadius: "7px",
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                {leftIconList?.map((el) => {
                  return (
                    <Grid item key={el?.icon}>
                      <SvgIcon
                        componen={MuiIcon[el?.icon]}
                        fontSize={el?.font}
                        htmlColor={el?.color}
                      ></SvgIcon>
                    </Grid>
                  );
                })}
                <Grid item>
                  <IconButton onClick={() => handleDialogOpen()}>
                    <AddIcon htmlColor='rgb(79 79 79 / 87%)' />
                  </IconButton>
                </Grid>
              </Grid>
              <Modal
                dialogOpen={dialogOpen}
                handleClose={() => handleDialogClose()}
                content={
                  <LeftModalContent
                    leftIconList={leftIconList}
                    setLeftIconList={(val) => setLeftIconList(val)}
                  />
                }
              />
              {/* AddIcon */}
            </Box>
            <h3>Text</h3>
          </Grid>
          <Grid item xs={6} paddingLeft={"10px"}>
            <h2>Right Side Content</h2>
          </Grid>
        </Grid>
      </TopHeaderEditorEl>
    </>
  );
};

export default TopHeaderEditor;
