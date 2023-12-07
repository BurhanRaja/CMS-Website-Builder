import { createContext } from "react";

export const ModalContext = createContext({
  isOpen: false,
  data: {},
  type: "",
  submitData: {},
  setSubmitData: (data) => {},
  onOpen: (data, type) => {},
  onClose: () => {},
});
