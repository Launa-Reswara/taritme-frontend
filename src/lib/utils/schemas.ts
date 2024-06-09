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

export const profileSchema = z.object({
  nama: z.string().min(1),
  no_hp: z.number().min(12).max(12),
  jenis_kelamin: z.enum(["Laki-laki", "Perempuan"]),
  umur: z.number().min(1).max(3),
  bio: z.string().min(1),
});

export const FormPelatihSchema = z.object({
  nama: z.string().min(1),
  no_hp: z.number().min(12).max(12),
  email: z.string().email().min(1),
  status: z.enum(["Aktif", "Tidak Aktif"]),
  deskripsi: z.string().min(1),
  tarif_per_jam: z.number().min(1),
});
