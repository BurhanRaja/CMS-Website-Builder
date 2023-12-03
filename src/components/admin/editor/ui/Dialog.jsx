"use client";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const Modal = ({ dialogOpen, handleClose, content }) => {
  return (
    <Dialog
      open={dialogOpen}
      onClose={() => handleClose()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Choose Icon"}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default Modal;
