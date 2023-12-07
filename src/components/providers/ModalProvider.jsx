"use client";

import { ModalContext } from "@/context/context";
import { useState } from "react";
import AddHtmlModal from "../modals/AddHtmlModal";

const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [type, setType] = useState("");
  const [submitData, setSubmitData] = useState({});

  const onOpen = (data, type) => {
    setSubmitData({});
    setData(data);
    setType(type);
    setOpen(true);
  };

  const onClose = (data) => {
    setSubmitData(data);
    setData({});
    setType("");
    setOpen(false);
  };

  return (
    <>
      <ModalContext.Provider
        value={{
          isOpen: open,
          onOpen,
          onClose,
          type,
          data,
          submitData,
          setSubmitData,
        }}
      >
        <AddHtmlModal />
        {children}
      </ModalContext.Provider>
    </>
  );
};

export default ModalProvider;
