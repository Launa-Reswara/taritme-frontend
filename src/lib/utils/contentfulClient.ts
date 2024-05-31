import { createClient } from "contentful";
import { CONTENTFUL_DELIVERY_API, CONTENTFUL_SPACE_ID } from "./constants";

export const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_DELIVERY_API,
  host: "preview.contentful.com",
});
