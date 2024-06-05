import {
  CONDITION,
  DEVELOPMENT_API_URL,
  PRODUCTION_API_URL,
} from "@/lib/utils/constants";
import { client } from "@/lib/utils/contentfulClient";
import { KomunitasProps, PelatihProps, UserProps } from "@/types";
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
  } catch (err: any) {
    throw new Error(err.message);
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
    throw new Error(err.message);
  }
}

export async function getUserById(id: string) {
  try {
    const response = await axios.get(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/users/${id}`
    );

    return response.data.data;
  } catch (err: any) {
    throw new Error(err.message);
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
