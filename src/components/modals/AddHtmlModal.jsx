"use client";
import { ModalContext } from "@/context/context";
import { Box, InputLabel, TextField, IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import CKEditor from "../admin/editor/ui/Editor";

const AddHtmlModal = () => {
  const { data, type, isOpen, onClose } = useContext(ModalContext);
  const isModalOpen = isOpen && type === "addContent";

  const [htmlContent, setHtmlContent] = useState(data?.content);

  return (
    <Dialog
      open={isModalOpen}
      onClose={() => onClose({})}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={"lg"}
      fullWidth
      sx={{ padding: "10px" }}
    >
      <Box position={"relative"}>
        <IconButton
          color="black"
          sx={{ position: "absolute", top: 0, right: 0 }}
          onClick={() => onClose({})}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogTitle sx={{ color: "black" }} id="alert-dialog-title">
        {"Handle Column Content"}
      </DialogTitle>
      <DialogContent>
        <Box marginTop="40px">
          <InputLabel>Write your HTML</InputLabel>
          <CKEditor
            initialData={htmlContent}
            setContent={(val) => setHtmlContent(val)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => {
            onClose({
              colId: data.colId,
              index: data.index,
              rowIndex: data.rowIndex,
              content: htmlContent,
            });
            setHtmlContent("");
          }}
          autoFocus
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddHtmlModal;
