"use client";

import {
  Box,
  IconButton,
  Grid,
  Select,
  InputLabel,
  MenuItem,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import { Fragment, useContext, useEffect, useState } from "react";
import { ModalContext } from "@/context/context";
import { v4 as uuid } from "uuid";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import CloseIcon from "@mui/icons-material/Close";
import RowModal from "@/components/modals/RowModal";
import AddEndpoint from "./ui/AddEndpoint";
import AppSwitch from "./ui/AppSwitch";
import Link from "next/link";

const Row = ({ children }) => {
  return (
    <>
      <Box position={"relative"} marginBottom={"15px"}>
        {children}
      </Box>
    </>
  );
};

const Col = ({ colId, index, rowIndex, content }) => {
  const { onOpen } = useContext(ModalContext);
  const [hoverParent, setHoverParent] = useState(false);

  return (
    <>
      <Box
        padding={"20px"}
        backgroundColor={"white"}
        border={"1px solid grey"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"7px"}
        onMouseOver={() => setHoverParent(true)}
        onMouseLeave={() => setHoverParent(false)}
      >
        {!content ? (
          <IconButton
            onClick={() => {
              onOpen(
                {
                  colId,
                  index,
                  rowIndex,
                  content,
                },
                "addContent"
              );
            }}
          >
            <AddBoxIcon sx={{ fontSize: "40px", color: "#9f9f9f" }} />
          </IconButton>
        ) : (
          <Box position={"relative"}>
            {hoverParent && (
              <Box
                display={"flex"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                position={"absolute"}
                sx={{
                  top: "0",
                  left: "0",
                  backgroundColor: "black",
                  padding: "3px",
                  borderRadius: "5px",
                  width: "150px",
                }}
              >
                <Typography variant="body2">Raw HTML</Typography>
                <IconButton
                  sx={{ paddingRight: "0", paddingLeft: "0" }}
                  onClick={() => {
                    onOpen(
                      {
                        colId,
                        index,
                        rowIndex,
                        content,
                      },
                      "editContent"
                    );
                  }}
                >
                  <EditIcon
                    sx={{
                      fontSize: "14px",
                      color: "white",
                    }}
                  />
                </IconButton>
              </Box>
            )}
            <p style={{ fontSize: "12px" }}>{content}</p>
          </Box>
        )}
      </Box>
    </>
  );
};

// Add Image Type in in the column,
// Add Media Menu where all the media will be stored
// Handle column HTML and show preview
// storing data in database via API

const SectionEditor = ({ type, rowData }) => {
  const [rows, setRows] = useState([
    {
      id: uuid(),
      columnType: "one",
      padding: "",
      margin: "",
      cols: [
        {
          id: uuid(),
          width: "99%",
          content: "",
        },
      ],
    },
  ]);
  const [openRowModal, setOpenRowModal] = useState(false);
  const [rowIndex, setRowIndex] = useState(0);
  const [endpoint, setEndpoint] = useState("");
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [published, setPublished] = useState(false);

  const { submitData, setSubmitData, onOpen } = useContext(ModalContext);

  useEffect(() => {
    if (rowData?.length > 0) {
      setRows(rowData);
    }
  }, [rowData]);

  useEffect(() => {
    if (submitData["colId"]) {
      let allRows = rows;
      console.log(submitData);
      allRows[submitData["rowIndex"]].cols[submitData["index"]] = {
        ...allRows[submitData["rowIndex"]].cols[submitData["index"]],
        content: submitData.content,
      };
      setRows(allRows);
      setSubmitData({});
    }
  }, [submitData]);

  const handleColumType = (value, rowIndex) => {
    let arr = value.split("-");
    let allRows = rows[rowIndex];
    allRows.columnType = value;
    if (allRows.cols.length > arr.length) {
      let allRowsLength = allRows.cols.length;
      if (arr.length === 1) {
        for (let i = 0; i < allRowsLength - arr.length; i++) {
          allRows.cols.pop();
        }
      } else {
        for (let i = 0; i <= allRowsLength - arr.length; i++) {
          allRows.cols.pop();
        }
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (allRows.cols[i]) {
        allRows.cols[i].width =
          arr[i] === "half"
            ? "49%"
            : arr[i] === "three"
            ? "32.3%"
            : arr[i] === "four"
            ? "24%"
            : arr[i] === "threefour"
            ? "73%"
            : arr[i] === "five"
            ? "19%"
            : arr[i] === "six"
            ? "15.6%"
            : "99%";
      } else {
        allRows.cols.push({
          content: "",
          width:
            arr[i] === "half"
              ? "49%"
              : arr[i] === "three"
              ? "32.3%"
              : arr[i] === "four"
              ? "24%"
              : arr[i] === "threefour"
              ? "73%"
              : arr[i] === "five"
              ? "19%"
              : arr[i] === "six"
              ? "15.6%"
              : "99%",
          id: uuid(),
        });
      }
    }
    setRows(rows?.map((el, index) => (rowIndex === index ? allRows : el)));
  };

  const handleMargin = (margin, rowIndex) => {
    rows[rowIndex].margin = margin;
    setRows([...rows]);
  };

  const handlePadding = (padding, rowIndex) => {
    rows[rowIndex].padding = padding;
    setRows([...rows]);
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        id: uuid(),
        columnType: "one",
        padding: "",
        margin: "",
        cols: [
          {
            id: uuid(),
            width: "99%",
            content: "",
          },
        ],
      },
    ]);
  };

  const handleRowSwap = (index, newIndex) => {
    let temp = rows[index];
    rows[index] = rows[newIndex];
    rows[newIndex] = temp;
    setRows([...rows]);
  };

  const handleShowPreview = () => {
    let innerContent = ``;
    for (let i = 0; i < rows.length; i++) {
      innerContent += `<div class="d-flex justify-content-evenly" style="${
        rows[i].padding ? "padding: " + rows[i].padding + ";" : ""
      } ${rows[i].margin ? "margin: " + rows[i].margin + ";" : ""}">`;
      for (let j = 0; j < rows[i].cols.length; j++) {
        innerContent += `
          <div style="width: ${rows[i].cols[j].width}">
            ${rows[i].cols[j].content}
          </div>
        `;
      }
      innerContent += `</div>`;
    }
    let data = localStorage.getItem("previewHTML");
    if (data) {
      localStorage.clear();
      localStorage.setItem("previewHTML", innerContent);
    } else {
      localStorage.setItem("previewHTML", innerContent);
    }
    window.open("/");
  };

  const removeRow = () => {
    rows.pop();
    setRows([...rows]);
  };

  const handleSubmit = async () => {
    let innerContent = ``;
    for (let i = 0; i < rows.length; i++) {
      innerContent += `<div class="container d-flex justify-content-evenly" style="${
        rows[i].padding ? "padding: " + rows[i].padding + ";" : ""
      } ${rows[i].margin ? "margin: " + rows[i].margin + ";" : ""}">`;
      for (let j = 0; j < rows[i].cols.length; j++) {
        innerContent += `
          <div style="width: ${rows[i].cols[j].width}">
            ${rows[i].cols[j].content}
          </div>
        `;
      }
      innerContent += `</div>`;
    }
    let data = {
      htmlCode: innerContent,
      endpoint,
      rows,
      name: title,
      shortDesc,
      published,
    };

    let response = await fetch("http://localhost:8000/api/admin/pages/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    response = await response.json();
    console.log(response);
    setRows([
      {
        id: uuid(),
        columnType: "one",
        padding: "",
        margin: "",
        cols: [
          {
            id: uuid(),
            width: "99%",
            content: "",
          },
        ],
      },
    ]);
    setEndpoint("");
    setPublished(false);
    setTitle("");
    setShortDesc("");
  };

  return (
    <>
      <RowModal
        open={openRowModal}
        setOpen={(val) => setOpenRowModal(val)}
        handleColumType={(val) => handleColumType(val, rowIndex)}
        handleMargin={(val) => handleMargin(val, rowIndex)}
        handlePadding={(val) => handlePadding(val, rowIndex)}
      />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        marginBottom={"20px"}
      >
        <Typography variant="h4">Add Page</Typography>
        <AppSwitch
          title={"Publish"}
          checked={published}
          setChecked={(val) => setPublished(val)}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"end"}
        alignItems={"center"}
        marginBottom={"20px"}
      >
        <Button
          onClick={() => handleShowPreview()}
          variant="contained"
          sx={{
            backgroundColor: "#a4c525",
            ":hover": {
              backgroundColor: "#8c9726",
            },
            marginRight: "10px",
          }}
        >
          Preview
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ec530e",
            ":hover": {
              backgroundColor: "#ba4a24",
            },
          }}
          onClick={() => {
            if (type === "add") {
              handleSubmit();
            }
          }}
        >
          {type === "add" ? "Add Page" : "Update"}
        </Button>
      </Box>
      <Box marginBottom={"20px"}>
        <Typography marginBottom={"5px"}>Add Title</Typography>
        <TextField
          size="medium"
          sx={{
            width: "60%",
            "& input": {
              padding: "20px",
            },
          }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>
      <Box marginBottom={"20px"}>
        <Typography marginBottom={"5px"}>Add Short Description</Typography>
        <TextField
          size="medium"
          sx={{
            width: "60%",
            "& textarea": {
              paddingRight: "10px",
              paddingLeft: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
            },
          }}
          multiline
          rows={2}
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}
        />
      </Box>
      <Box marginBottom={"20px"}>
        <AddEndpoint endpoint={""} setEndpoint={(val) => setEndpoint(val)} />
      </Box>
      <Box padding={"15px"} backgroundColor={"#efefef"} borderRadius={"7px"}>
        {rows?.map((row, index) => {
          return (
            <Fragment key={row.id}>
              <Row>
                <Grid
                  container
                  justifyContent={"end"}
                  alignItems={"center"}
                  padding={"5px"}
                  marginRight={"10px"}
                >
                  <Grid item marginRight={"5px"}>
                    <IconButton
                      sx={{
                        ":hover": {
                          color: "black",
                        },
                        backgroundColor: "grey",
                        color: "white",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        setRowIndex(index);
                        onOpen(
                          {
                            columnType: row?.columnType,
                            margin: row?.margin
                              ?.split(" ")
                              .map((el) => el?.replace("px", "")),
                            padding: row?.padding
                              ?.split(" ")
                              .map((el) => el?.replace("px", "")),
                          },
                          "rowModal"
                        );
                      }}
                    >
                      <EditIcon
                        sx={{
                          fontSize: "18px",
                        }}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      sx={{
                        ":hover": {
                          color: "black",
                        },
                        backgroundColor: "grey",
                        color: "white",
                        borderRadius: "5px",
                      }}
                      onClick={() => removeRow()}
                    >
                      <CloseIcon
                        sx={{
                          fontSize: "18px",
                        }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid container justifyContent={"space-evenly"}>
                  {row?.cols?.map((col, colIndex) => {
                    return (
                      <Grid key={col.id} item width={col.width}>
                        <Col
                          colId={col.id}
                          rowIndex={index}
                          index={colIndex}
                          content={col.content}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Row>
              {rows.length > index + 1 && (
                <Box
                  marginTop={"30px"}
                  marginBottom={"0px"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <IconButton
                    sx={{ backgroundColor: "#bebebe" }}
                    onClick={() => handleRowSwap(index, index + 1)}
                  >
                    <SwapVertIcon htmlColor="black" />
                  </IconButton>
                </Box>
              )}
            </Fragment>
          );
        })}
        <Box
          padding={"10px"}
          border={"1px dotted black"}
          borderRadius={"8px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconButton onClick={() => addRow()}>
            <AddBoxIcon sx={{ fontSize: "40px", color: "" }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default SectionEditor;
