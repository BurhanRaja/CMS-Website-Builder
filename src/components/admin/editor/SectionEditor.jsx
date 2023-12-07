"use client";

import {
  Box,
  IconButton,
  Grid,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Fragment, useContext, useEffect, useState } from "react";
import { ModalContext } from "@/context/context";
import { v4 as uuid } from "uuid";
import { TableRowsOutlined } from "@mui/icons-material";
import SwapVertIcon from "@mui/icons-material/SwapVert";

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
      >
        {!content ? (
          <IconButton
            onClick={() => {
              console.log({
                colId,
                index,
                rowIndex,
                content,
              });
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
          <p style={{ fontSize: "12px" }}>{content}</p>
        )}
      </Box>
    </>
  );
};

const SectionEditor = () => {
  const [rows, setRows] = useState([
    {
      id: uuid(),
      columnType: "one",
      cols: [
        {
          id: uuid(),
          width: "99%",
          content: "",
        },
      ],
    },
  ]);

  const { submitData, setSubmitData } = useContext(ModalContext);

  useEffect(() => {
    if (submitData["colId"]) {
      let allRows = rows;
      console.log(allRows[submitData["rowIndex"]].cols[submitData["index"]]);
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
      for (let i = 0; i <= allRowsLength - arr.length; i++) {
        allRows.cols.pop();
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
              : arr[i] === "six"
              ? "15.6%"
              : "99%",
          id: uuid(),
        });
      }
    }
    setRows(rows?.map((el, index) => (rowIndex === index ? allRows : el)));
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        id: uuid(),
        columnType: "one",
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
    let allRows = rows;
    let temp = allRows[index];
    allRows[index] = allRows[newIndex];
    allRows[newIndex] = temp;
    console.log(allRows);
    setRows(allRows);
    console.log(rows);
  };

  return (
    <>
      <Box padding={"15px"} backgroundColor={"#e7e7e7"} borderRadius={"7px"}>
        <IconButton onClick={() => addRow()}>
          <AddBoxIcon sx={{ fontSize: "40px", color: "" }} />
        </IconButton>
        {rows?.map((row, index) => {
          return (
            <Fragment key={row.id}>
              <Row>
                <Box paddingLeft={"15px"} marginBottom={"10px"}>
                  <InputLabel id='demo-simple-select-label'>
                    Column Division
                  </InputLabel>
                  <Select
                    value={row?.columnType}
                    onChange={(e) => handleColumType(e.target.value, index)}
                    size='small'
                    sx={{
                      width: "30%",
                      backgroundColor: "white",
                      color: "black",
                    }}
                  >
                    <MenuItem value={"one"} selected>
                      1
                    </MenuItem>
                    <MenuItem value={"half-half"}>1/2 + 1/2</MenuItem>
                    <MenuItem value={"three-three-three"}>
                      1/3 + 1/3 + 1/3
                    </MenuItem>
                    <MenuItem value={"four-four-four-four"}>
                      1/4 + 1/4 + 1/4 + 1/4
                    </MenuItem>
                    <MenuItem value={"four-threefour"}>1/4 + 3/4</MenuItem>
                    <MenuItem value={"six-six-six-six-six-six"}>
                      1/6 + 1/6 + 1/6 + 1/6 + 1/6 + 1/6
                    </MenuItem>
                  </Select>
                </Box>
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
                    <SwapVertIcon htmlColor='black' />
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
