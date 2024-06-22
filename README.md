<div align="center">
  <h1>Taritme</h1>
  <p>Kenali Budaya, Mulai dari Tari!</p>
</div>

## MVP Features

- Temukan Pelatih
- Arsip Kesenian
- Komunitas

## Screenshots

|                                                                      |                                                                      |
| :------------------------------------------------------------------: | :------------------------------------------------------------------: |
| ![pic 1](./public/docs/Screenshot%20from%202024-06-21%2023-21-22.png) | ![pic 2](./public/docs/Screenshot%20from%202024-06-21%2023-21-30.png) |
| ![pic 3](./public/docs/Screenshot%20from%202024-06-21%2023-21-38.png) | ![pic 4](./public/docs/Screenshot%20from%202024-06-21%2023-21-46.png) |
| ![pic 5](./public/docs/Screenshot%20from%202024-06-21%2023-22-03.png) | ![pic 6](./public/docs/Screenshot%20from%202024-06-21%2023-22-13.png) |
| ![pic 7](./public/docs/Screenshot%20from%202024-06-21%2023-25-02.png) | ![pic 8](./public/docs/Screenshot%20from%202024-06-21%2023-25-09.png) |
| ![pic 9](./public/docs/Screenshot%20from%202024-06-21%2023-25-13.png) | ![pic 10](./public/docs/Screenshot%20from%202024-06-21%2023-25-36.png) |
| ![pic 11](./public/docs/Screenshot%20from%202024-06-21%2023-26-35.png) | ![pic 12](./public/docs/Screenshot%20from%202024-06-21%2023-26-41.png) |
| ![pic 13](./public/docs/Screenshot%20from%202024-06-21%2023-27-18.png) | ![pic 14](./public/docs/Screenshot%20from%202024-06-22%2021-21-20.png) |
| ![pic 15](./public/docs/Screenshot%20from%202024-06-22%2021-38-47.png) | ![pic 16](./public/docs/Screenshot%20from%202024-06-22%2021-38-54.png) |
| ![pic 17](./public/docs/Screenshot%20from%202024-06-22%2021-39-09.png) | ![pic 18](./public/docs/Screenshot%20from%202024-06-22%2021-39-34.png) |
| ![pic 19](./public/docs/Screenshot%20from%202024-06-22%2021-39-43.png) | ![pic 20](./public/docs/Screenshot%20from%202024-06-22%2021-39-49.png) |
| ![pic 13](./public/docs/Screenshot%20from%202024-06-22%2021-39-59.png) |

## Tech Stack

- React JS
- Typescript
- Tailwind CSS + shadcn/ui
- Framer Motion
- React Query
- Redux Toolkit
- Contentful
- Mailerlite
- Cypress

## Getting Started

- Clone repo ini.
- Masuk ke folder project, kemudian ketikkan `npm install` untuk menginstall semua dependencies yang diperlukan.
- Setelah itu, ketik `npm run dev` untuk menjalankan project dan lihat hasilnya di Browser => http://localhost:3000
- Jika ingin mengetes project ini dengan Docker, silahkan pastikan Docker telah terinstall, dan ketik `docker compose up --build`.

## Note

- Project ini dideploy di VPS Ubuntu 22.04, menggunakan Nginx sebagai Web Server, PM2 untuk menjalankan + otomasi bagian Backend, dan Cloudflare untuk Subdomain.
- Project ini menggunakan conventional commits untuk style setiap commit. Silahkan baca [disini](https://www.conventionalcommits.org/en/v1.0.0/) untuk mempelajarinya.
- Untuk isolated deployment/testing, project ini menggunakan Docker. Silahkan baca [disini](https://www.docker.com/) untuk mengetahui apa itu Docker. Untuk tutorial belajar dasar-dasar Docker, silahkan ke playlist videonya [Pak Eko PZN](https://www.youtube.com/watch?v=3_yxVjV88Zk).
- Project ini menggunakan Typescript sebagai bahasa utama. Silahkan baca [disini](https://www.typescriptlang.org/) untuk mengetahui apa itu Typescript. Untuk tutorial belajar dasar-dasar Typescript, silahkan ke playlist videonya [Pak Eko PZN](https://www.youtube.com/watch?v=C_C64faSO4c).
- Untuk E2E (End to End) Testing, project ini menggunakan Cypress. Silahkan baca [dokumentasinya](https://docs.cypress.io/guides/overview/why-cypress) untuk mengetahui lebih dalam tentang Cypress.
