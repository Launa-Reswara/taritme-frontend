import {
  CONDITION,
  DEVELOPMENT_API_URL,
  PRODUCTION_API_URL,
} from "@/lib/utils/constants";
import { ofetch } from "ofetch";

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

export async function getListPelatihTari() {
  try {
    const response = await ofetch(
      `${
        CONDITION === "development" ? DEVELOPMENT_API_URL : PRODUCTION_API_URL
      }/api/pelatih`,
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

export async function getArsipKesenian() {
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

    return response;
  } catch (err) {
    throw new Error("Failed to fetch data!");
  }
}
