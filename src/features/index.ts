import {
  CONDITION,
  DEVELOPMENT_API_URL,
  PRODUCTION_API_URL,
} from "@/lib/utils/constants";
import { client } from "@/lib/utils/contentfulClient";
import { KomunitasProps, PelatihProps, UserProfileProps } from "@/types";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";

type ResponseGetKomunitasProps = AxiosResponse<{ data: KomunitasProps[] }>;

// komunitas
export async function getKomunitas(): Promise<ResponseGetKomunitasProps> {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/komunitas`
    );

    return response as ResponseGetKomunitasProps;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

type ResponseGetPelatihProps = AxiosResponse<{ data: PelatihProps[] }>;

// pelatih tari
export async function getPelatihTari(): Promise<ResponseGetPelatihProps> {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/pelatih-tari`
    );

    return response as ResponseGetPelatihProps;
  } catch (err: any) {
    throw new Error("Failed to fetch data!");
  }
}

type ResponseGetUsersProps = AxiosResponse<{ data: KomunitasProps[] }>;

// users
export async function getUsers(): Promise<ResponseGetUsersProps> {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/users`
    );

    return response as ResponseGetUsersProps;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

type ResponseGetUserProfileProps = AxiosResponse<{ data: UserProfileProps }>;

// user profile
export async function getUserProfile() {
  try {
    const response = await axios.post(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/users/profile`,
      { token: Cookies.get("token") }
    );

    return response as ResponseGetUserProfileProps;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

type ResponseGetDetailPelatihTariProps = AxiosResponse<{
  data: PelatihProps;
}>;

export async function getDetailPelatihTari(name: string) {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/pelatih-tari/${name}`
    );

    return response;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

// riwayat kursus
export async function getRiwayatKursus() {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/riwayat-kursus`
    );

    return response.data.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export async function getArsipKesenian() {
  try {
    const response = await client.getEntries().then((entries) => entries);
    return response as any;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export async function getArsipKesenianById(id: string) {
  try {
    const response = await client.getEntry(id).then((entries) => entries);
    return response as any;
  } catch (err) {
    throw new Error("Failed to get arsip kesenian!");
  }
}
