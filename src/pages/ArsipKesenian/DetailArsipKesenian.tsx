import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import Image from "@/components/ui/image";
import { Heading, Paragraph } from "@/components/ui/typography";
import { listArsipKesenian } from "@/lib/utils/data";
import { MessageCircle, Share, ThumbsUp } from "lucide-react";

export default function DetailArsipKesenian() {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <Image src="/images/logo.svg" alt="logo" className="w-20 h-20" />
          <Paragraph className="text-sm">May 31th, 2024</Paragraph>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/leonardo-da-vince.svg"
            alt="author"
            className="w-12 h-12"
          />
          <div className="flex flex-col">
            <Paragraph className="font-semibold">Leonardo Da Vinci</Paragraph>
            <div className="flex items-center space-x-2">
              <Paragraph className="text-xs">Penulis</Paragraph>
              <Image
                src="/images/electric-icon.svg"
                alt="electric icon"
                className="w-4 h-4"
              />
              <Paragraph className="text-xs">5 mins read</Paragraph>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 md:space-x-8">
          <button className="flex items-center space-x-1">
            <ThumbsUp size={16} />
            <span className="text-xs md:text-sm">999</span>
          </button>
          <button className="flex items-center space-x-1">
            <MessageCircle size={16} />
            <span className="text-xs md:text-sm">12</span>
          </button>
          <button className="flex items-center space-x-1">
            <Share size={16} />
            <span className="text-xs md:text-sm">12</span>
          </button>
        </div>
      </div>
      <div className="mt-10">
        <Heading
          as="h2"
          className="font-semi-bold mb-2"
          style={{ fontSize: "2rem" }}
        >
          Tari Piring
        </Heading>
        <div
          className="rounded-xl text-center drop-shadow-lg flex justify-center items-center w-full h-[355px] flex-col mt-10"
          style={{
            backgroundImage: `url('/images/taripiring1.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <Paragraph className="text-justify mt-10">
          Tari piring (Jawi: تاري ڤيريڠ; Minangkabau: Tari Piring) adalah tarian
          tradisional Minangkabau yang berasal dari Sumatera Barat, Solok.
          Tarian ini menampilkan atraksi menggunakan piring. Para penari
          mengayunkan piring di tangan mengikuti gerakan-gerakan cepat yang
          teratur, tanpa satu pun piring terlepas dari tangan. Gerakannya
          diambil dari langkah dalam silat Minangkabau atau silek.
        </Paragraph>
        <Paragraph className="text-justify mt-10">
          Tari ini dipopulerkan oleh Huriah Adam. Saat ini, tari piring
          dipertunjukkan untuk penyambutan tamu terhormat atau pembukaan upacara
          adat. Bersama dengan tari saman, pendet, dan jaipong, tari ini menjadi
          tarian populer Indonesia yang kerap ditampilkan di ajang promosi
          pariwisata dan kebudayaan Indonesia.
        </Paragraph>
      </div>
      <h2 className="font-bold mb-2 mt-12" style={{ fontSize: "1.5rem" }}>
        Sejarah Tari Piring
      </h2>
      <br />
      <Paragraph className="text-justify">
        Secara tradisional, tari ini berasal dari Solok, Sumatera Barat. Menurut
        legenda awal kemunculannya, Tari Piring ini berfungsi sebagai tarian
        tinggi dan mengandung nilai-nilai kebudayaan leluhur yang sangat
        mendalam. Tari ini juga merupakan ritual ucapan rasa syukur masyarakat
        setempat kepada dewa-dewa setelah mendapatkan hasil panen yang melimpah
        ruah. Ritual dilakukan dengan membawa sesaji dalam bentuk makanan yang
        diletakkan di dalam piring sembari melangkah dengan gerakan yang
        dinamis.
      </Paragraph>
      <br />
      <Paragraph className="text-justify">
        Setelah masuknya agama Islam ke Minangkabau, tari piring tidak lagi
        digunakan sebagai ritual ucapan rasa syukur kepada dewa-dewa. Akan
        tetapi, tari tersebut digunakan sebagai sarana hiburan bagi masyarakat
        banyak yang ditampilkan pada acara-acara keramaian.
      </Paragraph>
      <div
        className="rounded-xl text-center drop-shadow-lg flex justify-center items-center w-full h-[355px] flex-col mt-10"
        style={{
          backgroundImage: `url('/images/taripiring2.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <h2 className="font-bold mb-2 mt-12" style={{ fontSize: "1.5rem" }}>
        Gerakan Tari piring
      </h2>
      <br />
      <Paragraph className="text-justify">
        Gerakan tari piring pada umumnya adalah meletakkan dua piring di atas
        dua telapak tangan. Penari mengayunkan piring dalam gerakan-gerakan yang
        cepat, diselingi dengan mendentingkan piring atau dua cincin di jari
        penari terhadap piring yang dibawanya. Pada akhir tarian, biasanya
        piring-piring yang dibawakan oleh para penari dilemparkan ke lantai dan
        para penari akan menari di atas pecahan-pecahan piring.
      </Paragraph>

      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 order-2 lg:order-1">
            <div className="bg-gray-200 h-96 lg:h-400 lg:w-600 rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1O_OYwnV6iw?si=oHWbBkXFLHXDLL9e"
                title="YouTube Video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="col-span-2 order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-2 h-full">
              <div className="bg-blue-200 relative rounded-xl">
                <div
                  className="w-full h-full bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: `url('/images/gerakantari1.png')` }}
                ></div>
              </div>

              <div className="bg-green-200 relative rounded-xl">
                <div
                  className="w-full h-full bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: `url('/images/gerakantari2.png')` }}
                ></div>
              </div>

              <div className="bg-yellow-200 relative rounded-xl">
                <div
                  className="w-full h-full bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: `url('/images/gerakantari3.png')` }}
                ></div>
              </div>

              <div className="bg-pink-200 relative rounded-xl">
                <div
                  className="w-full h-full bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: `url('/images/gerakantari4.png')` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Paragraph className="text-justify mt-10">
        Jumlah penari tari piring biasanya berjumlah ganjil yang terdiri dari
        tiga sampai tujuh orang. Para penari mengenakan pakian berwarna cerah
        dengan nuansa warna merah dan kuning keemasan serta tutup kepala.
      </Paragraph>
      <br />
      <Paragraph className="text-justify">
        Tarian ini diiringi oleh kombinasi alat musik talempong dan saluang.
        Tempo alunan musik awalnya lembut dan teratur, kemudian lama-kelamaan
        berubah menjadi lebih cepat.
      </Paragraph>
      <br />
      <Paragraph className="text-justify">
        Gerakan dalam tari piring ini merupakan salah satu unsur penting untuk
        menjadikan tarian menjadi bentuk yang bermutu. Tari Piring ini bersumber
        dari beberapa gerakan, seperti: Gerakan dasar pencak silat, Gerakan
        alang babega, gerakan tupai bagaluik, gerakan bungo kambang, dan lain
        sebagainya. Tidak hanya itu tari piring juga sering kali menggambil
        berbagai gerakan kehidupan sehari-hari, seperti : gerak bacamin, gerak
        basiang, gerak buai anak, gerak mangompu suto, gerak malunyah, gerak
        maiinjak piriang, gerak bagolek dan gerak manyemba lalok.
      </Paragraph>

      <div className="flex flex-grow justify-end space-x-4 md:space-x-8 mt-10">
        <button className="flex items-center space-x-1">
          <ThumbsUp size={16} />
          <span className="text-xs md:text-sm">999</span>
        </button>
        <button className="flex items-center space-x-1">
          <MessageCircle size={16} />
          <span className="text-xs md:text-sm">12</span>
        </button>
        <button className="flex items-center space-x-1">
          <Share size={16} />
          <span className="text-xs md:text-sm">12</span>
        </button>
      </div>

      <h2 className="font-bold mb-2 mt-12" style={{ fontSize: "1.5rem" }}>
        Baca Juga
      </h2>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {listArsipKesenian.slice(0, 3).map((item, i) => (
            <Card
              key={i}
              className="p-4 rounded-xl w-full bg-white"
              style={{ maxWidth: "400px" }} // Set max width for better responsiveness
            >
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-xl">
                <Image
                  src="/images/tari-piring-home.png"
                  alt="thumbnail"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Image
                    src="/images/electric-icon.svg"
                    alt="electric icon"
                    draggable={false}
                    className="w-4 h-4"
                  />
                  <Paragraph className="text-xs">{item.readingTime}</Paragraph>
                </div>
                <Paragraph className="font-medium mb-2">{item.title}</Paragraph>
                <div className="flex items-center space-x-2 mb-4">
                  <Image
                    src="/images/leonardo-da-vince.svg"
                    alt="author"
                    className="w-6 h-6 rounded-full"
                  />
                  <Paragraph className="text-sm">{item.author}</Paragraph>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
