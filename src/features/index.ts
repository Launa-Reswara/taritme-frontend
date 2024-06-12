import {
  CONDITION,
  DEVELOPMENT_API_URL,
  PRODUCTION_API_URL,
} from "@/lib/utils/constants";
import { client } from "@/lib/utils/contentfulClient";
import {
  KomunitasProps,
  PelatihProps,
  PenilaianProps,
  RiwayatKursusProps,
  UserProfileProps,
  UserProps,
} from "@/types";
import axios from "axios";
import Cookies from "js-cookie";

// komunitas
export async function getKomunitas(): Promise<KomunitasProps[]> {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/komunitas`
    );

    return response.data.data as KomunitasProps[];
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
}

// pelatih tari
export async function getPelatihTari(): Promise<PelatihProps[]> {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/pelatih-tari`
    );

    return response.data.data as PelatihProps[];
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
}

// users
export async function getUsers(): Promise<UserProfileProps[]> {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/users`
    );

    return response.data.data as UserProfileProps[];
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
}

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

    return response.data.data as UserProps & UserProfileProps;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
}

// riwayat kursus
export async function getRiwayatKursus(): Promise<RiwayatKursusProps[]> {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/riwayat-kursus`,
      { headers: { Authorization: `Bearer ${Cookies.get("token")}` } }
    );

    return response.data.data as RiwayatKursusProps[];
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

export async function getPenilaianPelatihTari(
  name: string
): Promise<PenilaianProps[]> {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/pelatih-tari/${name}/kumpulan-penilaian`,
      { headers: { Authorization: `Bearer ${Cookies.get("token")}` } }
    );

    return response.data.data as PenilaianProps[];
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

    return response.data.data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
}
