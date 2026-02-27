"use client";

import Image from "next/image";
import linnCommerce from "@/assets/linnCommerce.png"
import TheOwl from "@/assets/TheOwlHouse.png"
import runas from "@/assets/Runas.png"
import jornadaL from "@/assets/jornada.png"
import Wallpaper from "@/assets/wallpaper.png"
import WallpaperMobile from "@/assets/wallpaper_mobile.png"
import * as React from "react"

import {
  SectionInicial, 
  Titulo, 
  Subtitulo, 
} from "@/components/MainIndex/styles"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import StatusBadge from "@/components/statusBadge";
import Skills from "@/components/skills";
import MenuLateral from "@/components/asideMenuBar";

const projetos = [
  {
    id: 1,
    titulo: "Runas do Abismo",
    descricao: "Desenvolvido para um trabalho de Matemática do 1º ano do Ensino Médio, jogo usando matemática básica.",
    imagem: runas,
    tags: ["Next.js", "Tailwind-CSS"],
    github: "https://github.com/LilianeFalcao/RunasDoAbismo",
    deploy: "https://runas-do-abismo.vercel.app/"
  },
  {
    id: 2,
    titulo: "Jornada do Leitor",
    descricao: "Projeto desenvolvido para matéria de Programação Web no curso de Bacharelado em sistemas de Informação. É um site para acompanhamento de progresso de leitura para mangás.",
    imagem: jornadaL,
    tags: ["Next.js", "FastAPI", "Styled Components", "Tailwind-CSS", "TypeScript"],
    github: "https://github.com/LilianeFalcao/JornadaDoLeitor_Nextjs",
    deploy: "https://jornada-do-leitor-nextjs.vercel.app/"
  },
  {
    id: 3,
    titulo: "E-Commerce",
    descricao: "E-commerce front-end desenvolvido para estudos de ReactJS.",
    imagem: linnCommerce,
    tags: ["ReactJS","HTML", "CSS", "JavaScript"],
    github: "https://github.com/LilianeFalcao/LinnComerce.git",
  },
  {
    id: 4,
    titulo: "Landing Page",
    descricao: "Landing Page desenvolvida para a animação The Owl House do Disney Channel.",
    imagem: TheOwl,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/LilianeFalcao/LandingPageTheOwlHouse.git",
    deploy: "https://lilianefalcao.github.io/LandingPageTheOwlHouse/"
  },
];

