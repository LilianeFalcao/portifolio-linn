"use client";

import Image from "next/image";
import linnCommerce from "@/assets/linnCommerce.png"
import TheOwl from "@/assets/TheOwlHouse.png"
import runas from "@/assets/Runas.png"
import jornadaL from "@/assets/jornada.png"
import wallpaper from "@/assets/wallpaper.png"
import * as React from "react"

import {
  SectionInicial, 
  Titulo, 
  Subtitulo, 
  BotoesIniciais, 
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
      <MenuLateral /> {/* Colocado fora do main para evitar conflitos de z-index */}
      
      <main className="overflow-x-hidden"> {/* Evita scroll horizontal indesejado */}
        <SectionInicial 
          style={{ backgroundImage: `url(${wallpaper.src})` }}
          className="relative min-h-screen flex flex-col justify-center items-center px-4 bg-cover bg-center">
          <Titulo className="text-center text-4xl md:text-6xl">Linn de Oliveira Falcão</Titulo>
          <Subtitulo className="mb-4 text-center">Desenvolvedor FullStack</Subtitulo>
          <StatusBadge />
          
          <BotoesIniciais className="flex flex-wrap justify-center gap-4 mt-8">
            <button id="Contate" className="contato">Contate-me</button>
            <a href="/Curriculo.pdf" download="Curriculo_Liliane_Oliveira_Falcao.pdf">
              <button className="curriculo">Currículo</button>
            </a>
          </BotoesIniciais>

          {/* Mouse Scroll - Escondido em telas pequenas */}
          <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">
              Scroll
            </span>
          </div>
        </SectionInicial>

        {/* Seção Sobre */}
        <section className="flex flex-col items-center bg-[#ececec] py-16 px-6">
          <div className="max-w-3xl w-full">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">Sobre Mim</h2>
            <p className="text-slate-700 leading-relaxed text-center md:text-lg mb-10 text-justify">
              Sou formado como Técnico em Informática pelo Centro Federal de Educação Tecnológica de Minas Gerais (CEFET-MG), campus Varginha, onde tive a oportunidade de adquirir uma base sólida e desenvolver meus primeiros projetos. Busco oportunidades para aprofundar e aprimorar os conhecimentos adquiridos durante o curso técnico, ao mesmo tempo em que ganho experiência prática na área. Atualmente, curso o Bacharelado em Sistemas de Informação, também pelo CEFET-MG.
            </p>
            <Skills />
          </div>
        </section>

        {/* Seção de Projetos */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Projetos Desenvolvidos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map((projeto) => (
              <Card key={projeto.id} className="overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 border-slate-200">
                <div className="relative h-52 w-full">
                  <Image 
                    src={projeto.imagem} 
                    alt={projeto.titulo} 
                    fill 
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{projeto.titulo}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {projeto.tags.map(tag => (
                      <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded-md uppercase font-bold border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <CardDescription className="text-slate-600">
                    {projeto.descricao}
                  </CardDescription>
                </CardContent>

                <CardFooter className="flex justify-between gap-4 pt-4">
                  <Button variant="outline" className="w-full border-slate-300" asChild>
                    <a href={projeto.github} target="_blank" rel="noreferrer">GitHub</a>
                  </Button>
                  
                  {projeto.deploy && (
                    <Button className="w-full bg-gradient-to-r from-[#6207FF] to-[#00A5CA] hover:opacity-90 transition-opacity" asChild>
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Vamos trabalhar juntos.</h1>
          <h2 className="text-lg text-muted-foreground mb-10">Informações de Contato</h2>
          
          <Card className="w-full max-w-2xl shadow-lg border-none">
            <CardHeader>
              <CardTitle>Mande uma mensagem</CardTitle>
              <CardDescription>
                Estou sempre aberto a novas oportunidades. Respondo rapidinho!
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nome" className="text-sm font-medium">Nome</label>
                    <Input id="nome" placeholder="Seu nome" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="sobrenome" className="text-sm font-medium">Sobrenome</label>
                    <Input id="sobrenome" placeholder="Seu sobrenome" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensagem" className="text-sm font-medium">Mensagem</label>
                  <Textarea id="mensagem" placeholder="Sua mensagem aqui..." required className="min-h-[120px]" />
                </div>

                <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 transition-colors py-6 text-lg">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="flex flex-col items-center gap-3 py-12 px-6 text-center border-t border-slate-200">
        <div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-4" />
        <h2 className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
          Técnico em Informática
        </h2>
        <h1 
          suppressHydrationWarning 
          className="text-sm text-slate-600">
          <span className="font-semibold text-slate-900">Linn</span> © 2026 Todos os direitos reservados.
        </h1>
        <h1 className="text-xs text-slate-500 italic">
          Desenvolvido utilizando: 
          <span className="not-italic font-semibold text-[#6207FF] ml-1">Next.js</span> 
          <span className="mx-2">•</span>
          <span className="not-italic font-semibold text-[#6207FF]">Tailwind CSS</span>
        </h1>
      </footer>
    </>
  );
}