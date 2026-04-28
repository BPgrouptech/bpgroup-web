"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building2,
  Leaf,
  Fuel,
  HardHat,
  ArrowRight,
  Mail,
  Phone,
  Play,
  ChevronDown,
  MapPin,
  Factory,
  Sprout,
} from "lucide-react";

const companies = [
  {
    title: "Los Lobos",
    subtitle: "Agroindustria bananera",
    text: "Producción agrícola enfocada en calidad, eficiencia operativa y crecimiento sostenible.",
    image: "/media/banano.png",
    logo: "/media/los-lobos-logo.png",
    icon: Leaf,
  },
  {
    title: "Constructora",
    subtitle: "Infraestructura y desarrollo",
    text: "Área en desarrollo para proyectos de construcción, maquinaria, obras civiles e infraestructura.",
    image: "/media/construccion.png",
    logo: "/media/constructora-logo.png",
    icon: HardHat,
  },
  {
    title: "Futuros proyectos",
    subtitle: "Energía y servicios",
    text: "Expansión hacia nuevos sectores estratégicos como estaciones de servicio, logística y desarrollo comercial.",
    image: "/media/maquinaria.png",
    logo: "/media/futuros-logo.png",
    icon: Fuel,
  },
];

const verticalVideos = [
  { src: "/media/vertical1.mp4", title: "Campo", text: "Operación agrícola" },
  { src: "/media/vertical2.mp4", title: "Maquinaria", text: "Movimiento y trabajo" },
  { src: "/media/vertical3.mp4", title: "Producción", text: "Crecimiento operativo" },
];

const horizontalVideos = [
  { src: "/media/horizontal1.mp4", title: "Agroindustria" },
  { src: "/media/horizontal2.mp4", title: "Infraestructura" },
];

const gallery = [
  "/media/galeria1.png",
  "/media/galeria2.png",
  "/media/galeria3.png",
  "/media/galeria4.png",
];

const metrics = [
  { value: "03", label: "Sectores estratégicos", icon: Factory },
  { value: "+", label: "Proyectos en crecimiento", icon: Sprout },
  { value: "360°", label: "Visión empresarial", icon: MapPin },
];

export default function Home() {
  return (
    <main className="bg-[#070b12] text-white overflow-hidden">
      <Header />
      <Hero />
      <Metrics />
      <About />
      <Companies />
      <VideoShowcase />
      <VerticalVideos />
      <VisualStory />
      <Gallery />
      <Contact />
    </main>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#070b12]/85 py-1 shadow-2xl shadow-black/30 backdrop-blur-2xl"
          : "border-b border-white/5 bg-transparent py-3"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/media/bp-logo.png"
            alt="BP Group"
            className="h-12 w-auto object-contain"
          />
          <div className="hidden sm:block">
            <p className="font-semibold tracking-wide">BP Group</p>
            <p className="text-xs text-white/50">Grupo empresarial</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#nosotros" className="hover:text-[#c9a24d] transition">Nosotros</a>
          <a href="#empresas" className="hover:text-[#c9a24d] transition">Empresas</a>
          <a href="#videos" className="hover:text-[#c9a24d] transition">Videos</a>
          <a href="#galeria" className="hover:text-[#c9a24d] transition">Galería</a>
          <a
            href="#contacto"
            className="rounded-full bg-white px-5 py-2 font-semibold text-black hover:bg-[#c9a24d] transition"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.3]);

  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <motion.video
        style={{ scale, opacity }}
        className="absolute inset-0 h-full w-full object-cover"
        src="/media/hero-horizontal.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,77,0.18),transparent_42%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#070b12]/15 to-[#070b12]" />

      <motion.div
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto max-w-6xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="mb-5 text-xs uppercase text-[#c9a24d] md:text-sm"
        >
          Agroindustria · Construcción · Inversión
        </motion.p>

        <h1 className="text-6xl font-black tracking-tight md:text-9xl">
          BP Group
        </h1>

        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/75 md:text-2xl">
          Un grupo empresarial diseñado para crecer, operar y transformar sectores estratégicos.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#empresas"
            className="rounded-full bg-[#c9a24d] px-8 py-4 font-bold text-black shadow-xl shadow-[#c9a24d]/20 hover:bg-[#e0bd63] transition"
          >
            Conocer el grupo
          </a>

          <a
            href="#videos"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-white backdrop-blur-md hover:bg-white/10 transition"
          >
            Ver operación <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>

      <motion.a
        href="#nosotros"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50"
      >
        Scroll
        <ChevronDown className="text-[#c9a24d]" />
      </motion.a>
    </section>
  );
}

