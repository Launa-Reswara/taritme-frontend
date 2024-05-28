import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
});

export const registrationSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  password: z.string().min(1),
});

export const loginAdminSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
});

export const penilaianSchema = z.object({
  ulasan: z.string().min(20),
});

export const ikutiKursusSchema = z.object({
  tgl_kursus: z.string().date().min(1),
  nama: z.string().min(1),
  no_hp: z.string().min(12),
  email: z.string().email().min(1),
  daerah: z.string().min(1),
});
