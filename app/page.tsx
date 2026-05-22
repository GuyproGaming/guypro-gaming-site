"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  PlayCircle,
  ShieldCheck,
  Star,
  MessageCircle,
  Bell,
  Crown,
  ChevronRight,
  CheckCircle2,
  Gamepad2,
  Library,
  Sparkles,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.guypro.gaming.guypro_gaming";

const APK_URL = "#";

const appShots = [
  {
    title: "Communauté gaming active",
    subtitle: "Échangez avec d'autres joueurs facilement",
    image: "/community.jpg",
  },
  {
    title: "Bibliothèque organisée",
    subtitle: "Trouvez rapidement vos jeux compatibles",
    image: "/library.jpg",
  },
  {
    title: "Jeux compatibles Winlator",
    subtitle: "Découvrez les meilleurs jeux PC sur mobile",
    image: "/winlator.jpg",
  },
  {
    title: "Fiches détaillées des jeux",
    subtitle: "Infos, images et compatibilité en un clic",
    image: "/details.jpg",
  },
];

const highlights = [
  {
    icon: Sparkles,
    title: "Guides complets",
    desc: "Des tutoriels simples et utiles pour mieux profiter de vos jeux mobiles.",
  },
  {
    icon: Gamepad2,
    title: "Jeux compatibles",
    desc: "Explorez des catégories organisées selon les plateformes et outils compatibles.",
  },
  {
    icon: MessageCircle,
    title: "Communauté active",
    desc: "Discutez, échangez des conseils et retrouvez les annonces importantes.",
  },
  {
    icon: Library,
    title: "Outils pratiques",
    desc: "Tout est réuni dans une seule application claire, rapide et agréable à utiliser.",
  },
];

