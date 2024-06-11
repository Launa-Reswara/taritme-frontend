export const DEVELOPMENT_API_URL: string = import.meta.env
  .VITE_DEVELOPMENT_API_URL;
export const PRODUCTION_API_URL: string = import.meta.env
  .VITE_PRODUCTION_API_URL;
export const DEVELOPMENT_URL: string = import.meta.env.VITE_DEVELOPMENT_URL;
export const PRODUCTION_URL: string = import.meta.env.VITE_PRODUCTION_URL;
export const MIDTRANS_API_URL: string = import.meta.env.VITE_MIDTRANS_API_URL;
export const MIDTRANS_CLIENT_ID: string = import.meta.env
  .VITE_MIDTRANS_CLIENT_ID;
export const CONTENTFUL_DELIVERY_API: string = import.meta.env
  .VITE_CONTENTFUL_DELIVERY_API;
export const CONTENTFUL_SPACE_ID: string = import.meta.env
  .VITE_CONTENTFUL_SPACE_ID;

export const CONDITION = process.env.NODE_ENV as "development" | "production";
export const MIDTRANS_DEVELOPMENT_SNAP_SCRIPT = import.meta.env
  .VITE_MIDTRANS_DEVELOPMENT_SNAP_SCRIPT;
export const MIDTRANS_CLIENT_KEY = import.meta.env.MIDTRANS_CLIENT_KEY;
