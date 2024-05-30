import {
  CONDITION,
  DEVELOPMENT_API_URL,
  PRODUCTION_API_URL,
} from "@/lib/utils/constants";
import { ArsipKesenianProps, JoinPelatihProps, PelatihProps } from "@/types";
import { ofetch } from "ofetch";

// komunitas
export async function getKomunitas() {
  try {
    const response = await ofetch(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/komunitas`,
      {
        method: "GET",
        parseResponse: JSON.parse,
        responseType: "json",
      }
    );

    return response;
  } catch (err) {
    throw new Error("Failed to fetch data!");
  }
}

// arsip kesenian
export async function getArsipKesenian(): Promise<ArsipKesenianProps[]> {
  try {
    const response = await ofetch(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/arsip-kesenian`,
      {
        method: "GET",
        parseResponse: JSON.parse,
        responseType: "json",
      }
    );

    return response.data as ArsipKesenianProps[];
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export async function getDetailArsipKesenian(
  params: string
): Promise<ArsipKesenianProps> {
  try {
    const response = await ofetch(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/arsip-kesenian/${params}`
    );

    return response.data as ArsipKesenianProps;
  } catch (err) {
    throw new Error("Failed to fetch data!");
  }
}

// pelatih tari
export async function getPelatihTari() {
  try {
    const response = await ofetch(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/pelatih-tari`,
      {
        method: "GET",
        parseResponse: JSON.parse,
        responseType: "json",
      }
    );

    return response.data as PelatihProps[];
  } catch (err: any) {
    throw new Error("Failed to fetch data!");
  }
}

export async function getDetailPelatihTari(
  name: string
): Promise<JoinPelatihProps[]> {
  try {
    const response = await ofetch(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/pelatih-tari/${name}`,
      {
        method: "GET",
        parseResponse: JSON.parse,
        responseType: "json",
      }
    );

    return response.data as JoinPelatihProps[];
  } catch (err: any) {
    throw new Error("Failed to get data!");
  }
}

// riwayat kursus
export async function getRiwayatKursus() {
  try {
    const response = await ofetch(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/riwayat-kursus`,
      {
        method: "GET",
        parseResponse: JSON.parse,
        responseType: "json",
      }
    );
  } catch (err) {
    throw new Error("Failed to get data!");
  }
}

export async function postRiwayatKursus() {}
