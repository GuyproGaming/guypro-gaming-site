"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  PlayCircle,
  ShieldCheck,
  Star,
  Bell,
  Crown,
  CheckCircle2,
  Library,
  Sparkles,
  Smartphone,
  FlaskConical,
  Cpu,
  Gauge,
  SlidersHorizontal,
  Thermometer,
  ChevronLeft,
  ChevronRight,
  Megaphone,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.guypro.gaming.guypro_gaming";

const YOUTUBE_VIDEO_ID = "tUwcihvrh0M";
const YOUTUBE_URL = `https://youtu.be/${YOUTUBE_VIDEO_ID}?si=QYSnYAMljdVviTxJ`;
const YOUTUBE_THUMBNAIL_URL = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;

const platforms = [
  "Winlator",
  "GameHub",
  "PPSSPP",
  "Xbox 360 Mobile",
  "Nintendo Switch Mobile",
  "PS Vita",
  "Android",
];

const gallery = [
  { title: "Game Lab : les jeux faits pour votre téléphone", image: "/screens/gamelab.jpg" },
  { title: "Réglages optimisés en un coup d'œil", image: "/screens/gamelab-settings.jpg" },
  { title: "Une bibliothèque pour tous vos jeux", image: "/screens/library.jpg" },
  { title: "Les jeux compatibles GameHub", image: "/screens/gamehub.jpg" },
  { title: "Vos jeux PC avec Winlator", image: "/screens/winlator.jpg" },
  { title: "Tout savoir avant de télécharger", image: "/screens/details.jpg" },
  { title: "Une communauté gaming active", image: "/screens/community.jpg" },
];

const gameLabPoints = [
  {
    icon: Cpu,
    title: "Analyse de votre appareil",
    desc: "Processeur, GPU, RAM et version d'Android sont détectés pour évaluer la puissance réelle de votre téléphone.",
  },
  {
    icon: Gauge,
    title: "Score de compatibilité",
    desc: "Chaque jeu reçoit une note sur 100 et un niveau de jouabilité, pour savoir avant d'installer.",
  },
  {
    icon: SlidersHorizontal,
    title: "Réglages recommandés",
    desc: "FPS estimés, qualité graphique et résolution conseillée, adaptés à votre modèle.",
  },
  {
    icon: Thermometer,
    title: "Chauffe et batterie",
    desc: "Anticipez l'impact sur la température et l'autonomie avant de lancer une partie.",
  },
];

const features = [
  {
    icon: FlaskConical,
    title: "Game Lab",
    desc: "Découvrez les jeux adaptés à votre téléphone, les FPS estimés et les meilleurs réglages, filtrés par plateforme : PPSSPP, Android, PlayStation et plus.",
  },
  {
    icon: Library,
    title: "Bibliothèque multi-plateformes",
    desc: "Winlator, GameHub, PPSSPP, Xbox 360 Mobile, Nintendo Switch Mobile, PS Vita… tout est rangé par catégorie.",
  },
  {
    icon: Smartphone,
    title: "Fiches détaillées",
    desc: "Captures d'écran, notes, téléchargements et description complète pour chaque jeu.",
  },
  {
    icon: Bell,
    title: "Alertes utiles",
    desc: "Soyez prévenu des nouvelles vidéos, des jeux ajoutés et des mises à jour.",
  },
  {
    icon: Crown,
    title: "Premium",
    desc: "Contact direct avec Guypro, fonctionnalités exclusives et expérience sans publicité.",
  },
];

const reviews = [
  {
    name: "Ama Kita",
    text: "Application très utile pour découvrir des jeux et retrouver facilement les infos importantes.",
  },
  {
    name: "Roland K.",
    text: "Le classement par catégories est propre et les fiches détaillées rendent l'expérience vraiment pratique.",
  },
  {
    name: "Sarah M.",
    text: "J'aime beaucoup l'ambiance gaming moderne et l'espace discussion avec la communauté.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  desc,
  center = false,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "max-w-2xl mx-auto text-center" : "max-w-2xl"}>
      <p className="text-fuchsia-300 text-xs md:text-sm font-semibold tracking-[0.22em] uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-white">
        {title}
      </h2>
      <p className="mt-4 text-slate-300 text-sm md:text-lg leading-7 md:leading-8">
        {desc}
      </p>
    </div>
  );
}

