import { ReactNode } from "react";

export type UserProps = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type KomunitasProps = {
  id: number;
  name: string;
  image: string;
  description: string;
  is_active: 0 | 1;
  date: string;
};

export type ArsipKesenianProps = {
  id: number;
  author: string;
  title: string;
  date: string;
  preview_writing: string;
  preview_image: string;
  total_like: number;
  total_comments: number;
};

export type DetailArsipKesenianProps = {
  id: number;
  arsip_kesenian_id: number;
  arsip_kesenian_author: string;
  arsip_kesenian_title: string;
  arsip_kesenian_total_like: number;
  arsip_kesenian_total_comments: number;
  content: string;
};

export type JoinArsipKesenianProps = ArsipKesenianProps &
  DetailArsipKesenianProps;

export type PelatihProps = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  no_hp: string;
  status: "Aktif" | "Tidak Aktif";
  email: string;
  rating: number;
  total_review: number;
};

export type DetailPelatihProps = {
  id: number;
  pelatih_tari_id: number;
  tentang_pelatih: string;
  image_1: string;
  image_2: string;
  image_3: string;
  price_per_paket: number;
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
  pelatih: {
    isTambahPelatih: boolean;
    setIsTambahPelatih: (isTambahPelatih: boolean) => void;
    id: number;
    setId: (id: number) => void;
    isEditPelatih: boolean;
    setIsEditPelatih: (isEditPelatih: boolean) => void;
    initialData: PelatihProps;
    setInitialData: (initialData: PelatihProps) => void;
  };
};

export type ArsipSliceProps = {
  arsip: {
    isTambahArsip: boolean;
    setIsTambahArsip: (isTambahArsip: boolean) => void;
    isEditArsip: boolean;
    setIsEditArsip: (isEditArsip: boolean) => void;
  };
};

export type LoginSliceProps = {
  login: {
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
  };
};

export type ChildrenProps = {
  children: ReactNode;
};

export type TokenSliceProps = {
  token: {
    isTokenUserAvailable: boolean;
    setIsTokenUserAvailable: (isTokenUserAvailable: boolean) => void;
    isTokenAdminAvailable: boolean;
    setIsTokenAdminAvailable: (isTokenAdminAvailable: boolean) => void;
  };
};

export type RiwayatKursusProps = PelatihProps;

export type BaseResponseApiProps = {
  statusCode: number;
  message: string;
};

export type UserSliceProps = {
  user: {
    isEditProfile: boolean;
    setIsEditProfile: (isEditProfile: boolean) => void;
  };
};

export type UserProfileProps = {
  id: number;
  users_id: number;
  jenis_kelamin: "Laki-laki" | "Perempuan";
  bio: string;
  no_hp: string;
  age: number;
  image: string;
};
