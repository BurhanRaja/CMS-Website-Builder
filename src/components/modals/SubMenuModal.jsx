"use client";

import { Box, IconButton } from "@mui/material";
import { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { ModalContext } from "@/context/context";
import DialogContentText from "@mui/material/DialogContentText";

const SubMenuModal = () => {
  const { data, type, isOpen, onClose } = useContext(ModalContext);
  const isModalOpen = isOpen && type === "subMenu";

  return (
    <>
      <Dialog
        open={isModalOpen}
        onClose={() => onClose({})}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        maxWidth={"lg"}
        fullWidth
        fullScreen={"xl"}
        sx={{ padding: "10px" }}
      >
        <Box position={"relative"}>
          <IconButton
            color='black'
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={() => onClose({})}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogTitle
          sx={{ color: "black !important", fontSize: "20px !important" }}
          id='alert-dialog-title'
        >
          {"Preview Content"}
        </DialogTitle>
        <DialogContent dividers sx={{ paddingTop: "10px" }}>
          <DialogContentText>
            {/* {data?.content ? parse(data?.content) : ""} */}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubMenuModal;
