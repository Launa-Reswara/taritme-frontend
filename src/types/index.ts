import { ReactNode } from "react";

declare global {
  interface Window {
    snap: any;
  }
}

export type UserProps = {
  id: number;
  name: string;
  email: string;
  password: string;
  is_already_paid: 0 | 1;
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
  total_comments: number;
};

export type DetailPelatihProps = {
  id: number;
  pelatih_tari_id: number;
  tentang_pelatih: string;
  image_1: string | null;
  image_2: string | null;
  image_3: string | null;
};

export type ModalKomunitasSliceProps = {
  komunitas: {
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
    isUploadLoading: boolean;
    isOpenSearchCommand: boolean;
    setIsEditPelatih: (isEditPelatih: boolean) => void;
    initialData: PelatihProps;
    setInitialData: (initialData: PelatihProps) => void;
    setIsUploadLoading: (isUploadLoading: boolean) => void;
    setIsOpenSearchCommand: (isOpenSearchCommand: boolean) => void;
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

export type RiwayatKursusProps = {
  email: string;
  id: number;
  order_id: string;
  order_date: string;
  pelatih_tari_description: string;
  pelatih_tari_id: number;
  pelatih_tari_image: string;
  pelatih_tari_name: string;
  pelatih_tari_price: number;
  users_id: number;
  rating: number;
  total_comments: number;
};

export type BaseResponseApiProps = {
  statusCode: number;
  message: string;
};

export type UserSliceProps = {
  user: {
    isEditProfile: boolean;
    setIsEditProfile: (isEditProfile: boolean) => void;
    isUploadLoading: boolean;
    setIsUploadLoading: (isUploadLoading: boolean) => void;
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

export type PenilaianProps = {
  comment: string;
  id: number;
  order_id: string;
  pelatih_tari_id: number;
  pelatih_tari_name: string;
  rating: number;
  users_email: string;
  users_name: string;
};
