<div align="center">
  <h1>Taritme</h1>
  <p>Kenali Budaya, Mulai dari Tari!</p>
</div>

![thumbnail](./public/images/thumbnail.png)

## About

Our website is based on an online platform that is presented as an innovative solution by making it easier for users to learn more about Indonesian culture, especially finding professional dance trainers, providing informative articles about traditional dance, and offering a community platform for traditional dance lovers to share experiences and make friends. Users can learn to explore traditional dances more easily, help preserve culture, and build a strong community network. Taritme is a complete solution for learning to understand and preserve traditional dance.

## Features

- Temukan Pelatih
- Arsip Kesenian
- Komunitas

## Screenshots

|                                                                      |                                                                      |
| :------------------------------------------------------------------: | :------------------------------------------------------------------: |
| ![pic 1](./public/docs/Screenshot%20from%202024-06-23%2006-36-43.png) | ![pic 2](./public/docs/Screenshot%20from%202024-06-21%2023-21-30.png) |
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

### A. Prerequisites

- Node.js (Latest Version).
- Docker.

### B. Process

- Make sure that you've already setup the backend side. 
- Clone this repo.
- Go to the project folder, and type `npm install` to install all needed dependencies. 
- Create a `.env` file. You can check the format in `.env.example` file.
- After that, type `npm run dev` to run this project. See the result in the Browser => http://localhost:3000.
- If you want to build this project in Docker Container, just type `docker compose up --build` in your terminal and see the result.

## Note

- This project are deployed in a VPS with Ubuntu 22.04 as the operating system, using Nginx as a Web Server, PM2 to run and automate Backend workflow, and Cloudflare for subdomain.
- We use conventional commits as commit style and rules. If you want to know more about it, [read here](https://www.conventionalcommits.org/en/v1.0.0/).
- For isolated build/deployment/testing, we use Docker. If you want to know more about it, [read here](https://www.docker.com/).
- This project are using Typescript as the main programming language for Frontend side. If you want to know more about it, [read here](https://www.typescriptlang.org/).
- For E2E (End to End) Testing, this project are using Cypress. If you want to know more about it, [read the documentation](https://docs.cypress.io/guides/overview/why-cypress).
