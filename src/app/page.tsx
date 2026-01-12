"use client";

import Image from "next/image";
import github  from "@/assets/git.svg"
import linkedin from "@/assets/linkedin.svg"
import linnCommerce from "@/assets/linnCommerce.png"
import TheOwl from "@/assets/TheOwlHouse.png"
import runas from "@/assets/Runas.png"
import jornadaL from "@/assets/jornada.png"


import {
  SectionInicial, 
  Titulo, 
  Subtitulo, 
  BotoesIniciais, 
  MenuLateral,
} from "@/components/MainIndex/styles"

import * as React from "react"

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
    descricao: 
    "Projeto desenvolvido para matéria de Programação Web no curso de Bacharelado em sistemas de Informação. É um site para acompanhamento de progresso de leitura para mangás.",
    imagem: jornadaL,
    tags: ["Next.js", "FastAPI", "Styled Components", "Tailwind-CSS", "TypeScript"],
    github: "https://github.com/LilianeFalcao/JornadaDoLeitor_Nextjs",
    deploy: "https://jornada-do-leitor-nextjs.vercel.app/"
  },
  {
    id: 3,
    titulo: "E-Commerce",
    descricao: 
    "E-commerce front-end desenvolvido para estudos de ReactJS.",
    imagem: linnCommerce,
    tags: ["ReactJS","HTML", "CSS", "JavaScript"],
    github: "https://github.com/LilianeFalcao/LinnComerce.git",
  },
  {
    id: 4,
    titulo: "Landing Page",
    descricao: 
    "Landing Page desenvolvida para a animação The Owl House do Disney Channel.",
    imagem: TheOwl,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/LilianeFalcao/LandingPageTheOwlHouse.git",
    deploy: "https://lilianefalcao.github.io/LandingPageTheOwlHouse/"
  },
];
export default function Home() {
  return (
    <>
      <main>
        <SectionInicial className="relative">
          <Titulo>Linn de Oliveira Falcão</Titulo>
          <Subtitulo className="mb-2">Desenvolvedor FullStack</Subtitulo>
          <StatusBadge />
          
          <BotoesIniciais>
            <button id="Contate" className="contato">Contate-me</button>
            <button className="curriculo">Currículo</button>
          </BotoesIniciais>

          {/* Mouse fixado no canto inferior direito para não atrapalhar o centro */}
          <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">
              Scroll
            </span>
          </div>
        </SectionInicial>
        <MenuLateral>
                  <ul>
                    <li>
                      <a href="https://github.com/LilianeFalcao" target="_blank" rel="noreferrer">
                        <Image src={github} alt="github icon" width={24} height={24} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/lilianefalcao/" target="_blank" rel="noreferrer">
                        <Image src={linkedin} alt="linkedin icon" width={24} height={24} />
                      </a>
                    </li>
                </ul>
        </MenuLateral>
      {/*Seção Sobre */}
      <section className="flex flex-col items-center bg-[#ececec] py-10 px-4 mx-autoo">
        <h2 className="text-3xl font-bold mb-10 text-center">Sobre Mim</h2>
        <h2 className="flex items-center gap-2 mb-6">
          Sou formado como Técnico em Informática pelo Centro Federal de Educação Tecnológica de Minas Gerais (CEFET-MG), campus Varginha, onde tive a oportunidade de adquirir uma base sólida e desenvolver meus primeiros projetos. Busco oportunidades para aprofundar e aprimorar os conhecimentos adquiridos durante o curso técnico, ao mesmo tempo em que ganho experiência prática na área. Atualmente, curso o Bacharelado em Sistemas de Informação, também pelo CEFET-MG.
        </h2>
        <Skills />
      </section>
      {/*Seção de Formação */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Projetos Desenvolvidos</h2>
          
          {/* Grid Responsivo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map((projeto) => (
              <Card key={projeto.id} className="overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 m-6">
                
                {/* Container da Imagem */}
                <div className="relative h-48 w-full">
                  <Image 
                    src={projeto.imagem} 
                    alt={projeto.titulo} 
                    fill 
                    className="object-cover"
                  />
                </div>

                <CardHeader>
                  <CardTitle>{projeto.titulo}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {projeto.tags.map(tag => (
                      <span key={tag} className="text-[10px] bg-slate-100 px-2 py-1 rounded-full uppercase font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <CardDescription className="text-sm">
                    {projeto.descricao}
                  </CardDescription>
                </CardContent>

                <CardFooter className="flex justify-between gap-4">
                <Button variant="outline" className="w-full" asChild>
                  <a href={projeto.github} target="_blank" rel="noreferrer">GitHub</a>
                </Button>
                
                {projeto.deploy && (
                  <Button className="w-full bg-gradient-to-r from-[#6207FF] to-[#00A5CA]" asChild>
                    <a href={projeto.deploy} target="_blank" rel="noreferrer">Ver Demo</a>
                  </Button>
                )}
              </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      {/* Seção de contatos */}
      <section className="flex flex-col items-center bg-[#ececec] py-10 px-4 mx-auto">
        <h1 className="text-3xl font-bold mb-2">Vamos trabalhar juntos.</h1>
        <h2 className="text-xl text-muted-foreground mb-6">Informações de Contato</h2>
        <Card className="max-w-4xl">
          <CardHeader>
            <CardTitle>Contate-me</CardTitle>
            <CardDescription>
              Estou sempre aberto a novas oportunidades e projetos desafiadores. 
              Entre em contato e vamos conversar!
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={(e) => { e.preventDefault(); console.log("Form enviado!"); }}> 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="nome" className="text-sm font-medium">Nome</label>
                  <Input id="nome" type="text" placeholder="Seu nome" required />
                </div>
                
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="sobrenome" className="text-sm font-medium">Sobrenome</label>
                  <Input id="sobrenome" type="text" placeholder="Seu sobrenome" required />
                </div>
              </div>

              <div className="flex flex-col space-y-1.5 mt-4">
                <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                <Input id="email" type="email" placeholder="seu@email.com" required />
              </div>

              <div className="flex flex-col space-y-1.5 mt-4">
                <label htmlFor="assunto" className="text-sm font-medium">Assunto</label>
                <Input id="assunto" type="text" placeholder="Em que posso ajudar?" required />
              </div>

              <div className="flex flex-col space-y-1.5 mt-4">
                <label htmlFor="mensagem" className="text-sm font-medium">Mensagem</label>
                <Textarea id="mensagem" placeholder="Sua mensagem aqui..." required className="min-h-[120px]" />
              </div>
              <div className="flex flex-col space-y-1.5 mt-4">
                <Button type="submit" form="contact-form">Enviar Mensagem</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
      </main>
      {/*Footer  */}
      <footer className="flex flex-col items-center gap-3 m-8 text-center">
      <div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-4" />
      <h2 className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-slate-900 font-bold">
        Técnico em Informática
      </h2>

      <h1 className="text-sm text-slate-00">
        <span className="font-semibold text-slate-900">Linn</span> © 2026 Todos os direitos reservados.
      </h1>

      <h1 className="text-xs text-slate-600 italic">
        Desenvolvido utilizando: 
        <span className="not-italic font-semibold text-[#6207FF] ml-1 hover:underline cursor-default">Next.js</span> 
        <span className="not-italic text-slate-600 mx-2">•</span>
        <span className="not-italic font-semibold text-[#6207FF] hover:underline cursor-default">Tailwind CSS</span>
      </h1>
    </footer>
    </>
  );
}
