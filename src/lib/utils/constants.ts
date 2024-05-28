export const DEVELOPMENT_API_URL: string = import.meta.env
  .VITE_DEVELOPMENT_API_URL;
export const PRODUCTION_API_URL: string = import.meta.env
  .VITE_PRODUCTION_API_URL;
export const DEVELOPMENT_URL: string = import.meta.env.VITE_DEVELOPMENT_URL;
export const PRODUCTION_URL: string = import.meta.env.VITE_PRODUCTION_URL;
export const MIDTRANS_API_URL: string = import.meta.env.VITE_MIDTRANS_API_URL;
export const MIDTRANS_CLIENT_ID: string = import.meta.env
  .VITE_MIDTRANS_CLIENT_ID;

export const CONDITION = process.env.NODE_ENV as "development" | "production";
