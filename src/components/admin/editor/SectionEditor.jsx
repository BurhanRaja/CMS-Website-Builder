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
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import { Fragment, useContext, useEffect, useState } from "react";
import { ModalContext } from "@/context/context";
import { v4 as uuid } from "uuid";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import CloseIcon from "@mui/icons-material/Close";
import RowModal from "@/components/modals/RowModal";

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
        padding={"15px"}
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

const SectionEditor = ({ rowData }) => {
  const [rows, setRows] = useState(
    rowData
      ? rowData
      : [
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
        ]
  );
  const [openRowModal, setOpenRowModal] = useState(false);

  const { submitData, setSubmitData, onOpen } = useContext(ModalContext);

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

  //   update col - setRows({...rows, cols: cols.map((el) => el.id == id { content = "Update" } return el )})
  // Swap col - setRows({...rows, cols: })

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
    let allRows = rows;
    allRows[rowIndex].margin = margin;
    setRows(allRows);
  };

  const handlePadding = (padding, rowIndex) => {
    let allRows = rows;
    allRows[rowIndex].padding = padding;
    setRows(allRows);
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
    console.log(rows);
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
    innerContent += ``;
    onOpen({ content: innerContent }, "previewContent");
  };

  const removeRow = () => {
    rows.pop();
    setRows([...rows]);
  };

  return (
    <>
      <Box padding={"15px"} backgroundColor={"#e7e7e7"} borderRadius={"7px"}>
        <IconButton onClick={() => addRow()}>
          <AddBoxIcon sx={{ fontSize: "40px", color: "" }} />
        </IconButton>
        <Button variant="contained" onClick={() => handleShowPreview()}>
          Preview
        </Button>
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
                    <RowModal
                      open={openRowModal}
                      rowIndex={row?.id}
                      setOpen={(val) => setOpenRowModal(val)}
                      columnType={row?.columnType}
                      margin={row?.margin?.replace("px", "").split(" ")}
                      padding={row?.padding?.replace("px", "").split(" ")}
                      handleColumType={(val, rowIndex) =>
                        handleColumType(val, index)
                      }
                      handleMargin={(val, rowIndex) => handleMargin(val, index)}
                      handlePadding={(val, rowIndex) =>
                        handlePadding(val, index)
                      }
                    />
                    <IconButton
                      sx={{
                        ":hover": {
                          color: "black",
                        },
                        backgroundColor: "grey",
                        color: "white",
                        borderRadius: "5px",
                      }}
                      onClick={() => setOpenRowModal(true)}
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
                    >
                      <CloseIcon
                        sx={{
                          fontSize: "18px",
                        }}
                        onClick={() => removeRow()}
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
                  marginTop={"20px"}
                  marginBottom={"20px"}
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
      </Box>
    </>
  );
};

export default SectionEditor;