export default function Home() {
  return (
    <>
    <MenuLateral /> 
      <main className="overflow-x-hidden">
        {/* SEÇÃO INICIAL / HERO */}
        <SectionInicial 
          style={{ 
            '--bg-desktop': `url(${Wallpaper.src})`,
            '--bg-mobile': `url(${WallpaperMobile.src})` 
          } as React.CSSProperties}
          className="md:pl-24 lg:pl-32 relative min-h-screen flex flex-col items-center justify-end md:justify-center md:items-start px-6 md:px-20 lg:px-32 bg-cover bg-center bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-desktop)] pb-16 md:pb-0"
        >
          {/* Container Unificado de Texto e Botões */}
          <div className="z-10 flex flex-col items-center md:items-start w-full md:max-w-xl lg:max-w-2xl mb-16 md:mb-0 -translate-y-12 md:translate-y-0">            
            <div className="w-full md:max-w-[40%]">
              <Titulo className="text-center md:text-left text-3xl md:text-6xl lg:text-7xl text-white md:text-[#1a1a1a] drop-shadow-lg leading-tight">
                Linn de <br className="hidden md:block" /> Oliveira Falcão
              </Titulo>
              
              <Subtitulo className="mt-1 mb-3 text-center md:text-left text-white/80 md:text-[#333] text-lg md:text-2xl font-medium">
                Desenvolvedor FullStack
              </Subtitulo>
              </div>
              <div className="flex justify-center md:justify-start">
                <StatusBadge/>
              </div>
            {/* Bloco de Botões */}
            <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-4 w-full md:w-auto">
              <a href="mailto:linnyohan@gmail.com" target="_blank" >
                <button className="w-[200px] h-[50px] rounded-[10px] bg-[#5C1D25] text-white font-bold transition-all hover:scale-105 cursor-pointer shadow-lg">
                Contate-me
              </button>
              </a>
              <a href="/Curriculo.pdf" download="Curriculo_Liliane_Oliveira_Falcao.pdf" className="w-full md:w-auto">
                <button 
                  className="w-full md:w-[200px] h-[50px] rounded-[10px] 
                  border-2 border-white md:border-[#5C1D25] 
                  text-white md:text-[#5C1D25] 
                  font-bold transition-all 
                  hover:bg-white hover:text-[#5C1D25] 
                  md:hover:bg-[#5C1D25] md:hover:text-white 
                  hover:scale-105 cursor-pointer"
                >
                  Currículo
                </button>
              </a>
            </div>
          </div>

          {/* Mouse Scroll */}
          <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-white/80 text-[10px] uppercase tracking-[0.2em] font-bold">
              Scroll
            </span>
          </div>
        </SectionInicial>

        {/* SEÇÃO SOBRE */}
        <section className="flex flex-col items-center bg-[#ececec] py-16 px-6">
          <div className="max-w-4xl w-full px-4 md:px-0">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5C1D25] uppercase tracking-wider">
                Sobre Mim
              </h2>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#5C1D25] to-transparent" />
            </div>

            <div className="text-slate-700 leading-relaxed text-left md:text-lg mb-12 space-y-6">
              <p>
                Sou formado como <span className="font-semibold text-slate-900">Técnico em Informática</span> pelo 
                <span className="text-[#5C1D25] font-bold"> CEFET-MG (Campus Varginha)</span>, onde consolidei minha base em lógica e desenvolvi meus primeiros projetos.
              </p>
              <p>
                Atualmente, curso <span className="font-semibold text-slate-900">Bacharelado em Sistemas de Informação</span> também pelo CEFET-MG e foco meu desenvolvimento em tecnologias modernas como 
                <span className="text-[#5C1D25] font-bold"> React.js, Next.js, Node.js e Python</span>. 
              </p>
              <p>
                Tenho grande interesse na intersecção entre o <span className="font-semibold text-slate-900">desenvolvimento FullStack</span> e o 
                <span className="text-[#5C1D25] font-bold"> design de interfaces (UX/UI)</span>.
              </p>
            </div>
            <Skills />
          </div>
        </section>

        {/* SEÇÃO PROJETOS */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C1D25] uppercase tracking-wider">
              Projetos Desenvolvidos
            </h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-[#5C1D25] to-transparent" />
          </div>          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map((projeto) => (
              <Card key={projeto.id} className="overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 border-slate-200">
                <div className="relative h-52 w-full">
                  <Image src={projeto.imagem} alt={projeto.titulo} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{projeto.titulo}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {projeto.tags.map(tag => (
                      <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded-md uppercase font-bold border border-slate-200">{tag}</span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-slate-600">{projeto.descricao}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between gap-4 pt-4">
                  <Button variant="outline" className="w-full border-slate-300" asChild>
                    <a href={projeto.github} target="_blank" rel="noreferrer">GitHub</a>
                  </Button>
                  {projeto.deploy && (
                    <Button className="w-full bg-[#5C1D25] hover:opacity-90 transition-opacity text-white" asChild>
                      <a href={projeto.deploy} target="_blank" rel="noreferrer">Ver Demo</a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        {/* Seção de Contatos */}
        <section className="flex flex-col items-center bg-[#ececec] py-20 px-6">
          <div className="flex items-center gap-4 mb-12 w-full max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5C1D25] uppercase tracking-wider">Contato</h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-[#5C1D25] to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {/* Bloco de Texto Chamativo */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#5C1D25]">Vamos conversar?</h3>
              <p className="text-slate-600">
                Estou sempre aberto a novos projetos e colaborações, especialmente na intersecção entre 
                <span className="text-[#5C1D25] font-semibold"> Desenvolvimento e Design</span>.
              </p>
            </div>

            {/* Links Diretos (Estilo Cartão) */}
            <div className="flex flex-col gap-4">
              <a href="mailto:linnyohan@gmail.com" target="_blank"
                className="flex items-center gap-3 p-4 bg-white border-l-4 border-[#5C1D25] rounded-r-lg shadow-sm hover:translate-x-2 transition-transform">
                <span className="font-bold text-[#5C1D25]">Email:</span>
                <span className="text-slate-700 font-medium">linnyohan@gmail.com</span>
              </a>
              <a 
                className="flex items-center gap-3 p-4 bg-white border-l-4 border-[#5C1D25] rounded-r-lg shadow-sm hover:translate-x-2 transition-transform">
                <span className="font-bold text-[#5C1D25]">Tel/Whatsapp:</span>
                <span className="text-slate-700 font-medium">(35)9999-9999</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col items-center gap-3 py-12 px-6 text-center border-t border-slate-200 bg-[#5C1D25]">
        <div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-4" />
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">
          Técnico em Informática
        </h2>
        <h1 
          suppressHydrationWarning 
          className="text-sm text-white/80">
          <span className="font-semibold text-white/80">Linn</span> © 2026 Todos os direitos reservados.
        </h1>
        <h1 className="text-xs text-white/70 italic">
          Desenvolvido utilizando: 
          <span className="not-italic font-bold text-[#C84C58] ml-1 drop-shadow-sm">Next.js</span> 
          <span className="mx-2 text-white/30">•</span>
          <span className="not-italic font-bold text-[#C84C58] drop-shadow-sm">Tailwind CSS</span>
        </h1>
      </footer>
    </>
  );
}