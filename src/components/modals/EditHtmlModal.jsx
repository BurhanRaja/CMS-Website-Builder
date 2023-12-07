"use client";
import { ModalContext } from "@/context/context";
import { Box, InputLabel, TextField } from "@mui/material";
import { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const EditHtmlModal = () => {
  const { data, type, isOpen, onClose } = useContext(ModalContext);

  const isModalOpen = isOpen && type === "editContent";

  return (
    <Dialog
      open={isModalOpen}
      onClose={""}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        {"Handle Column Content"}
      </DialogTitle>
      <DialogContent>
        <Box marginTop='40px'>
          <InputLabel>Write your HTML</InputLabel>
          <TextField
            sx={{
              width: "100%",
            }}
            hiddenLabel
            id='top-header-html'
            multiline
            rows={10}
            value={""}
            onChange={(e) => {}}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={""} autoFocus>
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditHtmlModal;
