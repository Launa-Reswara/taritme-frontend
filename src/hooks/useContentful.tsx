import {
  CONTENTFUL_DELIVERY_API,
  CONTENTFUL_SPACE_ID,
} from "@/lib/utils/constants";
import { createClient } from "contentful";

export function useContentful() {
  const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_DELIVERY_API,
    host: "preview.contentful.com",
  });

  async function getArsipKesenianByTitle() {
    try {
      client.getEntries({
        content_type: "taritme",
      });
    } catch (err) {
      throw new Error("");
    }
  }
}
