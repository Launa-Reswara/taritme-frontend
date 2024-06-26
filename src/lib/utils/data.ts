import { ArsipKesenianProps } from "@/types";

export const listArsipKesenian: ArsipKesenianProps[] = [
  {
    id: 1,
    author: "Leonardo Da Vince",
    title: "Tari Piring",
    date: "May 31th, 2024",
    preview_writing:
      "Tari Piriang atau Tari Piring merupakan salah satu tarian tradisional di Indonesia yang berasal dari Suku Minangkabau. Secara tradisional, Tari Piring berasal dari Kota Solok, Provinsi Sumatera barat. Saat ini...",
    preview_image: "/images/tari-piring-arsipkesenian.png",
    total_like: 999,
    total_comments: 12,
  },
  {
    id: 2,
    author: "Leonardo Da Vince",
    title: "Tari Indang Badindin",
    date: "May 31th, 2024",
    preview_writing:
      "Tari Dindin Badindin ini merupakan salah satu tari tradisional yang berasal dari Pariaman, Provinsi Sumatera Barat. Indang sendiri berarti gendang kecil, tarian ini mirip dengan Tari Saman yang...",
    preview_image: "/images/tari-piring-arsipkesenian.png",
    total_like: 999,
    total_comments: 12,
  },
  {
    id: 3,
    author: "Leonardo Da Vince",
    title: "Tari Payung",
    date: "May 31th, 2024",
    preview_writing:
      "Tari Payung merupakan tarian tradisional dari Minangkabau, Sumatra Barat dengan perlengkapan utama berupa payung. Tarian daerah yang dikenal oleh masyarakat bersamaan dengan Tari Piring, Tari...",
    preview_image: "/images/tari-piring-arsipkesenian.png",
    total_like: 999,
    total_comments: 12,
  },
  {
    id: 4,
    author: "Leonardo Da Vince",
    title: "Tari Ambek-ambek Koto Anau",
    date: "May 31th, 2024",
    preview_writing:
      "Tari Ambek-ambek Koto adalah salah satu tarian tradisional darii Kota Anau Kabupaten Solok Provinsi Sumatera Barat. Tari Ambek-ambek Koto sangat berbeda dari tari pada umumnya...",
    preview_image: "/images/tari-piring-arsipkesenian.png",
    total_like: 999,
    total_comments: 12,
  },
  {
    id: 5,
    author: "Leonardo Da Vince",
    title: "Tari Randai",
    date: "May 31th, 2024",
    preview_writing:
      "Tari randai merupakan tarian asal Sumatera Barat dan menjadi salah satu seni tari tradisional kebanggaan masyarakat Minangkabau. Uniknya, tari randai ini mengkombinasikan seni gerak...",
    preview_image: "/images/tari-piring-arsipkesenian.png",
    total_like: 999,
    total_comments: 12,
  },
];

/*export const listKomunitas: KomunitasProps[] = [
  {
    id: 1,
    name: "Komunitas sanggar budaya 1",
    preview_image: "/images/sanggar1.png",
    description:
      "Sebuah komunitas yang memadukan keindahan gerakan tradisional dengan nuansa modern, menciptakan karya-karya yang memikat hati penonton dari berbagai kalangan.",
  },
  {
    id: 2,
    name: "Komunitas sanggar budaya 2",
    preview_image: "/images/sanggar2.png",
    description:
      "Menyajikan pertunjukan yang menggabungkan elemen-elemen tari dari berbagai daerah di Indonesia, merayakan keberagaman budaya dalam setiap gerakan.",
  },
  {
    id: 3,
    name: "Komunitas sanggar budaya 3",
    preview_image: "/images/sanggar3.png",
    description:
      "Menciptakan ruang bagi generasi muda untuk mempelajari dan melestarikan warisan budaya melalui tarian-tarian klasik dan kontemporer.",
  },
  {
    id: 4,
    name: "Komunitas sanggar budaya 4",
    preview_image: "/images/sanggar4.png",
    description:
      "Merangkul ragam etnis dan kepercayaan dalam tarian-tarian mereka, menggambarkan kekayaan budaya Indonesia melalui gerakan-gerakan yang penuh semangat.",
  },
  {
    id: 5,
    name: "Komunitas sanggar budaya 5",
    preview_image: "/images/sanggar5.png",
    description:
      "Menghidupkan kembali cerita-cerita klasik melalui tarian-tarian yang elegan dan penuh makna, menyuarakan warisan budaya sebagai bagian tak terpisahkan dari identitas bangsa.",
  },
  {
    id: 6,
    name: "Komunitas sanggar budaya 6",
    preview_image: "/images/sanggar6.png",
    description:
      "Menjelajahi kreativitas melalui tarian, menggabungkan elemen-elemen modern dengan tradisional untuk menciptakan karya-karya yang menyentuh dan menginspirasi.",
  },
];
*/

