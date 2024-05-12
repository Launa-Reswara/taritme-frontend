export type KomunitasProps = {
  id: number;
  name: string;
  previewImage: string;
  description: string;
};

export type ArsipKesenianProps = {
  id: number;
  author: string;
  title: string;
  date: string;
  previewWriting: string;
  previewImage: string;
  readingTime: string;
  like: number;
  comments: number;
};

export type InstrukturProps = {
  id: number;
  name: string;
  description: string;
  image: string;
  rate: number;
  totalUlasan: number;
  harga: number;
};

export type ModalKomunitasSliceProps = {
  idModal: number;
  setIdModal: (idModal: number) => void;
  modalKomunitas: KomunitasProps;
  setModalKomunitas: (modalKomunitas: KomunitasProps) => void;
};
