"use client";

import { Box, IconButton } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import PreviewContent from "../admin/PreviewContent";
import { ModalContext, PreviewContext } from "@/context/context";
import DialogContentText from "@mui/material/DialogContentText";
import parse from "html-react-parser";

const PreviewModal = () => {
  const { data, type, isOpen, onClose } = useContext(ModalContext);
  const isModalOpen = isOpen && type === "previewContent";

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isOpen]);

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
        <DialogTitle sx={{ color: "black" }} id='alert-dialog-title'>
          {"Preview Content"}
        </DialogTitle>
        <DialogContent dividers sx={{ paddingTop: "10px" }}>
          <DialogContentText ref={descriptionElementRef}>
            {data?.content ? parse(data?.content) : ""}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PreviewModal;