export const sidebarLinksList = [
  {
    id: 1,
    name: "Dashboard",
    pathname: "/admin",
  },
  {
    id: 2,
    name: "Pelatih",
    pathname: "/admin/pelatih",
  },
  {
    id: 3,
    name: "Arsip",
    pathname: "/admin/arsip",
  },
];

export const pelatihList = [
  {
    id: 1,
    foto: "/images/foto-icon.svg",
    nama: "Riri Sarwati",
    nohp: "081234567810",
    email: "ririesarwa@mail",
    status: "Tidak Aktif",
  },
  {
    id: 2,
    foto: "/images/foto-icon.svg",
    nama: "Luna Maya",
    nohp: "089765412389",
    email: "lunamay@mail",
    status: "Aktif",
  },
];

export const arsipList = [
  {
    id: 1,
    tanggal: "12/03/2024",
    penulis: "Leonardo Da Vince",
    judul: "Tari Piring",
    isi: "Tari piring adalah...",
    foto: "/images/foto-tari-piring-arsip.png",
  },
  {
    id: 2,
    tanggal: "10/04/2024",
    penulis: "Leonardo Da Vince",
    judul: "Tari Payung",
    isi: "Tari payung berasal",
    foto: "/images/foto-tari-payung-arsip.png",
  },
];

export const riwayatKursusList = [
  {
    id: 1,
    name: "Luna Maya",
    description:
      "Instruktur tari Sumatra Barat yang memberikan ilmu nya melalui kursus tari.",
    image: "/images/lunamaya-instruktur-tari.png",
    rating: 4.9,
    total_review: 5,
    price: 100000,
  },
  {
    id: 2,
    name: "Soimah",
    description:
      "Instruktur tari Sumatra Barat yang memberikan ilmu nya melalui kursus tari.",
    image: "/images/soimah-instruktur-tari.png",
    rating: 4.9,
    total_review: 10,
    price: 100000,
  },
  {
    id: 3,
    name: "Sandrina",
    description:
      "Instruktur tari Sumatra Barat yang memberikan ilmu nya melalui kursus tari.",
    image: "/images/sandrina-instruktur-tari.png",
    rating: 4.9,
    total_review: 10,
    price: 100000,
  },
];

export const ulasanList = [
  {
    id: 1,
    name: "Cika",
    rating: 5,
    comment:
      "Pelatih Lunamaya sangat keren, dan mudah dipahami jika memberikan gerakan",
  },
  {
    id: 2,
    name: "Kaguya-sama",
    rating: 5,
    comment:
      "Sangat rekomen, penjelasannya sangat mudah dipahami serta natural",
  },
  {
    id: 3,
    name: "Rimuru",
    rating: 5,
    comment: "GGWP, aku langsung jadi sepuh bjir dalam waktu 1 minggu 😎😎",
  },
  {
    id: 4,
    name: "Roronoa Zoro",
    rating: 5,
    comment: "Bagus",
  },
  {
    id: 5,
    name: "Anonymous",
    rating: 4,
    comment: "Pelatih ini datangnya lama, jadi harus lama menunggu",
  },
];
