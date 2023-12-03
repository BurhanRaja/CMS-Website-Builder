"use client";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
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

const TopHeaderEditorEl = styled("div")(() => ({
  marginTop: "100px",
  borderTop: "2px solid black",
  padding: "10px",
}));

const LeftModalContent = ({ leftIconObj, setLeftIconObj }) => {
  const linkRef = useRef(null);

  const handleAddIcon = () => {};
  const [color, setColor] = useColor("black");

  return (
    <>
      <Typography variant="body1" marginBottom={"10px"} fontWeight={"bold"}>
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
                  {el.icon}
                </IconButton>
              </Tooltip>
            </Fragment>
          );
        })}
      </Box>
      {leftIconObj.icon && (
        <>
          <Typography
            variant="body1"
            marginTop={"20px"}
            marginBottom={"5px"}
            color={"black"}
          >
            Chosen Icon
          </Typography>
          <IconButton
            sx={{
              fontSize: "50px",
              padding: "5px",
              borderRadius: "4px",
              marginRight: "10px",
              color: color.hex,
            }}
          >
            {leftIconObj.icon}
          </IconButton>
          <Box marginTop={"5px"}>
            <Grid container>
              <Grid item>
                <SmallInput
                  type="text"
                  style={{
                    border: "1px solid gray",
                    padding: "5px",
                    width: "80%",
                  }}
                  inputRef={linkRef}
                  labelName={"Link"}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">Select Color</Typography>
                <ColorPicker
                  hideInput={["rgb", "hsv"]}
                  color={color}
                  onChange={setColor}
                />
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

const TopHeaderEditor = () => {
  const inpRef = useRef(null);
  const topHeaderRef = useRef(null);

  const [leftJC, setLeftJC] = useState("start");
  const [leftAI, setLeftAI] = useState("start");
  const [leftIconObj, setLeftIconObj] = useState({});

  const [dialogOpen, setDialogOpen] = useState(false);
  function handleDialogClose() {
    setDialogOpen(false);
  }
  function handleDialogOpen() {
    setDialogOpen(true);
  }

  return (
    <>
      <TopHeader
        ref={topHeaderRef}
        disabled={false}
        headerStyle={{
          backgroundColor: "#a6c626",
          padding: "5px 10px",
          position: "static",
        }}
        toolbarStyle={{
          minHeight: "30px",
        }}
        rightSideContent={{
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
                icon: <InstagramIcon className="" sx={{ color: "white" }} />,
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
        }}
        leftSideContent={{
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
            icons: [
              {
                id: "1",
                link: "",
                icon: <InstagramIcon className="" sx={{ color: "white" }} />,
              },
            ],
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
        }}
      />

      <TopHeaderEditorEl>
        <Grid container>
          <Grid item xs={5}>
            <Typography
              variant="h5"
              fontWeight="bolder"
              marginTop="30px"
              marginBottom="20px"
            >
              Left Side Content
            </Typography>
            <Box>
              <Box marginBottom={"20px"}>
                <JustifyContent
                  name={leftJC}
                  setName={(val) => setLeftJC(val)}
                />
                <AlignItems name={leftAI} setName={(val) => setLeftAI(val)} />
              </Box>
              <Typography variant="h6" fontWeight="bold" marginBottom="8px">
                Icons
              </Typography>
              {/* AddIcon */}
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  padding: "10px 10px",
                  border: "1px solid #B6BBC4",
                  borderRadius: "7px",
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#ebebeb",
                }}
              >
                <IconButton onClick={() => handleDialogOpen()}>
                  <AddIcon htmlColor="rgb(79 79 79 / 87%)" />
                </IconButton>
                <Modal
                  dialogOpen={dialogOpen}
                  handleClose={() => handleDialogClose()}
                  content={
                    <LeftModalContent
                      leftIconObj={leftIconObj}
                      setLeftIconObj={(val) => setLeftIconObj(val)}
                    />
                  }
                />
              </Grid>
              {/* AddIcon */}
            </Box>
            <h3>Text</h3>
          </Grid>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ marginRight: "10px", borderColor: "black" }}
          />
          <Grid item xs={6}>
            <h2>Right Side Content</h2>
          </Grid>
        </Grid>
        <SmallInput
          style={{ border: "1px solid gray", padding: "5px", width: "65px" }}
          type="text"
          inputRef={inpRef}
          adormentText={"px"}
        />
      </TopHeaderEditorEl>
    </>
  );
};

export default TopHeaderEditor;
