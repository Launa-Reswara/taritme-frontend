import {
  CONDITION,
  DEVELOPMENT_API_URL,
  PRODUCTION_API_URL,
} from "@/lib/utils/constants";
import {
  ArsipKesenianProps,
  KomunitasProps,
  PelatihProps,
  UserProps,
} from "@/types";
import axios from "axios";

// komunitas
export async function getKomunitas(): Promise<KomunitasProps[]> {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/komunitas`
    );

    return response.data.data as KomunitasProps[];
  } catch (err) {
    throw new Error("Failed to fetch data!");
  }
}

// arsip kesenian
export async function getArsipKesenian(): Promise<ArsipKesenianProps[]> {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/arsip-kesenian`
    );

    return response.data.data as ArsipKesenianProps[];
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export async function deleteArsipKesenian(params: string) {
  try {
    await axios.delete(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/arsip-kesenian/${params}`
    );
  } catch (err: any) {
    throw new Error("Failed to fetch data!");
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
    throw new Error("Failed to fetch data!");
  }
}

// users
export async function getUsers(): Promise<UserProps[]> {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/users`
    );

    return response.data.data as UserProps[];
  } catch (err: any) {
    throw new Error("Failed to fetch data!");
  }
}

export async function getDetailPelatihTari(name: string) {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/pelatih-tari/${name}`
    );

    return response.data.data;
  } catch (err: any) {
    throw new Error("Failed to get data!");
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

    return response;
  } catch (err) {
    throw new Error("Failed to get data!");
  }
}
