export type KomunitasProps = {
  id: number;
  name: string;
  previewImage: string;
  description: string;
};

// slice zustand types
export type ModalKomunitasSliceProps = {
  idModal: number;
  setIdModal: (idModal: number) => void;
  modalKomunitas: KomunitasProps;
  setModalKomunitas: (modalKomunitas: KomunitasProps) => void;
};