const features = [
  {
    icon: MessageCircle,
    title: "Espace discussion",
    desc: "Retrouvez les annonces officielles, les discussions communautaires et les espaces exclusifs Guypro Gaming.",
  },
  {
    icon: Library,
    title: "Bibliothèque par catégories",
    desc: "Naviguez facilement entre Winlator, GameHub, Nintendo Switch Mobile, PS Vita et d'autres univers.",
  },
  {
    icon: Gamepad2,
    title: "Jeux compatibles",
    desc: "Identifiez rapidement les jeux adaptés à vos outils et plateformes mobiles préférés.",
  },
  {
    icon: Smartphone,
    title: "Fiches détaillées",
    desc: "Accédez aux infos clés, captures d'écran, descriptions et compatibilités en un seul endroit.",
  },
  {
    icon: Bell,
    title: "Notifications utiles",
    desc: "Restez au courant des nouvelles publications, mises à jour et contenus ajoutés récemment.",
  },
  {
    icon: Crown,
    title: "Expérience premium",
    desc: "Profitez de fonctionnalités avancées et d'un meilleur confort selon votre abonnement.",
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

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="max-w-2xl">
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

export default function GuyproGamingLandingPage() {
  return (
    <div className="relative min-h-screen w-full max-w-[100vw] overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 max-w-[100vw] overflow-hidden pointer-events-none">
  <GlowOrb className="top-[-80px] left-[-40px] h-52 w-52 md:left-[-80px] md:h-64 md:w-64 bg-blue-500" />
  <GlowOrb className="top-[180px] right-[-30px] h-52 w-52 md:right-[-60px] md:h-72 md:w-72 bg-fuchsia-500" />
  <GlowOrb className="bottom-[80px] left-[10%] h-56 w-56 md:h-72 md:w-72 bg-cyan-400" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_30%),radial-gradient(circle_at_center,rgba(217,70,239,0.10),transparent_24%),radial-gradient(circle_at_bottom,rgba(34,211,238,0.10),transparent_24%)]" />
      </div>

      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#050816]/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-11 w-11 rounded-2xl overflow-hidden ring-1 ring-white/15 bg-white/5 shrink-0">
              <img src="/logo.png" alt="Guypro Gaming" className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0">
              <p className="text-base md:text-lg font-black tracking-tight truncate">Guypro Gaming</p>
              <p className="text-[11px] md:text-xs text-slate-400 truncate">Actualités, discussions et jeux mobiles</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-slate-300">
            <a href="#fonctionnalites" className="hover:text-white transition-colors">Fonctionnalités</a>
            <a href="#captures" className="hover:text-white transition-colors">Captures</a>
            <a href="#avis" className="hover:text-white transition-colors">Avis</a>
            <a href="#securite" className="hover:text-white transition-colors">Sécurité</a>
          </nav>

          <a href="#download" className="hidden sm:inline-flex shrink-0">
  <Button className="rounded-2xl bg-white text-slate-950 hover:bg-slate-200 font-semibold">
    Télécharger l'app
  </Button>
</a>
        </div>
      </header>

      <main className="relative w-full max-w-[100vw] overflow-hidden">
        <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-xs md:text-sm text-fuchsia-200">
                <Sparkles className="h-4 w-4" />
                L'application mobile pensée pour les joueurs
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.96]">
                Toute l'actualité
                <span className="block bg-gradient-to-r from-white via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent">
                  gaming mobile
                </span>
                <span className="block">en un seul endroit</span>
              </h1>

              <p className="mt-6 text-slate-300 text-base md:text-xl leading-8 max-w-2xl">
                Guypro Gaming vous permet de découvrir des jeux mobiles intéressants, consulter des guides pratiques,
                suivre les nouveautés et échanger avec une communauté active autour du gaming.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#download" className="w-full sm:w-auto">
                 <Button
    size="lg"
    className="w-full rounded-2xl bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-bold text-base px-6 py-6"
  >
    <Download className="mr-2 h-5 w-5" />
    Télécharger l'application
  </Button>
</a>
                <a
  href="https://youtu.be/tUwcihvrh0M?si=QYSnYAMljdVviTxJ"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full sm:w-auto"
>
  <Button
    size="lg"
    variant="outline"
    className="w-full rounded-2xl border-white/15 bg-white/5 hover:bg-white/10 text-white text-base px-6 py-6"
  >
    <PlayCircle className="mr-2 h-5 w-5" />
    Voir les fonctionnalités
  </Button>
</a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  "Guides complets",
                  "Jeux compatibles",
                  "Communauté active",
                  "Outils pratiques",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-slate-200 backdrop-blur-sm text-center">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-3 md:p-4 shadow-2xl shadow-fuchsia-950/30 backdrop-blur-xl">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-fuchsia-500/10 via-transparent to-cyan-400/10" />
                <img
                  src="/banner.jpg"
                  alt="Bannière Guypro Gaming"
                  className="relative w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                >
                  <Card className="h-full rounded-[1.5rem] border-white/10 bg-white/5 backdrop-blur-xl">
                    <CardContent className="p-5">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-fuchsia-500/15 to-cyan-400/15 border border-white/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-fuchsia-200" />
                      </div>
                      <h3 className="mt-4 text-lg font-black">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-300 leading-7">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="fonctionnalites" className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28">
          <SectionTitle
            eyebrow="Fonctionnalités"
            title="Une application pensée pour les joueurs mobiles"
            desc="Guypro Gaming regroupe les contenus utiles, les jeux sélectionnés, les guides pratiques et un espace communautaire actif dans une seule expérience mobile fluide et moderne."
          />

          <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                >
                  <Card className="h-full rounded-[1.75rem] border-white/10 bg-white/5 backdrop-blur-xl shadow-xl shadow-black/10">
                    <CardContent className="p-6">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/15 border border-white/10 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-fuchsia-200" />
                      </div>
                      <h3 className="mt-5 text-xl font-black">{feature.title}</h3>
                      <p className="mt-3 text-slate-300 leading-7">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="captures" className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28">
          <SectionTitle
            eyebrow="Captures d'écran"
            title="Découvrez l'application avant même l'installation"
            desc="Vos visiteurs peuvent comprendre en quelques secondes la valeur de Guypro Gaming grâce à une présentation visuelle claire, moderne et rassurante."
          />

          <div className="mt-12 grid md:grid-cols-2 gap-6 xl:gap-8">
            {appShots.map((shot, index) => (
              <motion.div
                key={shot.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="group"
              >
                <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 backdrop-blur-xl">
                  <div className="overflow-hidden">
                    <img
                      src={shot.image}
                      alt={shot.title}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-xl md:text-2xl font-black">{shot.title}</h3>
                    <p className="mt-2 text-slate-300 leading-7">{shot.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/12 to-cyan-400/10 p-8 backdrop-blur-xl"
            >
              <p className="text-fuchsia-200 font-semibold uppercase tracking-[0.2em] text-sm">Pourquoi Guypro Gaming</p>
              <h3 className="mt-4 text-3xl md:text-4xl font-black">Tout ce dont un joueur mobile a besoin, au même endroit</h3>
              <p className="mt-4 text-slate-300 leading-8">
                Guypro Gaming regroupe les actualités gaming, les guides pratiques, les contenus sélectionnés,
                les fiches détaillées des jeux et un espace de discussion actif dans une seule application.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Découverte rapide de nouveaux jeux",
                  "Organisation claire par catégories",
                  "Compatibilité mise en avant",
                  "Expérience mobile fluide et intuitive",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-fuchsia-200 mt-1" />
                    <p className="text-slate-300 leading-7">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="text-cyan-200 font-semibold uppercase tracking-[0.2em] text-sm">Communauté</p>
              <h3 className="mt-4 text-3xl md:text-4xl font-black">Une vraie communauté active autour du gaming</h3>
              <p className="mt-4 text-slate-300 leading-8">
                Rejoignez d'autres joueurs pour échanger des conseils, poser vos questions et partager votre expérience
                autour des jeux mobiles directement dans l'application.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  "Annonces officielles",
                  "Discussions communautaires",
                  "Support et entraide",
                  "Contenus régulièrement mis à jour",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-[#0b1023] p-4 text-slate-200 font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="avis" className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28">
          <SectionTitle
            eyebrow="Avis"
            title="Des retours qui rassurent les nouveaux visiteurs"
            desc="Les avis utilisateurs permettent de montrer que l'application est utile, active et réellement appréciée par sa communauté."
          />

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
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
        </section>

        <section id="securite" className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
              <div>
                <p className="text-cyan-200 text-sm font-semibold uppercase tracking-[0.2em]">Sécurité & transparence</p>
                <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight">
                  Une présentation claire, rassurante et professionnelle
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
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
                    title: "Expérience claire",
                    desc: "Les visiteurs comprennent rapidement ce que propose l'application et pourquoi elle est utile.",
                  },
                  {
                    title: "Image de marque forte",
                    desc: "Le design premium renforce la crédibilité du projet auprès des utilisateurs et partenaires.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-[#0a1022] p-5">
                    <div className="h-12 w-12 rounded-2xl bg-cyan-400/10 border border-cyan-300/20 flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-cyan-300" />
                    </div>
                    <h3 className="mt-4 text-lg font-black">{item.title}</h3>
                    <p className="mt-2 text-slate-300 leading-7">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
  id="download"
  className="max-w-7xl mx-auto px-4 md:px-6 pt-6 pb-24 md:pb-32"
>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.2rem] border border-fuchsia-300/20 bg-gradient-to-r from-fuchsia-500/12 via-blue-500/10 to-cyan-400/12 p-8 md:p-12 text-center backdrop-blur-xl"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Téléchargez Guypro Gaming dès maintenant
            </h2>
            <p className="mt-5 max-w-3xl mx-auto text-slate-300 text-base md:text-lg leading-8">
              Rejoignez une communauté active, découvrez de nouveaux jeux mobiles et accédez à des contenus utiles dans une application moderne et intuitive.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
  <Button
    size="lg"
    className="w-full rounded-2xl bg-fuchsia-500 text-white hover:bg-fuchsia-400 font-bold px-7 py-6"
  >
    <Download className="mr-2 h-5 w-5" />
    Télécharger sur Google Play
  </Button>
</a>

<a href="/guypro-gaming.apk">
  <Button
    size="lg"
    variant="outline"
    className="w-full rounded-2xl border-white/15 bg-white/5 hover:bg-white/10 text-white px-7 py-6"
  >
    <ChevronRight className="mr-2 h-5 w-5" />
    Télécharger l'APK
  </Button>
</a>
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
          Actualités gaming, discussions, tutoriels et nouveautés jeux mobiles.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-slate-300">
        <a
          href="/privacy-policy"
          className="transition hover:text-white"
        >
          Privacy Policy
        </a>
        <a
          href="/delete-account"
          className="transition hover:text-white"
        >
          Delete Account
        </a>
        <a
          href="/terms"
          className="transition hover:text-white"
        >
          Terms of Service
        </a>
        <a
          href="mailto:guyprogamingapp@gmail.com"
          className="transition hover:text-white"
        >
          Contact
        </a>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}
