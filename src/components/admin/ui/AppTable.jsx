"use client";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import AppSwitch from "../editor/ui/AppSwitch";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AppTableRows = ({ el }) => {
  const [checked, setChecked] = useState(el?.published === 1);
  const router = useRouter();

  const handlePublished = async (val, id) => {
    let response = await fetch(
      `http://localhost:8000/api/pages/changestatus/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ published: checked ? 1 : 0 }),
      }
    );
    response = await response.json();
    console.log(response);
    router.refresh();
    setChecked(val);
  };

  return (
    <>
      <StyledTableRow key={el?.uniqueId}>
        <StyledTableCell component="th" scope="row">
          {el?.uniqueId}
        </StyledTableCell>
        <StyledTableCell>{el?.name}</StyledTableCell>
        <StyledTableCell>{el?.endpoint ? el?.endpoint : "/"}</StyledTableCell>
        <StyledTableCell>
          {el?.published ? (
            <Chip
              label="publish"
              sx={{
                backgroundColor: "#5b9a52",
                border: "1px solid green",
                color: "white",
              }}
              size="small"
            />
          ) : (
            <Chip
              label="publish"
              sx={{
                backgroundColor: "#bc7272",
                border: "1px solid red",
                color: "white",
              }}
              size="small"
            />
          )}
        </StyledTableCell>
        <StyledTableCell>{el?.createdAt}</StyledTableCell>
        <StyledTableCell>
          <AppSwitch
            title={""}
            checked={checked}
            setChecked={(val) => handlePublished(val, el?.id)}
          />
        </StyledTableCell>
        <StyledTableCell>
          <IconButton>
            <ModeEditIcon />
          </IconButton>
        </StyledTableCell>
        <StyledTableCell>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

const AppTable = ({ data }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>UniqueId</StyledTableCell>
              <StyledTableCell>Page Name</StyledTableCell>
              <StyledTableCell>Enpoint</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Change Status</StyledTableCell>
              <StyledTableCell>Edit</StyledTableCell>
              <StyledTableCell>Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((el) => {
              return <AppTableRows el={el} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AppTable;
