import { ModalKomunitasSliceProps } from "@/types";
import { StateCreator } from "zustand";

const modalKomunitasSlice: StateCreator<
  ModalKomunitasSliceProps,
  [],
  [],
  ModalKomunitasSliceProps
> = (set) => ({
  idModal: 0,
  setIdModal: (idModal) => set({ idModal: idModal }),
  modalKomunitas: { id: 0, name: "", description: "", previewImage: "" },
  setModalKomunitas: (modalKomunitas) =>
    set({ modalKomunitas: modalKomunitas }),
});

export default modalKomunitasSlice;