function Metrics() {
  return (
    <section className="relative z-10 mx-auto -mt-20 max-w-7xl px-6 pb-16">
      <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl md:grid-cols-3">
        {metrics.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="rounded-[1.5rem] border border-white/10 bg-black/20 p-7"
            >
              <Icon className="mb-6 text-[#c9a24d]" />
              <p className="text-5xl font-black">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/45">
                {item.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="nosotros"
      className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2"
    >
      <motion.div
        initial={{ opacity: 0, x: -45 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c9a24d]">
          Quiénes somos
        </p>

        <h2 className="text-4xl font-black leading-tight md:text-7xl">
          Estructura, visión y operación real.
        </h2>

        <p className="mt-7 text-lg leading-8 text-white/65">
          BP Group integra empresas enfocadas en sectores estratégicos como la
          agroindustria, construcción, maquinaria, desarrollo e inversión.
          Nuestro objetivo es construir operaciones sólidas, eficientes y
          preparadas para crecer.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="font-semibold text-[#c9a24d]">Visión empresarial</p>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Crecimiento con estructura y enfoque a largo plazo.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="font-semibold text-[#c9a24d]">Operación integrada</p>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Empresas conectadas por estrategia, recursos y ejecución.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-[2.5rem] bg-[#c9a24d]/10 blur-3xl" />
        <img
          src="/media/equipo.png"
          alt="Equipo BP Group"
          className="relative h-[560px] w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl shadow-black/40"
        />
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </motion.div>
    </section>
  );
}

function Companies() {
  return (
    <section id="empresas" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c9a24d]">
              Nuestras empresas
            </p>
            <h2 className="text-4xl font-black leading-tight md:text-7xl">
              Sectores que construyen valor.
            </h2>
          </div>
          <p className="max-w-md text-white/55">
            Un portafolio empresarial con presencia en producción, desarrollo e inversión.
          </p>
        </div>

        <div className="mb-14 grid gap-5 sm:grid-cols-3">
          {companies.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="flex min-h-40 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 hover:bg-white/[0.07] transition"
            >
              <img
                src={item.logo}
                alt={item.title}
                className="max-h-24 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {companies.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 hover:scale-[1.02] hover:border-[#c9a24d]/40 transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-2xl bg-black/45 p-3 backdrop-blur-md">
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="h-12 w-auto object-contain"
                    />
                  </div>

                  <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c9a24d] text-black">
                    <Icon />
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-sm text-[#c9a24d]">{item.subtitle}</p>
                  <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/60">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VideoShowcase() {
  return (
    <section id="videos" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c9a24d]">
            Videos institucionales
          </p>
          <h2 className="text-4xl font-black leading-tight md:text-7xl">
            Movimiento, escala y presencia.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {horizontalVideos.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/30"
            >
              <video
                className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105"
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a24d] text-black">
                  <Play size={18} fill="currentColor" />
                </div>
                <p className="text-2xl font-bold">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VerticalVideos() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c9a24d]">
            Operación en movimiento
          </p>
          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Historias visuales de la operación.
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6">
          {verticalVideos.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="relative min-w-[270px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/30 md:min-w-[340px]"
            >
              <video
                className="h-[580px] w-full object-cover"
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm text-[#c9a24d]">{item.text}</p>
                <h3 className="mt-1 text-3xl font-black">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisualStory() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-32">
      <div className="absolute inset-0">
        <img
          src="/media/maquinaria.png"
          alt="Maquinaria"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,77,0.2),transparent_45%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-[#c9a24d]"
        >
          Visión empresarial
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-4xl font-black leading-tight md:text-7xl"
        >
          Crecemos desde la tierra, la infraestructura y nuevas oportunidades.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70"
        >
          BP Group nace con una visión clara: organizar, fortalecer y expandir
          empresas con operación real, capacidad productiva y enfoque a largo
          plazo.
        </motion.p>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c9a24d]">
          Galería
        </p>
        <h2 className="text-4xl font-black leading-tight md:text-7xl">
          Operación, campo e infraestructura.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        {gallery.map((image, index) => (
          <motion.img
            key={image}
            src={image}
            alt={`Galería ${index + 1}`}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`h-80 w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl shadow-black/30 ${
              index === 0 || index === 3 ? "md:col-span-2" : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#c9a24d]">
            Contacto
          </p>
          <h2 className="text-4xl font-black leading-tight md:text-7xl">
            Hablemos de nuevos proyectos.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/65">
            Para información corporativa, alianzas, proyectos o comunicación
            empresarial, puedes contactarnos directamente.
          </p>

          <div className="mt-8 space-y-4 text-white/70">
            <p className="flex items-center gap-3">
              <Mail className="text-[#c9a24d]" /> contacto@bpgroup.mx
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-[#c9a24d]" /> +52 XXX XXX XXXX
            </p>
            <p className="flex items-center gap-3">
              <Building2 className="text-[#c9a24d]" /> BP Group
            </p>
          </div>
        </div>

        <form className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <input className="mb-4 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-[#c9a24d]" placeholder="Nombre" />
          <input className="mb-4 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-[#c9a24d]" placeholder="Correo" />
          <input className="mb-4 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-[#c9a24d]" placeholder="Teléfono" />
          <textarea className="mb-4 h-36 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 outline-none focus:border-[#c9a24d]" placeholder="Mensaje" />
          <button type="button" className="w-full rounded-full bg-[#c9a24d] px-6 py-4 font-bold text-black hover:bg-[#e0bd63] transition">
            Enviar mensaje
          </button>
        </form>
      </div>

      <footer className="mx-auto mt-20 max-w-7xl border-t border-white/10 pt-8 text-sm text-white/40">
        © {new Date().getFullYear()} BP Group. Todos los derechos reservados.
      </footer>
    </section>
  );
}