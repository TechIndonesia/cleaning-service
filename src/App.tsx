import { useState, useEffect } from "react";

// --- WhatsApp link generator ---
const WA_NUMBER = "6289524262906";
const WA_MESSAGE = encodeURIComponent(
  "Halo CV Cleaning Services! Saya ingin informasi lebih lanjut tentang layanan cleaning. 🙏"
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

// --- Icons as inline SVGs ---
function IconCheck({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconClock({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconMapPin({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconShield({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconStar({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconBuilding({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M8 10h.01M12 6h.01M12 10h.01M16 6h.01M16 10h.01" />
    </svg>
  );
}

function IconHome({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconWarehouse({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V5l9-4 9 4v16" />
      <path d="M4 21h16" />
      <path d="M8 10h3v4H8zM13 10h3v4h-3z" />
    </svg>
  );
}

function IconPhone({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconSparkles({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z" />
      <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8z" />
    </svg>
  );
}

function IconQuote({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5v-2.5c1-.333 1.667-1.167 2-2.5H10V11zM20 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5v-2.5c1-.333 1.667-1.167 2-2.5H20V11z" />
    </svg>
  );
}

// --- Typewriter effect ---
function Typewriter({ texts, className = "" }: { texts: string[]; className?: string }) {
  const [current, setCurrent] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const full = texts[current];
    const speed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplay(full.slice(0, display.length + 1));
        if (display.length + 1 === full.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplay(full.slice(0, display.length - 1));
        if (display.length - 1 === 0) {
          setIsDeleting(false);
          setCurrent((p) => (p + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [display, isDeleting, current, texts]);

  return (
    <span className={className}>
      {display}
      <span className="animate-pulse text-white/80">|</span>
    </span>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      {/* ========== NAVBAR ========== */}
      <Navbar />

      {/* ========== HERO ========== */}
      <Hero />

      {/* ========== PROMO BANNER ========== */}
      <PromoBanner />

      {/* ========== LAYANAN ========== */}
      <Services />

      {/* ========== MENGAPA KAMI ========== */}
      <WhyUs />

      {/* ========== AREA LAYANAN ========== */}
      <Coverage />

      {/* ========== MOTTO / TESTIMONI ========== */}
      <Motto />

      {/* ========== CTA FINAL ========== */}
      <FinalCTA />

      {/* ========== FOOTER ========== */}
      <Footer />

      {/* ========== FLOATING WA BUTTON ========== */}
      <FloatingWA />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-md shadow-blue-200">
            <IconSparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold leading-tight text-blue-700 sm:text-base">CV Cleaning Services</p>
            <p className="text-[10px] text-slate-400 leading-tight sm:text-xs">Professional & Terpercaya</p>
          </div>
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-green-200 transition-all hover:bg-green-600 active:scale-95 sm:px-6 sm:py-2.5"
        >
          <IconPhone className="w-4 h-4" />
          <span>Hubungi Kami</span>
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 h-[600px] w-[600px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 h-[400px] w-[400px] rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Tersedia Setiap Hari • 08:00 - 22:00
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Bersih Maksimal, <br />
            <span className="text-blue-200">Hidup Nyaman</span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-blue-100 sm:text-lg">
            <Typewriter
              texts={[
                "Rumah Kinclong Seperti Baru ✨",
                "Apartemen Rapi & Wangi 🌿",
                "Kantor Bersih, Bisnis Lancar 💼",
                "Gudang Steril Bebas Debu 🏭",
                "Gedung Megah Tanpa Noda 🏢",
              ]}
              className="font-medium"
            />
          </p>

          <p className="mt-4 text-sm text-blue-200/80 sm:text-base">
            CV Cleaning Services — solusi bersih-bersih profesional untuk Rumah, Apartemen,
            Perkantoran, Gudang, Gedung & lainnya di Surabaya, Gresik, dan Sidoarjo.
          </p>

          {/* Price + CTA */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 px-6 py-3 text-center">
              <p className="text-xs text-blue-200">Mulai dari</p>
              <p className="text-3xl font-extrabold text-white">100K<span className="text-lg font-normal text-blue-200">/3 Jam</span></p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-green-500/40 transition-all hover:bg-green-400 hover:shadow-green-400/50 active:scale-95"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative h-16 sm:h-24">
        <svg className="absolute bottom-0 w-full h-16 sm:h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,60 C360,120 1080,0 1440,60 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
}

function PromoBanner() {
  return (
    <section className="relative -mt-1 bg-white px-4 py-6 sm:py-10">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 p-6 shadow-2xl shadow-orange-200/50 sm:p-10">
          {/* Decorative */}
          <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/15 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

          <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm sm:h-24 sm:w-24">
              <span className="text-5xl sm:text-6xl">🎁</span>
            </div>
            <div className="flex-1">
              <span className="inline-block rounded-full bg-white/25 px-4 py-1 text-xs font-bold text-white backdrop-blur-sm">
                PROMO SPESIAL
              </span>
              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                FREE Pest Control!
              </h2>
              <p className="mt-2 text-base text-white/90 sm:text-lg">
                Dapatkan <strong>layanan pest control GRATIS</strong> untuk mengatasi & sterilisasi
                hama di area Anda. Lindungi keluarga dan karyawan dari serangga & tikus pengganggu!
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-orange-600 shadow-lg transition-all hover:bg-orange-50 active:scale-95 sm:text-base"
              >
                Klaim Promo Sekarang →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: <IconHome className="w-8 h-8" />,
    title: "Rumah",
    desc: "Ruang tamu, kamar tidur, dapur, kamar mandi — seluruh rumah bersih menyeluruh dan wangi.",
  },
  {
    icon: <IconBuilding className="w-8 h-8" />,
    title: "Apartemen",
    desc: "Layanan profesional untuk unit apartemen, termasuk balkon dan area servis.",
  },
  {
    icon: <IconBuilding className="w-8 h-8" />,
    title: "Perkantoran",
    desc: "Ruang kerja bersih & higienis meningkatkan produktivitas tim Anda.",
  },
  {
    icon: <IconWarehouse className="w-8 h-8" />,
    title: "Gudang",
    desc: "Bebas debu & kotoran, penyimpanan aman dan terjaga kebersihannya.",
  },
  {
    icon: <IconBuilding className="w-8 h-8" />,
    title: "Gedung",
    desc: "Gedung bertingkat, aula, lobby, koridor — kami siap bersihkan semuanya.",
  },
  {
    icon: <IconSparkles className="w-8 h-8" />,
    title: "Lainnya",
    desc: "Butuh layanan khusus? Konsultasikan kebutuhan Anda, kami siap bantu!",
  },
];

function Services() {
  return (
    <section id="layanan" className="bg-slate-50 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-700">
            Layanan Kami
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Semua Jenis Ruangan,{" "}
            <span className="text-blue-600">Kami Tuntaskan!</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Dari hunian pribadi hingga properti komersial — CV Cleaning Services hadir dengan
            peralatan modern dan tenaga profesional.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-200 hover:-translate-y-1 sm:p-8"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 group-hover:from-blue-500 group-hover:to-blue-700 group-hover:text-white transition-all">
                {svc.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{svc.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const whyItems = [
  {
    icon: <IconShield className="w-6 h-6" />,
    title: "Tenaga Profesional",
    desc: "Tim kami terlatih, berseragam rapi, dan berintegritas tinggi.",
  },
  {
    icon: <IconStar className="w-6 h-6" />,
    title: "Peralatan Lengkap",
    desc: "Vacuum, steam cleaner, chemical aman — semuanya kami bawa sendiri.",
  },
  {
    icon: <IconCheck className="w-6 h-6" />,
    title: "Hasil Terjamin",
    desc: "Tidak bersih? Kami akan kembali. Kepuasan Anda prioritas kami.",
  },
  {
    icon: <IconClock className="w-6 h-6" />,
    title: "Fleksibel & Tepat Waktu",
    desc: "Buka 08.00–22.00 setiap hari. Tepat waktu dan efisien.",
  },
  {
    icon: <IconSparkles className="w-6 h-6" />,
    title: "Free Pest Control",
    desc: "Dapatkan layanan pest control gratis di setiap pemesanan cleaning!",
  },
  {
    icon: <IconMapPin className="w-6 h-6" />,
    title: "Coverage Luas",
    desc: "Melayani Surabaya, Gresik, Sidoarjo dan area sekitarnya.",
  },
];

function WhyUs() {
  return (
    <section className="bg-white px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-700">
            Mengapa Memilih Kami
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Lebih dari Sekadar{" "}
            <span className="text-blue-600">Bersih-Bersih</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map((item, i) => (
            <div key={i} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-5 sm:p-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Text */}
          <div>
            <span className="inline-block rounded-full bg-blue-200/60 px-4 py-1.5 text-xs font-semibold text-blue-800">
              Area Layanan
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Melayani <span className="text-blue-600">3 Kota</span> Besar
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Tim kami siap hadir di lokasi Anda di wilayah{" "}
              <strong>Surabaya, Gresik, dan Sidoarjo</strong>. Dengan jaringan
              tenaga yang luas, kami menjamin respon cepat dan pelayanan maksimal.
            </p>

            <div className="mt-6 space-y-3">
              {["Surabaya", "Gresik", "Sidoarjo"].map((city) => (
                <div key={city} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                    <IconMapPin className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-slate-800">{city}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-white/70 p-4 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <IconMapPin className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">Alamat Kantor Kami:</p>
                  <p className="text-sm text-slate-600">
                    Jl. Karanggayam No.53, Tambaksari, Surabaya
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Map-like visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 shadow-2xl shadow-blue-300/40 flex flex-col justify-center">
              {/* Decorative map dots */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
                  <div>
                    <p className="font-bold text-white text-lg">Surabaya</p>
                    <p className="text-xs text-blue-200">Pusat Operasional</p>
                  </div>
                </div>
                <div className="ml-8 border-l-2 border-dashed border-white/30 pl-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-amber-400 animate-pulse shadow-lg shadow-amber-400/50" />
                    <div>
                      <p className="font-bold text-white">Gresik</p>
                      <p className="text-xs text-blue-200">Area Industri</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50" />
                    <div>
                      <p className="font-bold text-white">Sidoarjo</p>
                      <p className="text-xs text-blue-200">Area Perkotaan</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-center text-sm text-blue-200/80">
                📍 Jangkauan hingga radius 50km dari Surabaya
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Motto() {
  return (
    <section className="bg-white px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <IconQuote className="mx-auto text-blue-200 w-10 h-10" />
        <blockquote className="mt-6">
          <p className="text-2xl font-extrabold text-slate-800 leading-snug sm:text-4xl sm:leading-tight">
            "Kepuasan Pelanggan Adalah{" "}
            <span className="text-blue-600">Prioritas Kami</span>"
          </p>
        </blockquote>
        <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 mx-auto" />
        <p className="mt-6 text-slate-500 leading-relaxed">
          Setiap sudut ruangan Anda adalah tanggung jawab kami. Kami tidak hanya membersihkan —
          kami memastikan kenyamanan, kesehatan, dan ketenangan pikiran Anda. Karena Anda layak
          mendapatkan yang terbaik.
        </p>
        <p className="mt-4 text-sm font-semibold text-blue-700">
          — Tim CV Cleaning Services
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Siap Bikin Ruangan Anda{" "}
          <span className="text-blue-200">Bersinar?</span>
        </h2>
        <p className="mt-4 text-blue-100 leading-relaxed">
          Klik tombol di bawah untuk langsung terhubung dengan admin kami melalui WhatsApp.
          Dapatkan penawaran terbaik dan FREE pest control!
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-400 px-8 py-4 text-base font-bold text-blue-900 shadow-xl shadow-green-400/30 transition-all hover:bg-green-300 active:scale-95"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            Chat Admin via WhatsApp
          </a>
          <a
            href={`tel:+62${WA_NUMBER.substring(1)}`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/10 active:scale-95"
          >
            <IconPhone className="w-5 h-5" />
            Telepon Langsung
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 px-4 py-12 text-slate-300 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-600">
                <IconSparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white">CV Cleaning Services</p>
                <p className="text-xs text-slate-400">Professional & Terpercaya</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Solusi bersih-bersih profesional untuk hunian & bisnis Anda. Melayani
              Surabaya, Gresik, dan Sidoarjo setiap hari.
            </p>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Informasi</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <IconMapPin className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                <span>Jl. Karanggayam No.53, Tambaksari, Surabaya</span>
              </li>
              <li className="flex items-center gap-2">
                <IconClock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Buka: 08:00 - 22:00 (Setiap Hari)</span>
              </li>
              <li className="flex items-center gap-2">
                <IconStar className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Mulai 100K / 3 Jam</span>
              </li>
            </ul>
          </div>

          {/* Contact + Coverage */}
          <div>
            <h4 className="font-bold text-white mb-4">Hubungi & Area</h4>
            <p className="text-sm text-slate-400 mb-3">
              📞 WhatsApp:{" "}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
              >
                0895-2426-2906
              </a>
            </p>
            <div className="flex flex-wrap gap-2">
              {["Surabaya", "Gresik", "Sidoarjo"].map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
                >
                  📍 {c}
                </span>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-green-500 active:scale-95"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Chat Admin
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} CV Cleaning Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FloatingWA() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-2xl shadow-green-400/40 transition-all hover:scale-110 hover:bg-green-400 active:scale-95 animate-bounce sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
      title="Chat via WhatsApp"
    >
      <svg className="h-7 w-7 text-white sm:h-8 sm:w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white">
        1
      </span>
    </a>
  );
}