function GlowOrb({ className = "" }: { className?: string }) {
  return <div className={`absolute rounded-full blur-3xl opacity-30 ${className}`} />;
}

function PhoneFrame({
  src,
  alt,
  className = "",
  sizes = "260px",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`rounded-[2.2rem] border border-white/15 bg-[#0b0d17] p-1.5 shadow-2xl shadow-black/60 ring-1 ring-fuchsia-300/20 ${className}`}
    >
      <div className="relative aspect-[692/1558] overflow-hidden rounded-[1.8rem]">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    </div>
  );
}

function DownloadButton({ label = "Télécharger l'application", className = "" }: { label?: string; className?: string }) {
  return (
    <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className={`inline-flex ${className}`}>
      <Button
        size="lg"
        className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:from-fuchsia-400 hover:to-violet-400 text-white font-bold text-base px-7 py-6 shadow-lg shadow-fuchsia-900/40"
      >
        <Download className="mr-2 h-5 w-5" />
        {label}
      </Button>
    </a>
  );
}

function FloatingDownloadButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 md:hidden">
      <AnimatePresence>
        {visible && (
          <motion.a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25 }}
            className="block"
          >
            <Button
              size="lg"
              className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white font-bold text-base py-6 shadow-2xl shadow-fuchsia-950/50"
            >
              <Download className="mr-2 h-5 w-5" />
              Télécharger l’application
            </Button>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}

