import { ReactNode } from "react";

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
  reading_time: string;
  total_like: number;
  total_comments: number;
};

export type InstrukturProps = {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  total_review: number;
  price: number;
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
    isEditPelatih: boolean;
    setIsEditPelatih: (isEditPelatih: boolean) => void;
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
