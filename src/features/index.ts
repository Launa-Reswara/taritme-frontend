import {
  CONDITION,
  DEVELOPMENT_API_URL,
  PRODUCTION_API_URL,
} from "@/lib/utils/constants";
import { client } from "@/lib/utils/contentfulClient";
import {
  BaseResponseApiProps,
  KomunitasProps,
  PelatihProps,
  UserProfileProps,
  UserProps,
} from "@/types";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";

type ResponseGetKomunitasProps = Omit<AxiosResponse, "data"> & {
  data: BaseResponseApiProps & { data: KomunitasProps[] };
};

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
    throw new Error(err.response.data.message);
  }
}

type ResponseGetPelatihProps = Omit<AxiosResponse, "data"> & {
  data: BaseResponseApiProps & { data: PelatihProps[] };
};

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
    throw new Error(err.response.data.message);
  }
}

type ResponseGetUsersProps = Omit<AxiosResponse, "data"> & {
  data: BaseResponseApiProps & { data: UserProps[] };
};

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
    throw new Error(err.response.data.message);
  }
}

type ResponseGetUserProfileProps = Omit<AxiosResponse, "data"> & {
  data: BaseResponseApiProps & { data: UserProps & UserProfileProps };
};

// user profile
export async function getUserProfile() {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/users/profile`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );

    return response as ResponseGetUserProfileProps;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
}

// riwayat kursus
export async function getRiwayatKursus() {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/riwayat-kursus`,
      { headers: { Authorization: `Bearer ${Cookies.get("token")}` } }
    );

    return response.data.data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
}

export async function getArsipKesenian() {
  try {
    const response = await client.getEntries().then((entries) => entries);
    return response as any;
  } catch (err: any) {
    throw new Error("Failed to get arsip kesenian!");
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

export async function getPenilaianPelatihTari(name: string) {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/pelatih-tari/${name}/kumpulan-penilaian`,
      { headers: { Authorization: `Bearer ${Cookies.get("token")}` } }
    );

    return response.data.data;
  } catch (err: any) {
    throw new Error("Failed to get penilaian pelatih tari!");
  }
}

export async function getDetailPelatihTari(name: string) {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/pelatih-tari/${name}`,
      { headers: { Authorization: `Bearer ${Cookies.get("token")}` } }
    );

    return response.data.data[0];
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
}

export async function getPaymentStatus(orderId: string) {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/pelatih-tari/payment/${orderId}`,
      { headers: { Authorization: `Bearer ${Cookies.get("token")}` } }
    );

    return response.data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
}