function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative mt-12">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scroll-px-4 md:scroll-px-6"
      >
        {gallery.map((shot, index) => (
          <motion.figure
            key={shot.image}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="group w-[230px] sm:w-[260px] lg:w-[280px] shrink-0 snap-start"
          >
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5 shadow-xl shadow-black/30">
              <Image
                src={shot.image}
                alt={shot.title}
                width={720}
                height={1280}
                sizes="280px"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 px-1 text-sm font-semibold text-slate-300">{shot.title}</figcaption>
          </motion.figure>
        ))}
      </div>

      <div className="mt-6 hidden md:flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Captures précédentes"
          className="h-12 w-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Captures suivantes"
          className="h-12 w-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default function GuyproGamingLandingPage() {
  return (
    <div className="relative min-h-screen w-full max-w-[100vw] overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 max-w-[100vw] overflow-hidden pointer-events-none">
        <GlowOrb className="top-[-80px] left-[-40px] h-52 w-52 md:left-[-80px] md:h-64 md:w-64 bg-blue-500" />
        <GlowOrb className="top-[180px] right-[-30px] h-52 w-52 md:right-[-60px] md:h-72 md:w-72 bg-fuchsia-500" />
        <GlowOrb className="top-[22%] right-[-40px] h-48 w-48 md:h-64 md:w-64 bg-violet-500" />
        <GlowOrb className="top-[38%] left-[-40px] h-56 w-56 md:h-72 md:w-72 bg-fuchsia-500" />
        <GlowOrb className="top-[55%] right-[5%] h-52 w-52 md:h-64 md:w-64 bg-blue-500" />
        <GlowOrb className="top-[72%] left-[-30px] h-48 w-48 md:h-64 md:w-64 bg-violet-500" />
        <GlowOrb className="bottom-[80px] left-[10%] h-56 w-56 md:h-72 md:w-72 bg-blue-500" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.14),transparent_30%),radial-gradient(circle_at_center,rgba(217,70,239,0.10),transparent_24%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.10),transparent_24%)]" />
        <div className="absolute inset-0 bg-stars opacity-60" />
      </div>

      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#050816]/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-11 w-11 rounded-2xl overflow-hidden ring-1 ring-white/15 bg-white/5 shrink-0">
              <Image
                src="/logo.png"
                alt="Guypro Gaming"
                width={44}
                height={44}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-base md:text-lg font-black tracking-tight truncate">Guypro Gaming</p>
              <p className="text-[11px] md:text-xs text-slate-400 truncate">Jeux, réglages et communauté mobile</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-slate-300">
            <a href="#game-lab" className="hover:text-white transition-colors">Game Lab</a>
            <a href="#fonctionnalites" className="hover:text-white transition-colors">Fonctionnalités</a>
            <a href="#captures" className="hover:text-white transition-colors">Captures</a>
            <a href="#communaute" className="hover:text-white transition-colors">Communauté</a>
            <a href="#avis" className="hover:text-white transition-colors">Avis</a>
          </nav>

          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0">
            <Button className="rounded-2xl bg-white text-slate-950 hover:bg-slate-200 font-semibold px-3 md:px-4">
              <Download className="h-4 w-4 sm:hidden" />
              <span className="hidden sm:inline">Télécharger l’app</span>
            </Button>
          </a>
        </div>
      </header>

      <main className="relative w-full max-w-[100vw] overflow-hidden">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 pt-10 md:pt-16 pb-12 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <a
                href="#game-lab"
                className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/25 bg-fuchsia-400/10 pl-1.5 pr-4 py-1.5 text-xs md:text-sm text-fuchsia-100 hover:bg-fuchsia-400/15 transition-colors"
              >
                <span className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                  Nouveau
                </span>
                Game Lab analyse votre téléphone
              </a>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[0.98]">
                Les meilleurs jeux
                <span className="block bg-gradient-to-r from-white via-fuchsia-200 to-blue-300 bg-clip-text text-transparent">
                  pour votre téléphone
                </span>
              </h1>

              <p className="mt-6 text-slate-300 text-base md:text-xl leading-8 max-w-2xl">
                Trouvez les jeux compatibles avec votre appareil, les réglages optimisés pour chaque titre,
                une bibliothèque Winlator, GameHub, PPSSPP et plus, et une communauté active pour échanger.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
                <DownloadButton className="w-full sm:w-auto" />
                <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-blue-300" />
                  Gratuit sur Google Play
                </div>
              </div>

              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-8 flex items-center gap-4 w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2 pr-4 hover:bg-white/10 transition-colors"
              >
                <div className="relative aspect-video w-32 sm:w-40 shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={YOUTUBE_THUMBNAIL_URL}
                    alt="Aperçu de la vidéo de présentation Guypro Gaming"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="h-9 w-9 text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-base font-black text-white">Vidéo de présentation</p>
                  <p className="text-sm text-slate-400">Découvrez Guypro Gaming en images</p>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative mx-auto h-[450px] sm:h-[540px] lg:h-[620px] w-full max-w-[540px]">
                <div className="absolute left-1/2 top-1/2 h-72 w-72 md:h-96 md:w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-fuchsia-500/40 via-violet-500/30 to-blue-500/40 blur-3xl" />

                <PhoneFrame
                  src="/screens/library-screen.jpg"
                  alt="Bibliothèque de jeux par plateforme"
                  sizes="210px"
                  className="absolute left-1/2 top-10 w-[150px] sm:w-[185px] lg:w-[210px] -translate-x-[112%] -rotate-[9deg] opacity-80"
                />
                <PhoneFrame
                  src="/screens/gamehub-screen.jpg"
                  alt="Jeux compatibles GameHub"
                  sizes="210px"
                  className="absolute left-1/2 top-10 w-[150px] sm:w-[185px] lg:w-[210px] translate-x-[12%] rotate-[9deg] opacity-80"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-0 z-10 w-[190px] sm:w-[230px] lg:w-[265px] -translate-x-1/2"
                >
                  <PhoneFrame
                    src="/screens/gamelab-screen.jpg"
                    alt="Game Lab : analyse du téléphone et score de compatibilité"
                    sizes="265px"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Plateformes */}
        <section aria-label="Plateformes prises en charge" className="relative border-y border-white/10 bg-white/[0.02] py-5">
          <div className="marquee-mask overflow-hidden">
            <div className="animate-marquee flex w-max gap-4">
              {[...platforms, ...platforms].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  aria-hidden={i >= platforms.length}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-slate-200 whitespace-nowrap"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-blue-400" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Game Lab */}
        <section id="game-lab" className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-28">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-violet-500/15 via-white/[0.03] to-fuchsia-500/10 p-6 md:p-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5" />
                  Nouveau
                </div>
                <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight">
                  Game Lab : vos réglages optimisés{" "}
                  <span className="bg-gradient-to-r from-violet-200 to-fuchsia-300 bg-clip-text text-transparent">
                    en un coup d’œil
                  </span>
                </h2>
                <p className="mt-4 text-slate-300 text-base md:text-lg leading-8 max-w-xl">
                  Game Lab reconnaît votre téléphone et vous dit quels jeux tournent bien dessus, avec les FPS
                  estimés et les meilleurs réglages pour chaque titre.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {gameLabPoints.map((point, index) => {
                    const Icon = point.icon;
                    return (
                      <motion.div
                        key={point.title}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: index * 0.07, duration: 0.45 }}
                        className="rounded-2xl border border-white/10 bg-[#0a0d1f]/70 p-5"
                      >
                        <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-violet-400/25 to-fuchsia-500/20 border border-white/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-violet-200" />
                        </div>
                        <h3 className="mt-4 font-black">{point.title}</h3>
                        <p className="mt-1.5 text-sm text-slate-400 leading-6">{point.desc}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="relative mx-auto flex w-full max-w-[460px] items-start justify-center gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-1/2 max-w-[215px]"
                >
                  <PhoneFrame src="/screens/gamelab-screen.jpg" alt="Analyse du téléphone dans Game Lab" sizes="215px" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="w-1/2 max-w-[215px]"
                >
                  <PhoneFrame
                    src="/screens/gamelab-settings-screen.jpg"
                    alt="Réglages recommandés : FPS, graphismes, chauffe et batterie"
                    sizes="215px"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section id="fonctionnalites" className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <SectionTitle
            eyebrow="Fonctionnalités"
            title="Tout ce dont un joueur mobile a besoin"
            desc="Jeux compatibles, réglages, fiches détaillées et communauté : Guypro Gaming réunit tout dans une seule application fluide et moderne."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const featured = index === 0;
              const blue = index % 2 === 1;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  className={featured ? "md:col-span-2" : undefined}
                >
                  <Card
                    className={`group relative h-full overflow-hidden rounded-[1.75rem] border-white/10 text-white backdrop-blur-xl shadow-xl shadow-black/10 transition-colors hover:border-fuchsia-300/30 ${
                      featured
                        ? "bg-gradient-to-br from-fuchsia-500/15 via-white/5 to-violet-500/15"
                        : "bg-white/5"
                    }`}
                  >
                    <CardContent className={featured ? "p-6 md:p-8" : "p-6"}>
                      <div
                        className={`flex items-center justify-center rounded-2xl border border-white/10 transition-transform duration-300 group-hover:scale-110 ${
                          featured ? "h-16 w-16" : "h-14 w-14"
                        } ${
                          blue
                            ? "bg-gradient-to-br from-blue-400/20 to-violet-500/10"
                            : "bg-gradient-to-br from-fuchsia-500/20 to-violet-400/15"
                        }`}
                      >
                        <Icon className={`${featured ? "h-8 w-8" : "h-7 w-7"} ${blue ? "text-blue-200" : "text-fuchsia-200"}`} />
                      </div>
                      <h3 className={featured ? "mt-6 text-2xl font-black" : "mt-5 text-xl font-black"}>
                        {feature.title}
                      </h3>
                      <p className={featured ? "mt-3 max-w-lg text-slate-300 leading-7" : "mt-3 text-slate-300 leading-7"}>
                        {feature.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Captures */}
        <section id="captures" className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <SectionTitle
            eyebrow="Captures d'écran"
            title="Découvrez l'application en images"
            desc="Game Lab, bibliothèque, fiches de jeux et communauté : faites le tour de Guypro Gaming avant de l'installer."
          />
          <Gallery />
        </section>

        {/* Communauté */}
        <section id="communaute" className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mx-auto w-full max-w-[260px] order-2 lg:order-1"
            >
              <div className="absolute inset-0 -z-0 rounded-full bg-gradient-to-br from-blue-500/30 to-fuchsia-500/30 blur-3xl" />
              <PhoneFrame
                src="/screens/community-screen.jpg"
                alt="Espace discussion de la communauté Guypro Gaming"
                sizes="260px"
                className="relative"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <p className="text-blue-200 font-semibold uppercase tracking-[0.2em] text-sm">Communauté</p>
              <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight">
                Rejoignez une communauté gaming active
              </h2>
              <p className="mt-4 text-slate-300 text-base md:text-lg leading-8 max-w-xl">
                Suivez les annonces officielles, échangez avec d’autres joueurs et accédez aux espaces exclusifs
                Guypro Gaming, directement dans l’application.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Megaphone, title: "Guypro Annonces", desc: "Nouvelles vidéos et nouveautés en premier." },
                  { icon: Users, title: "Guypro Discussion", desc: "Posez vos questions, partagez vos astuces." },
                  { icon: Crown, title: "Contact Guypro", desc: "Échange direct avec l'abonnement premium." },
                  { icon: PlayCircle, title: "Chaînes YouTube", desc: "Tutoriels et tests de jeux en vidéo." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="h-11 w-11 shrink-0 rounded-full bg-[#141a33] border border-white/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-fuchsia-200" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-white">{item.title}</p>
                        <p className="mt-1 text-sm text-slate-400 leading-6">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Avis */}
        <section id="avis" className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 md:p-12">
            <SectionTitle
              eyebrow="Avis"
              title="Ce qu'en disent les joueurs"
              desc="Quelques retours de membres de la communauté Guypro Gaming."
            />

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <Card className="h-full rounded-[1.8rem] border-white/10 bg-white/5 backdrop-blur-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <p className="mt-5 text-slate-200 leading-8">“{review.text}”</p>
                      <p className="mt-6 font-bold text-white">{review.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sécurité */}
        <section id="securite" className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
              <div>
                <p className="text-blue-200 text-sm font-semibold uppercase tracking-[0.2em]">Sécurité & transparence</p>
                <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight">
                  Une application claire et respectueuse
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "Contenu informatif",
                    desc: "Guypro Gaming propose des contenus utiles et communautaires autour des jeux vidéo mobiles.",
                  },
                  {
                    title: "Aucun contenu non autorisé",
                    desc: "L'application ne distribue aucun fichier protégé ni contenu non autorisé.",
                  },
                  {
                    title: "Vos données maîtrisées",
                    desc: "Consultez notre politique de confidentialité et supprimez votre compte à tout moment.",
                  },
                  {
                    title: "Disponible sur Google Play",
                    desc: "Installation simple et mises à jour via le Google Play Store.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-[#0a1022] p-5">
                    <div className="h-12 w-12 rounded-2xl bg-blue-400/10 border border-blue-300/20 flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-blue-300" />
                    </div>
                    <h3 className="mt-4 text-lg font-black">{item.title}</h3>
                    <p className="mt-2 text-slate-300 leading-7">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Téléchargement */}
        <section id="download" className="max-w-7xl mx-auto px-4 md:px-6 pt-6 pb-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.2rem] border border-fuchsia-300/20 bg-gradient-to-r from-fuchsia-500/15 via-violet-500/10 to-blue-500/15 p-8 md:p-12 backdrop-blur-xl"
          >
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-fuchsia-500/25 blur-3xl" />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/25 blur-3xl" />
            <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                  Téléchargez Guypro Gaming dès maintenant
                </h2>
                <p className="mt-5 max-w-2xl text-slate-300 text-base md:text-lg leading-8 mx-auto md:mx-0">
                  Découvrez les jeux faits pour votre téléphone, appliquez les bons réglages et rejoignez la communauté.
                </p>
                <ul className="mt-6 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-slate-300">
                  {["Gratuit", "Game Lab inclus", "Mises à jour régulières"].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-fuchsia-300" />
                      {t}
                    </li>
                  ))}
                </ul>
                <DownloadButton label="Télécharger sur Google Play" className="mt-8 w-full sm:w-auto" />
              </div>
              <div className="hidden md:block w-[170px] rotate-[6deg]">
                <PhoneFrame src="/screens/gamelab-settings-screen.jpg" alt="Réglages Game Lab" sizes="190px" />
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#050816]">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-base font-bold text-white">Guypro Gaming</p>
              <p className="mt-2 text-sm text-slate-400">
                Jeux compatibles, réglages optimisés, tutoriels et communauté gaming mobile.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <a href="/privacy-policy" className="transition hover:text-white">
                Privacy Policy
              </a>
              <a href="/delete-account" className="transition hover:text-white">
                Delete Account
              </a>
              <a href="/terms" className="transition hover:text-white">
                Terms of Service
              </a>
              <a href="mailto:guyprogamingapp@gmail.com" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
      <FloatingDownloadButton />
    </div>
  );
}
