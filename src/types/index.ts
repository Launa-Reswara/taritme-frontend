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
  modalKomunitas: {
    idModal: number;
    setIdModal: (idModal: number) => void;
    dataModalKomunitas: KomunitasProps;
    setModalKomunitas: (dataModalKomunitas: KomunitasProps) => void;
  };
};

export type PelatihSliceProps = {
  tambahPelatih: {
    isTambahPelatih: boolean;
    setIsTambahPelatih: (isTambahPelatih: boolean) => void;
  };
  editPelatih: {
    isEditPelatih: boolean;
    setIsEditPelatih: (isEditPelatih: boolean) => void;
  };
};
